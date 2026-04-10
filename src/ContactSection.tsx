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

        const subject = `Contact from ${formData.firstName} ${formData.lastName}`;
        const body = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;

        window.location.href = `mailto:popovicisidora17@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section className="px-6 py-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-6xl md:text-8xl font-black">Contact Me</h2>
                </div>

                <div>
                    <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
                    <p className="text-xl leading-8 mb-10 max-w-2xl">
                        Feel free to reach out for collaborations, job opportunities, or to
                        discuss potential projects.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {[
                            { label: "First name", key: "firstName", required: true, type: "text" },
                            { label: "Last name", key: "lastName", required: true, type: "text" },
                            { label: "Email", key: "email", required: true, type: "email" },
                            { label: "Phone", key: "phone", required: false, type: "tel" },
                        ].map((field) => (
                            <div key={field.key}>
                                <label className="block text-base mb-3">
                                    {field.label} {field.required && "*"}
                                </label>
                                <input
                                    type={field.type || "text"}
                                    required={field.required}
                                    value={formData[field.key as keyof typeof formData]}
                                    onChange={(e) =>
                                        setFormData({ ...formData, [field.key]: e.target.value })
                                    }
                                    className="w-full bg-transparent border border-foreground/30 rounded-full px-5 py-4 text-sm outline-none focus:border-foreground transition-colors"
                                />
                            </div>
                        ))}

                        <div>
                            <label className="block text-base mb-3">Message</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                rows={5}
                                className="w-full bg-transparent border border-foreground/30 rounded-2xl px-5 py-4 text-sm outline-none focus:border-foreground transition-colors resize-none"
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
            </div>
        </section>
    );
};

export default ContactSection;