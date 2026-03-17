import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const areas = [
  { name: "Marsden Park", badge: "Home Base" },
  { name: "Richmond" },
  { name: "Schofields" },
  { name: "Quakers Hill" },
  { name: "Blacktown" },
  { name: "Box Hill" },
  { name: "Rouse Hill" },
  { name: "The Ponds" },
];

const AreasSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-dots opacity-20" />
    <div className="container-tight relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="section-badge">
          <MapPin className="w-4 h-4" />
          Locations
        </div>
        <h2 className="section-title">Service <span className="text-gradient">Areas</span></h2>
        <p className="section-subtitle">We offer driving lessons across North West Sydney.</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
        {areas.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className={`card-elevated px-5 py-3 flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300 ${a.badge ? "gradient-border" : ""}`}
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-display font-semibold text-sm text-foreground">{a.name}</span>
            {a.badge && <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{a.badge}</span>}
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-8">
        <a href="#booking" className="inline-flex items-center gap-2 text-primary font-display font-semibold text-sm hover:gap-3 transition-all">
          Don't see your area? Contact us <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default AreasSection;
