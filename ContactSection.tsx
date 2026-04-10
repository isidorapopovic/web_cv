import { useState, FormEvent } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:your@email.com?subject=Contact from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="px-6 md:px-20 py-20">
      <h2 className="font-heading text-5xl md:text-7xl font-black mb-12">Contact Me</h2>

      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-medium mb-2">Get in Touch</h3>
        <p className="text-muted-foreground mb-10">
          Feel free to reach out for collaborations, job opportunities, or to discuss potential projects.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: "First name", key: "firstName", required: true },
            { label: "Last name", key: "lastName", required: true },
            { label: "Email", key: "email", required: true, type: "email" },
            { label: "Phone", key: "phone", required: false, type: "tel" },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm mb-2">
                {field.label} {field.required && "*"}
              </label>
              <input
                type={field.type || "text"}
                required={field.required}
                value={formData[field.key as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                className="w-full bg-transparent border border-foreground/30 rounded-full px-5 py-3 text-sm outline-none focus:border-foreground transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full bg-transparent border border-foreground/30 rounded-2xl px-5 py-3 text-sm outline-none focus:border-foreground transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
