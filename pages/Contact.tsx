import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});

  // Strict-ish validation:
  // - Email: browser already checks format via type="email", but we also sanity-check.
  // - Phone: must include country code (starts with + and 8-15 digits total, allowing spaces/dashes).
  const validate = () => {
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const company = formData.company.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name) newErrors.name = "Full name is required.";

    if (!email) {
      newErrors.email = "Email address is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) newErrors.email = "Please enter a valid email address.";
    }

    if (!company) newErrors.company = "Company name is required.";

    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else {
      // Require a country code: +<country><number>
      // Allows spaces, dashes, parentheses; must still total 8–15 digits.
      const digitsOnly = phone.replace(/\D/g, "");
      const hasPlus = phone.startsWith("+");
      if (!hasPlus) {
        newErrors.phone = "Include country code (e.g., +234 801 234 5678).";
      } else if (digitsOnly.length < 8 || digitsOnly.length > 15) {
        newErrors.phone = "Enter a valid phone number with country code (8–15 digits).";
      }
    }

    if (!message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-8">
                Let's discuss your data strategy.
              </h1>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-12">
                Whether you need a full measurement foundation or fractional advisory, the first step is a discovery call.
              </p>

              <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-sm">
                <h3 className="text-lg font-bold text-zinc-900 mb-6">What to expect from the first call:</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Problem Diagnostic</p>
                      <p className="text-sm text-zinc-500">A 30-minute deep dive into your current decision-making bottlenecks.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Strategic Alignment</p>
                      <p className="text-sm text-zinc-500">Initial thoughts on whether you need structural logic or just better governance.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Tailored Proposal</p>
                      <p className="text-sm text-zinc-500">A clear outline of how Business By Data can help, with defined scope and deliverables.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-100">
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Direct Contact</p>
                <p className="text-lg text-zinc-900 font-medium">
                  <a href="mailto:connect@businessbydata.co" className="hover:underline">
                    connect@businessbydata.co
                  </a>
                </p>
                <p className="text-zinc-500 text-sm mt-1">Lagos, Nigeria | Global Hybrid Advisory</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 border border-zinc-200 rounded-sm shadow-sm relative">
              {submitted ? (
                <div className="text-center py-20 animate-in zoom-in-95 duration-500">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">Inquiry Received</h3>
                  <p className="text-zinc-500">
                    Thank you for reaching out. We will get back to you within 24 business hours to schedule a call.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrors({});
                    }}
                    className="mt-8 text-sm font-semibold text-zinc-900 border-b border-zinc-900 pb-1"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className={`w-full px-4 py-3 bg-zinc-50 border rounded-sm focus:outline-none focus:border-zinc-900 focus:bg-white transition-all text-sm ${
                          errors.name ? "border-red-300" : "border-zinc-100"
                        }`}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-2 text-xs text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className={`w-full px-4 py-3 bg-zinc-50 border rounded-sm focus:outline-none focus:border-zinc-900 focus:bg-white transition-all text-sm ${
                          errors.email ? "border-red-300" : "border-zinc-100"
                        }`}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      className={`w-full px-4 py-3 bg-zinc-50 border rounded-sm focus:outline-none focus:border-zinc-900 focus:bg-white transition-all text-sm ${
                        errors.company ? "border-red-300" : "border-zinc-100"
                      }`}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Organization Ltd."
                    />
                    {errors.company && <p className="mt-2 text-xs text-red-600">{errors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                      Phone Number (with country code)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      inputMode="tel"
                      className={`w-full px-4 py-3 bg-zinc-50 border rounded-sm focus:outline-none focus:border-zinc-900 focus:bg-white transition-all text-sm ${
                        errors.phone ? "border-red-300" : "border-zinc-100"
                      }`}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 801 234 5678"
                    />
                    {errors.phone && <p className="mt-2 text-xs text-red-600">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className={`w-full px-4 py-3 bg-zinc-50 border rounded-sm focus:outline-none focus:border-zinc-900 focus:bg-white transition-all text-sm resize-none ${
                        errors.message ? "border-red-300" : "border-zinc-100"
                      }`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us briefly about your current data challenges..."
                    />
                    {errors.message && <p className="mt-2 text-xs text-red-600">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-zinc-900 text-white py-4 rounded-sm font-semibold hover:bg-zinc-800 transition-all shadow-md active:scale-[0.98]"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    By submitting, you confirm your details are accurate and include a reachable email and an international phone number (with country code).
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
