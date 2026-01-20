import React, { useMemo, useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxrae42kcw1Ik662iIfzvVH58oC477cBu_mXKeAYTL64sN8dJU-wa5UvNEaS8vf9onZ6Q/exec"; // must end with /exec

const CONTACT_EMAIL = "connect@businessbydata.co";
const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/rema-vaish/";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  const normalize = (v: string) => v.trim();

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    const name = normalize(formData.name);
    const email = normalize(formData.email);
    const company = normalize(formData.company);
    const phone = normalize(formData.phone);
    const message = normalize(formData.message);

    if (!name) nextErrors.name = "Full name is required.";

    if (!email) {
      nextErrors.email = "Email address is required.";
    } else if (!emailRegex.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!company) nextErrors.company = "Company name is required.";

    if (!phone) {
      nextErrors.phone = "Phone number is required.";
    } else {
      const digitsOnly = phone.replace(/\D/g, "");
      const hasPlus = phone.startsWith("+");
      if (!hasPlus) {
        nextErrors.phone = "Include country code (e.g., +234 801 234 5678).";
      } else if (digitsOnly.length < 8 || digitsOnly.length > 15) {
        nextErrors.phone = "Enter a valid phone number with country code (8–15 digits).";
      }
    }

    if (!message) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setSubmitted(false);

    if (!validate()) return;

    setLoading(true);

    try {
      const payload = {
        fullName: normalize(formData.name),
        email: normalize(formData.email),
        company: normalize(formData.company),
        phone: normalize(formData.phone),
        message: normalize(formData.message),
        page: window.location.href,
        userAgent: navigator.userAgent,
      };

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      // Apps Script returns JSON { ok: true } or { ok:false, error:"..." }
      const raw = await res.text();

let json: any = null;
try {
  json = JSON.parse(raw);
} catch {}

if (!res.ok) {
  throw new Error(`HTTP ${res.status}: ${raw.slice(0, 200)}`);
}

if (!json?.ok) {
  throw new Error(json?.error || `Unexpected response: ${raw.slice(0, 200)}`);
}


      setSubmitted(true);
      resetForm();
    } catch (err) {
      console.error(err);
      alert(`Could not submit right now. Please email ${CONTACT_EMAIL}.`);

    } finally {
      setLoading(false);
    }
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
                <h3 className="text-lg font-bold text-zinc-900 mb-6">
                  What to expect from the first call:
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Problem Diagnostic</p>
                      <p className="text-sm text-zinc-500">
                        A 30-minute deep dive into your current decision-making bottlenecks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Strategic Alignment</p>
                      <p className="text-sm text-zinc-500">
                        Initial thoughts on whether you need structural logic or just better governance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Tailored Proposal</p>
                      <p className="text-sm text-zinc-500">
                        A clear outline of how Business By Data can help, with defined scope and deliverables.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-100">
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">
                  Direct Contact
                </p>

                <p className="text-lg font-medium text-zinc-900">
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Business%20Inquiry`}
                    className="hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  <a
                    href={LINKEDIN_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-900 hover:underline"
                  >
                    Connect on LinkedIn
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
                      resetForm();
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
                    disabled={loading}
                    className="w-full bg-zinc-900 text-white py-4 rounded-sm font-semibold hover:bg-zinc-800 transition-all shadow-md active:scale-[0.98] disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Please include a reachable email and an international phone number (with country code).
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
