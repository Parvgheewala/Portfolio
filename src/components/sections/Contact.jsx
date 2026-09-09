import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, XCircle, Send } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { API_URL } from "../../lib/utils";

const initialState = { name: "", email: "", message: "" };
// status: "idle" | "loading" | "success" | "error"

const fieldClasses =
  "w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-muted transition-colors duration-200 focus:border-accent focus-visible:outline-none";

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData(initialState);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="08 — Contact"
        title="Have a system to build?"
        description="Open to backend, distributed-systems, and AI-infrastructure roles. My inbox is open."
        align="center"
      />

      <Reveal className="mx-auto max-w-xl">
        <GlassCard className="p-6 sm:p-8" hover={false}>
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-secondary">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Your name"
                className={fieldClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-secondary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={fieldClasses}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="What are you building?"
                className={`${fieldClasses} resize-none`}
              />
            </div>

            <Button type="submit" variant="primary" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending
                </>
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </Button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="flex items-center justify-center gap-2 text-sm text-success"
              >
                <CheckCircle2 size={16} /> Message sent — I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="flex items-center justify-center gap-2 text-sm text-error"
              >
                <XCircle size={16} /> Something went wrong — please try again.
              </motion.p>
            )}
          </form>
        </GlassCard>
      </Reveal>
    </Section>
  );
};

export default Contact;
