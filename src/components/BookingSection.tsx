import { motion } from "framer-motion";
import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";

const BookingSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="container-tight relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div className="section-badge">Get Started</div>
            <h2 className="section-title">Book Your <span className="text-gradient">Lesson</span></h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">Ready to get on the road? Fill in the form and we'll get back to you within 2 hours to confirm your lesson.</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--primary-light))' }}>📞</div>
                <div>
                  <p className="text-xs text-muted-foreground">Call us</p>
                  <a href="tel:0468525626" className="text-foreground font-display font-semibold hover:text-primary transition-colors">0468 525 626</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--primary-light))' }}>📧</div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a href="mailto:info@dtechdrivertraining.com.au" className="text-foreground font-display font-semibold hover:text-primary transition-colors text-xs sm:text-sm">info@dtechdrivertraining.com.au</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            {submitted ? (
              <div className="card-elevated p-10 text-center">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ background: 'hsl(var(--primary-light))' }}>
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Request Sent!</h3>
                <p className="text-muted-foreground text-sm">We'll contact you shortly to confirm your lesson.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-elevated p-7 md:p-8 space-y-4">
                <div className="text-center mb-2">
                  <p className="font-display font-bold text-foreground">Request a Booking</p>
                  <p className="text-xs text-muted-foreground">We'll confirm within 2 hours</p>
                </div>
                {[
                  { label: "Full Name", type: "text", placeholder: "John Smith" },
                  { label: "Phone", type: "tel", placeholder: "0400 000 000" },
                  { label: "Email", type: "email", placeholder: "john@example.com" },
                ].map(f => (
                  <div key={f.label}>
                    <label className="block text-xs font-display font-semibold mb-1.5 text-foreground">{f.label}</label>
                    <input required type={f.type} placeholder={f.placeholder} className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 font-body text-sm transition-all" />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-display font-semibold mb-1.5 text-foreground">Preferred Time</label>
                  <select required className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 font-body text-sm transition-all">
                    <option value="">Select a time</option>
                    <option>Morning (7 AM – 12 PM)</option>
                    <option>Afternoon (12 PM – 4 PM)</option>
                    <option>Evening (4 PM – 7 PM)</option>
                  </select>
                </div>
                <button type="submit" className="w-full btn-primary justify-center gap-2 mt-2">
                  Request Booking <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
