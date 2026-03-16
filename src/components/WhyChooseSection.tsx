import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "96% students pass on first attempt",
  "Patient and professional instructor",
  "Local test route knowledge",
  "Flexible lesson scheduling",
  "Affordable pricing",
];

const WhyChooseSection = () => (
  <section className="section-padding bg-secondary/20">
    <div className="container-tight">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">Why Choose <span className="text-gradient">D-Tech?</span></h2>
          <p className="text-muted-foreground mb-8">We're committed to helping you become a safe, confident driver with the skills to pass your test on the first try.</p>
          <ul className="space-y-4">
            {reasons.map(r => (
              <li key={r} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-foreground">{r}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-elevated p-10 text-center">
          <div className="text-6xl font-display font-extrabold text-gradient mb-2">96%</div>
          <p className="text-muted-foreground font-body">First-Time Pass Rate</p>
          <div className="mt-6 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-primary fill-primary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">5-Star Google Rated</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
