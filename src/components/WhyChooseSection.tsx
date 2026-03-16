import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "96% Pass Rate", desc: "Students pass on their first attempt" },
  { title: "Patient Instructor", desc: "Professional, calm, and encouraging" },
  { title: "Local Routes", desc: "Deep knowledge of RMS test routes" },
  { title: "Flexible Scheduling", desc: "Lessons 7 days a week, 7AM–7PM" },
  { title: "Affordable Pricing", desc: "Competitive rates with package deals" },
];

const WhyChooseSection = () => (
  <section className="section-padding">
    <div className="container-tight">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="section-badge">Why D-Tech</div>
          <h2 className="section-title">Built for Your <span className="text-gradient">Success</span></h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">We're committed to helping you become a safe, confident driver — and pass your test on the first try.</p>
          <div className="space-y-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-sm text-foreground">{r.title}</p>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="relative">
          <div className="card-elevated p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundImage: 'var(--hero-gradient)' }} />
            <div className="text-7xl font-display font-extrabold text-gradient mb-3">96%</div>
            <p className="text-foreground font-display font-semibold text-lg mb-1">First-Time Pass Rate</p>
            <p className="text-sm text-muted-foreground mb-6">Based on our student results</p>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-primary fill-primary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">5-Star Google Reviews</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
