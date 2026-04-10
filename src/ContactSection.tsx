import { FormEvent, useState } from "react";

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

        const subject = `Website contact from ${formData.firstName} ${formData.lastName}`.trim();
        const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `.trim();

        window.location.href = `mailto:popovicisidora17@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="px-6 py-16">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
                <div>
                    <h2 className="mb-4 text-4xl font-bold">Contact</h2>
                    <p className="mb-6 max-w-xl leading-8 text-foreground/80">
                        Feel free to reach out for data, analytics, machine learning, and
                        healthcare innovation roles, as well as collaborations and research
                        opportunities.
                    </p>

                    <div className="space-y-4 text-foreground/80">
                        <p>
                            <span className="font-semibold text-foreground">Email:</span>{" "}
                            <a
                                href="mailto:popovicisidora17@gmail.com"
                                className="underline underline-offset-4"
                            >
                                popovicisidora17@gmail.com
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold text-foreground">Phone:</span>{" "}
                            <a
                                href="tel:+381694130601"
                                className="underline underline-offset-4"
                            >
                                +381 69 413 0601
                            </a>
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-3xl border border-foreground/10 p-6"
                >
                    <div className="grid gap-4 md:grid-cols-2">
                        {[
                            { label: "First name", key: "firstName", required: true, type: "text" },
                            { label: "Last name", key: "lastName", required: true, type: "text" },
                            { label: "Email", key: "email", required: true, type: "email" },
                            { label: "Phone", key: "phone", required: false, type: "tel" },
                        ].map((field) => (
                            <label key={field.key} className="text-sm">
                                <span className="mb-2 block">
                                    {field.label}
                                    {field.required ? " *" : ""}
                                </span>
                                <input
                                    type={field.type}
                                    required={field.required}
                                    value={formData[field.key as keyof typeof formData]}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [field.key]: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-full border border-foreground/20 bg-transparent px-4 py-3 outline-none transition-colors focus:border-foreground"
                                />
                            </label>
                        ))}
                    </div>

                    <label className="mt-4 block text-sm">
                        <span className="mb-2 block">Message *</span>
                        <textarea
                            required
                            rows={5}
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                            className="w-full rounded-3xl border border-foreground/20 bg-transparent px-4 py-3 outline-none transition-colors focus:border-foreground resize-none"
                        />
                    </label>

                    <button
                        type="submit"
                        className="mt-6 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;