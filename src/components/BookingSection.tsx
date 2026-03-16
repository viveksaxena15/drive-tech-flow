import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const BookingSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section-padding bg-secondary/50">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 text-foreground">Book Your <span className="text-gradient">Lesson Now</span></h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">Ready to get on the road? Fill in the form and we'll get back to you within 2 hours to confirm your lesson.</p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>📞 Or call us: <a href="tel:0468525626" className="text-primary font-semibold">0468 525 626</a></p>
              <p>📧 Email: <a href="mailto:info@dtechdrivertraining.com.au" className="text-primary font-semibold">info@dtechdrivertraining.com.au</a></p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="card-elevated p-10 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Booking Request Sent!</h3>
                <p className="text-muted-foreground">We'll contact you shortly to confirm your lesson.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-background border border-border rounded-2xl shadow-lg p-8 space-y-5">
                <div>
                  <label className="block text-sm font-display font-semibold mb-2 text-foreground">Full Name</label>
                  <input required type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body" />
                </div>
                <div>
                  <label className="block text-sm font-display font-semibold mb-2 text-foreground">Phone</label>
                  <input required type="tel" placeholder="Your phone number" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body" />
                </div>
                <div>
                  <label className="block text-sm font-display font-semibold mb-2 text-foreground">Email</label>
                  <input required type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body" />
                </div>
                <div>
                  <label className="block text-sm font-display font-semibold mb-2 text-foreground">Preferred Lesson Time</label>
                  <select required className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body">
                    <option value="">Select a time</option>
                    <option>Morning (7 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 4 PM)</option>
                    <option>Evening (4 PM - 7 PM)</option>
                  </select>
                </div>
                <button type="submit" className="w-full btn-primary justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Request Booking
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
