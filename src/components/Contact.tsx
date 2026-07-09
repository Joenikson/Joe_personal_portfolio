import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { portfolioOwner } from '../data';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [sendingState, setSendingState] = useState<'idle' | 'sending' | 'success'>('idle');

  const validateForm = (): boolean => {
    const tempErrors: ValidationErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Please enter your full name.';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Please enter your email address.';
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address.';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Please supply a subject line.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Please write a message description.';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Messages must be at least 10 characters long.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSendingState('sending');
    
    // Simulate API transport handshake
    setTimeout(() => {
      setSendingState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-blue-50/50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20" id="contact-heading-container">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3 font-sans">
            Inquiries
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-gray-900 tracking-tight">
            Get In Touch
          </h2>
          <div className="h-[4px] w-12 bg-primary rounded-full mt-4 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col items-start gap-8" id="contact-info-panel">
            <div className="text-left">
              <h3 className="font-sans font-bold text-2xl text-gray-900 mb-4 leading-tight">
                Let's discuss a project or opportunity!
              </h3>
              <p className="text-gray-500 font-sans leading-relaxed text-base">
                Whether you're looking to build a new product, establish a premium design system, or consult on a frontend architecture, feel free to reach out. I'm always open to new connections.
              </p>
            </div>

            {/* Info Items */}
            <div className="flex flex-col gap-5 w-full" id="contact-details-list">
              
              {/* Mail */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100/50 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider font-sans">Email</p>
                  <a href={`mailto:${portfolioOwner.socials.email}`} className="text-gray-900 font-bold text-sm hover:text-primary transition-colors font-sans">
                    {portfolioOwner.socials.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100/50 flex items-center justify-center text-cyan-600">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider font-sans">Phone</p>
                  <a href={`tel:${portfolioOwner.socials.phone}`} className="text-gray-900 font-bold text-sm hover:text-primary transition-colors font-sans">
                    {portfolioOwner.socials.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100/50 flex items-center justify-center text-emerald-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider font-sans">Location</p>
                  <p className="text-gray-900 font-bold text-sm font-sans">
                    {portfolioOwner.socials.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Socials Connection */}
            <div className="w-full pt-6 border-t border-gray-200" id="contact-socials-box">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4 font-sans text-left">
                Connect Elsewhere
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={portfolioOwner.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 rounded-xl shadow-xs transition-all focus:outline-none"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={portfolioOwner.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-gray-200 hover:border-blue-200 text-gray-700 hover:text-blue-600 rounded-xl shadow-xs transition-all focus:outline-none"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full" id="contact-form-panel">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
              
              {/* Form Send Status Animation */}
              <AnimatePresence mode="wait">
                {sendingState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                    id="contact-success-state"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 border-2 border-emerald-200">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="font-sans font-extrabold text-2xl text-gray-900 mb-3">
                      Message Dispatched!
                    </h3>
                    <p className="text-gray-500 text-base max-w-md leading-relaxed font-sans mb-8">
                      Thank you for your response. Your message has successfully parsed through my simulated API transport layer. I will follow up with you shortly!
                    </p>
                    <button
                      onClick={() => setSendingState('idle')}
                      className="px-6 py-3 rounded-xl border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold text-sm transition-all cursor-pointer focus:outline-none"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 text-left"
                    id="contact-form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col items-start gap-2">
                        <label htmlFor="form-name" className="text-sm font-semibold text-gray-700 font-sans">
                          Full Name
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          disabled={sendingState === 'sending'}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.name ? 'border-rose-300 focus:ring-rose-100' : 'border-gray-200 focus:ring-blue-100'
                          } bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 transition-all text-sm text-gray-900 font-sans`}
                          placeholder="Jane Doe"
                        />
                        {errors.name && (
                          <span className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle size={12} />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col items-start gap-2">
                        <label htmlFor="form-email" className="text-sm font-semibold text-gray-700 font-sans">
                          Email Address
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={sendingState === 'sending'}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.email ? 'border-rose-300 focus:ring-rose-100' : 'border-gray-200 focus:ring-blue-100'
                          } bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 transition-all text-sm text-gray-900 font-sans`}
                          placeholder="jane@example.com"
                        />
                        {errors.email && (
                          <span className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle size={12} />
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="flex flex-col items-start gap-2">
                      <label htmlFor="form-subject" className="text-sm font-semibold text-gray-700 font-sans">
                        Subject
                      </label>
                      <input
                        id="form-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        disabled={sendingState === 'sending'}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.subject ? 'border-rose-300 focus:ring-rose-100' : 'border-gray-200 focus:ring-blue-100'
                        } bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 transition-all text-sm text-gray-900 font-sans`}
                        placeholder="Project Partnership, Hiring Inquiry, etc."
                      />
                      {errors.subject && (
                        <span className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle size={12} />
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message description */}
                    <div className="flex flex-col items-start gap-2">
                      <label htmlFor="form-message" className="text-sm font-semibold text-gray-700 font-sans">
                        Message
                      </label>
                      <textarea
                        id="form-message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={sendingState === 'sending'}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.message ? 'border-rose-300 focus:ring-rose-100' : 'border-gray-200 focus:ring-blue-100'
                        } bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 transition-all text-sm text-gray-900 font-sans resize-none`}
                        placeholder="Describe your design specifications or project details..."
                      />
                      {errors.message && (
                        <span className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle size={12} />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={sendingState === 'sending'}
                      className="group w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none shadow-md shadow-blue-500/10 focus:ring-4 focus:ring-blue-100"
                      id="contact-submit-btn"
                    >
                      {sendingState === 'sending' ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Securing Connection...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
