import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Clock, MapPin, DollarSign, Heart } from "lucide-react";

const reasons = [
  { icon: Trophy, title: "96% Pass Rate", desc: "Our students consistently pass on their first attempt" },
  { icon: Heart, title: "Patient Instructor", desc: "Professional, calm, and encouraging teaching style" },
  { icon: MapPin, title: "Local Routes", desc: "Deep knowledge of all RMS test routes in the area" },
  { icon: Clock, title: "Flexible Scheduling", desc: "Lessons 7 days a week from 7 AM to 7 PM" },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Competitive rates with multi-lesson package savings" },
];

const WhyChooseSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04]" style={{ backgroundImage: 'var(--hero-gradient)', filter: 'blur(80px)' }} />
    <div className="container-tight">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="section-badge">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Why D-Tech
          </div>
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
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110" style={{ background: 'hsl(var(--primary-light))' }}>
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">{r.title}</p>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          {/* Main stat card */}
          <div className="relative">
            <div className="absolute -inset-[1.5px] rounded-3xl" style={{ backgroundImage: 'var(--hero-gradient)' }} />
            <div className="card-elevated !border-transparent p-10 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundImage: 'var(--hero-gradient)' }} />
              <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'var(--hero-gradient)' }} />
              
              <div className="relative">
                <div className="text-7xl md:text-8xl font-display font-extrabold text-gradient mb-3">96%</div>
                <p className="text-foreground font-display font-bold text-xl mb-2">First-Time Pass Rate</p>
                <p className="text-sm text-muted-foreground mb-8">Based on our student results in 2024</p>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-primary fill-primary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">5.0 Average on Google Reviews</p>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute -bottom-4 -left-4 card-elevated px-5 py-3 flex items-center gap-3 animate-float"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--success-light))' }}>
              <CheckCircle2 className="w-5 h-5" style={{ color: 'hsl(var(--success))' }} />
            </div>
            <div>
              <p className="font-display font-bold text-sm text-foreground">RMS Accredited</p>
              <p className="text-xs text-muted-foreground">Licensed Instructor</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
