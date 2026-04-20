import { useState, useEffect, type FormEvent } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "info">(
    "info",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!statusMessage) return;

    const timer = window.setTimeout(() => {
      setStatusMessage("");
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [statusMessage]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("");

    if (!title.trim() || !description.trim() || !imageFile) {
      setStatusType("error");
      setStatusMessage("Please fill in all fields and select an image.");
      return;
    }

    try {
      setIsSubmitting(true);
      setStatusType("info");
      setStatusMessage("Uploading blog, please wait...");

      const storageRef = ref(storage, `blogs/${Date.now()}-${imageFile.name}`);
      const uploadResult = await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(uploadResult.ref);

      await addDoc(collection(db, "blogs"), {
        title: title.trim(),
        description: description.trim(),
        imageUrl,
        date: new Date().toISOString(),
      });

      setTitle("");
      setDescription("");
      setImageFile(null);
      setStatusType("success");
      setStatusMessage("Blog uploaded successfully.");
    } catch (error) {
      console.error("Upload failed:", error);
      setStatusType("error");
      setStatusMessage("Failed to upload blog. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusStyles = {
    success: "bg-emerald-50 border-emerald-200 text-emerald-800",
    error: "bg-rose-50 border-rose-200 text-rose-800",
    info: "bg-slate-50 border-slate-200 text-slate-900",
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-[2rem] bg-white border border-slate-200 shadow-2xl shadow-slate-200/80 overflow-hidden">
          <div className="bg-slate-900 px-8 py-10 sm:px-10 sm:py-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300 mb-4">
              Admin Dashboard
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white">
              Upload Blog
            </h1>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              Add a new blog post with a featured image and publish it to your
              Firestore blog collection.
            </p>
          </div>

          <div className="px-6 pb-10 pt-8 sm:px-10 sm:pt-10">
            {statusMessage ? (
              <div
                className={`mb-6 rounded-3xl border p-4 text-sm shadow-sm ${statusStyles[statusType]}`}
              >
                {statusMessage}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-1">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 shadow-sm transition duration-200 focus:border-slate-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-200"
                    placeholder="Enter blog title"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    rows={6}
                    className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 shadow-sm transition duration-200 focus:border-slate-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-200"
                    placeholder="Write a short description for the blog"
                  />
                </div>

                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Image
                  </label>
                  <label className="flex min-h-[70px] w-full cursor-pointer items-center justify-between rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-5 py-4 text-slate-700 shadow-sm transition duration-200 hover:border-slate-400 hover:bg-slate-100 focus-within:border-slate-500 focus-within:bg-white focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-200">
                    <span>
                      {imageFile ? imageFile.name : "Select an image file"}
                    </span>
                    <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                      Browse
                    </span>
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={(event) =>
                        setImageFile(event.target.files?.[0] ?? null)
                      }
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition duration-200 hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        strokeWidth="4"
                        className="opacity-25"
                      />
                      <path
                        d="M4 12a8 8 0 018-8"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="opacity-75"
                      />
                    </svg>
                    Uploading...
                  </>
                ) : (
                  "Submit Blog"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
