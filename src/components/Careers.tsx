import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";

type JobOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
};

// TODO: replace with your actual open positions
const openings: JobOpening[] = [
  {
    id: "site-supervisor",
    title: "Site Supervisor",
    department: "Operations",
    location: "Chh. Sambhajinagar",
    type: "Full-time",
  },
  {
    id: "trainee-technician",
    title: "Trainee Technician",
    department: "Fabrication & Assembly",
    location: "Chh. Sambhajinagar",
    type: "Trainee / Internship",
  },
  {
    id: "hr-executive",
    title: "HR Executive",
    department: "Workforce Management",
    location: "Chh. Sambhajinagar",
    type: "Full-time",
  },
  {
    id: "safety-officer",
    title: "Safety Officer",
    department: "Compliance",
    location: "Chh. Sambhajinagar",
    type: "Full-time",
  },
];

const MAX_RESUME_SIZE_MB = 5;
const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  position: "",
  message: "",
};

const Careers = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleApplyClick = (title: string) => {
    setFormData((prev) => ({ ...prev, position: title }));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (!file) {
      setResumeFile(null);
      return;
    }

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        resume: "Please upload a PDF or Word document (.pdf, .doc, .docx).",
      }));
      setResumeFile(null);
      e.target.value = "";
      return;
    }

    if (file.size > MAX_RESUME_SIZE_MB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resume: `File must be under ${MAX_RESUME_SIZE_MB}MB.`,
      }));
      setResumeFile(null);
      e.target.value = "";
      return;
    }

    setErrors((prev) => ({ ...prev, resume: "" }));
    setResumeFile(file);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.position.trim()) newErrors.position = "Please select a position";
    if (!resumeFile) newErrors.resume = "Please attach your resume";

    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    if (!validateForm() || !resumeFile) return;

    try {
      setIsSubmitting(true);

      const storageRef = ref(
        storage,
        `resumes/${Date.now()}-${resumeFile.name}`,
      );
      const uploadResult = await uploadBytes(storageRef, resumeFile);
      const resumeUrl = await getDownloadURL(uploadResult.ref);

      await addDoc(collection(db, "applications"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        position: formData.position,
        message: formData.message.trim(),
        resumeUrl,
        resumeName: resumeFile.name,
        appliedAt: serverTimestamp(),
      });

      setSubmitted(true);
      setFormData(initialFormData);
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setTimeout(() => setSubmitted(false), 6000);
    } catch (error) {
      console.error("Failed to submit application:", error);
      setSubmitError(
        "Something went wrong submitting your application. Please try again or email your resume directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Join Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore current openings and apply directly with your resume —
            students and freshers welcome.
          </p>
        </motion.div>

        {/* Open Positions */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {openings.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="card-surface flex flex-col justify-between border-t-4 border-primary"
            >
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                  {job.type}
                </span>
                <h3 className="text-lg font-bold text-dark mb-1">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {job.department} &middot; {job.location}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleApplyClick(job.title)}
                className="mt-2 w-full px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-all duration-300"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gray-50 rounded-2xl shadow-lg p-6 sm:p-10 scroll-mt-24"
        >
          <h3 className="text-2xl font-bold text-dark mb-2 text-center">
            Submit Your Application
          </h3>
          <p className="text-gray-600 text-sm text-center mb-8">
            Don't see a fit above? Submit your resume anyway — we'll reach
            out when a matching role opens up.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200"
              >
                ✓ Application received! We'll get back to you soon.
              </motion.div>
            )}

            {submitError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200"
              >
                {submitError}
              </motion.div>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-dark font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-dark font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="+91 (XXX) XXXX-XXXX"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-dark font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-dark font-semibold mb-2">
                Position *
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.position ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select a position</option>
                {openings.map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
                ))}
                <option value="General Application">
                  General Application
                </option>
              </select>
              {errors.position && (
                <p className="text-red-600 text-sm mt-1">{errors.position}</p>
              )}
            </div>

            <div>
              <label className="block text-dark font-semibold mb-2">
                Message (optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Anything you'd like us to know..."
              ></textarea>
            </div>

            <div>
              <label className="block text-dark font-semibold mb-2">
                Resume *
              </label>
              <label className="flex min-h-[70px] w-full cursor-pointer items-center justify-between rounded-lg border border-dashed border-gray-300 bg-white px-5 py-4 text-gray-700 shadow-sm transition duration-200 hover:border-primary hover:bg-primary/5 focus-within:border-primary focus-within:outline-none">
                <span className="truncate pr-3">
                  {resumeFile ? resumeFile.name : "Select PDF or Word file (max 5MB)"}
                </span>
                <span className="shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                  Browse
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {errors.resume && (
                <p className="text-red-600 text-sm mt-1">{errors.resume}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
