import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle, Phone, Mail, Clock, Shield } from "lucide-react";

const BookingSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'var(--hero-gradient)' }} />
      <div className="absolute inset-0 bg-dots opacity-5" />

      <div className="container-tight relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Get Started Today
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-5 text-white leading-tight">
              Book Your <br className="hidden md:block" />First Lesson
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed">Ready to get on the road? Fill in the form and we'll get back to you within 2 hours to confirm your lesson.</p>

            <div className="space-y-4 mb-10">
              {[
                { icon: Phone, label: "Call us", value: "0468 525 626", href: "tel:0468525626" },
                { icon: Mail, label: "Email", value: "info@dtechdrivertraining.com.au", href: "mailto:info@dtechdrivertraining.com.au" },
                { icon: Clock, label: "Hours", value: "7 AM – 7 PM, 7 days a week" },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-white font-display font-semibold hover:text-white/80 transition-colors text-sm">{c.value}</a>
                    ) : (
                      <p className="text-white font-display font-semibold text-sm">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-white/50 text-xs">
              <Shield className="w-4 h-4" />
              Your information is safe and never shared with third parties.
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 text-center shadow-2xl">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ background: 'hsl(var(--success-light))' }}>
                  <CheckCircle className="w-8 h-8" style={{ color: 'hsl(var(--success))' }} />
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Request Sent!</h3>
                <p className="text-muted-foreground text-sm">We'll contact you within 2 hours to confirm your lesson.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-7 md:p-8 space-y-4 shadow-2xl">
                <div className="text-center mb-4">
                  <p className="font-display font-bold text-lg text-foreground">Request a Booking</p>
                  <p className="text-sm text-muted-foreground">We'll confirm within 2 hours</p>
                </div>
                {[
                  { label: "Full Name", type: "text", placeholder: "John Smith" },
                  { label: "Phone", type: "tel", placeholder: "0400 000 000" },
                  { label: "Email", type: "email", placeholder: "john@example.com" },
                ].map(f => (
                  <div key={f.label}>
                    <label className="block text-xs font-display font-semibold mb-1.5 text-foreground">{f.label}</label>
                    <input required type={f.type} placeholder={f.placeholder} className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 font-body text-sm transition-all" />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-display font-semibold mb-1.5 text-foreground">Preferred Time</label>
                  <select required className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 font-body text-sm transition-all">
                    <option value="">Select a time</option>
                    <option>Morning (7 AM – 12 PM)</option>
                    <option>Afternoon (12 PM – 4 PM)</option>
                    <option>Evening (4 PM – 7 PM)</option>
                  </select>
                </div>
                <button type="submit" className="w-full btn-primary justify-center gap-2 mt-2 py-4">
                  Request Booking <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-muted-foreground">No payment required. Free consultation included.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
