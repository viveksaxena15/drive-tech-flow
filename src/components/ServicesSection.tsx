import { motion } from "framer-motion";
import { Car, ClipboardCheck, Gauge, Globe, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Car, title: "Structured Driving Lessons", desc: "Master vehicle control, road rules, and safe driving habits with our structured curriculum designed for beginners and experienced learners.", tag: "Most Popular", accent: "221 83% 53%" },
  { icon: ClipboardCheck, title: "Driving Test Preparation", desc: "Practice real RMS test routes and build the confidence to pass first time with targeted preparation sessions.", accent: "152 69% 45%" },
  { icon: Gauge, title: "Pre-Test Assessment", desc: "Simulated test conditions to evaluate your readiness and identify areas for improvement before the real thing.", accent: "38 92% 50%" },
  { icon: Globe, title: "Overseas Licence Conversion", desc: "Tailored lessons for overseas drivers converting to an Australian licence with personalised coaching.", accent: "262 52% 47%" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-dots opacity-30" />
    <div className="container-tight relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <div className="section-badge">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Our Services
        </div>
        <h2 className="section-title">Everything You Need to <span className="text-gradient">Pass</span></h2>
        <p className="section-subtitle">Comprehensive driver training tailored to your skill level and goals.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <motion.a
            href="#booking"
            key={s.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card-elevated p-7 md:p-8 group cursor-pointer relative overflow-hidden hover:-translate-y-1"
          >
            {/* Decorative corner */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-[0.06] transition-opacity group-hover:opacity-[0.1]" style={{ background: `hsl(${s.accent})` }} />

            {s.tag && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-4" style={{ background: `hsl(${s.accent} / 0.1)`, color: `hsl(${s.accent})` }}>{s.tag}</span>
            )}
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-lg" style={{ background: `hsl(${s.accent} / 0.1)` }}>
                <s.icon className="w-7 h-7" style={{ color: `hsl(${s.accent})` }} />
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </div>
            <h3 className="text-lg font-display font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
