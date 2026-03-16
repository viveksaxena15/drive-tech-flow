import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = ["Marsden Park", "Richmond", "Schofields", "Quakers Hill", "Blacktown"];

const AreasSection = () => (
  <section className="section-padding">
    <div className="container-tight">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="section-badge">Locations</div>
        <h2 className="section-title">Service <span className="text-gradient">Areas</span></h2>
        <p className="section-subtitle">We offer driving lessons across North West Sydney.</p>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-3">
        {areas.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="card-elevated px-5 py-3 flex items-center gap-2 transition-all duration-200"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-display font-semibold text-sm text-foreground">{a}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AreasSection;
