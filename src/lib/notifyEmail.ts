import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// All form submissions notify this inbox.
const NOTIFY_EMAIL = "suresh@eaglehitec.com";

export const isEmailNotifyConfigured = Boolean(
  SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY,
);

type NotificationParams = {
  formType: "Job Application" | "Contact Message";
  name: string;
  email?: string;
  phone: string;
  position?: string;
  message: string;
  resumeUrl?: string;
};

const sendNotification = async ({
  formType,
  name,
  email,
  phone,
  position,
  message,
  resumeUrl,
}: NotificationParams) => {
  if (!isEmailNotifyConfigured) {
    console.warn(
      "EmailJS is not configured (missing VITE_EMAILJS_* env vars) — skipping email notification.",
    );
    return;
  }

  await emailjs.send(
    SERVICE_ID as string,
    TEMPLATE_ID as string,
    {
      to_email: NOTIFY_EMAIL,
      form_type: formType,
      name,
      email: email || "-",
      phone,
      position: position || "-",
      message: message || "(no message provided)",
      resume_link: resumeUrl || "-",
    },
    { publicKey: PUBLIC_KEY as string },
  );
};

export const sendApplicationEmail = (params: {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  resumeUrl: string;
}) => sendNotification({ formType: "Job Application", ...params });

export const sendContactEmail = (params: {
  name: string;
  phone: string;
  message: string;
}) => sendNotification({ formType: "Contact Message", ...params });
