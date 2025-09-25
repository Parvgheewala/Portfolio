import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://127.0.0.1:8000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <section id="contact" className="py-20 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white/80 dark:bg-black/70 backdrop-blur-md p-8 rounded-2xl shadow-lg transition-colors duration-300">
        <h2 className="text-4xl font-bold mb-6 text-center dark:text-white text-black">Contact Us</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold mb-1 dark:text-gray-300 text-gray-700">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 dark:text-gray-300 text-gray-700">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 dark:text-gray-300 text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md h-32 bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Message"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-semibold shadow-md transition-colors"
            >
              Submit
            </button>
          </div>
          {status && <p className="text-center mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
