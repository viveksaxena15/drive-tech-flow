import { motion } from "framer-motion";
import { Car, ClipboardCheck, Gauge, Globe } from "lucide-react";

const services = [
  { icon: Car, title: "Structured Driving Lessons", desc: "Learn driving from basics including vehicle control, road rules, and safe driving habits." },
  { icon: ClipboardCheck, title: "Driving Test Preparation", desc: "Practice real test routes and prepare for RMS driving test." },
  { icon: Gauge, title: "Pre Driving Test Assessment", desc: "Simulated test conditions to evaluate your readiness." },
  { icon: Globe, title: "Overseas Licence Conversion", desc: "Driving lessons designed for overseas drivers converting to an Australian licence." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container-tight">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">Our <span className="text-gradient">Services</span></h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Comprehensive driver training tailored to your skill level and goals.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="card-elevated p-8 hover:-translate-y-1 transition-transform duration-200 group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
