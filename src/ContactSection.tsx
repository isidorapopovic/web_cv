import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [isError, setIsError] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");
        setIsError(false);

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const text = await response.text();
            const data = text ? JSON.parse(text) : {};

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message.");
            }

            setStatus("Your message has been sent.");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            setIsError(true);
            setStatus(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="px-6 py-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-6xl md:text-8xl font-black mb-3">Contact</h2>
                <p className="text-xl mb-12">Get in touch</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                First name *
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full rounded-2xl border border-foreground/20 bg-transparent px-4 py-3 outline-none focus:border-foreground"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Last name *
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full rounded-2xl border border-foreground/20 bg-transparent px-4 py-3 outline-none focus:border-foreground"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full rounded-2xl border border-foreground/20 bg-transparent px-4 py-3 outline-none focus:border-foreground"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full rounded-2xl border border-foreground/20 bg-transparent px-4 py-3 outline-none focus:border-foreground"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Message *
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full rounded-2xl border border-foreground/20 bg-transparent px-4 py-3 outline-none focus:border-foreground resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded-2xl border border-foreground px-6 py-3 text-base font-semibold transition hover:bg-foreground hover:text-background disabled:opacity-60"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {status && (
                        <p className={`text-sm mt-4 ${isError ? "text-red-600" : "text-green-600"}`}>
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactSection;