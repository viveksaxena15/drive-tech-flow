import { motion } from "framer-motion";
import { Car, ClipboardCheck, Gauge, Globe, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Car, title: "Structured Driving Lessons", desc: "Master vehicle control, road rules, and safe driving habits with structured curriculum.", tag: "Most Popular" },
  { icon: ClipboardCheck, title: "Driving Test Preparation", desc: "Practice real RMS test routes and build the confidence to pass first time." },
  { icon: Gauge, title: "Pre-Test Assessment", desc: "Simulated test conditions to evaluate your readiness before the real thing." },
  { icon: Globe, title: "Overseas Licence Conversion", desc: "Tailored lessons for overseas drivers converting to an Australian licence." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container-tight">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <div className="section-badge">Our Services</div>
        <h2 className="section-title">Everything You Need to <span className="text-gradient">Pass</span></h2>
        <p className="section-subtitle">Comprehensive driver training tailored to your skill level and goals.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <motion.a
            href="#booking"
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card-elevated p-7 md:p-8 group cursor-pointer relative overflow-hidden transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/[0.03] to-transparent rounded-bl-full" />
            {s.tag && (
              <span className="section-badge text-xs py-1 px-3 mb-4">{s.tag}</span>
            )}
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors" style={{ background: 'hsl(var(--primary-light))' }}>
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-display font-bold mb-2 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
