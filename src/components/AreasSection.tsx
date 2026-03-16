import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = ["Marsden Park", "Richmond", "Schofields", "Quakers Hill", "Blacktown"];

const AreasSection = () => (
  <section className="section-padding bg-secondary/20">
    <div className="container-tight">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">Service <span className="text-gradient">Areas</span></h2>
        <p className="text-muted-foreground">We offer driving lessons across North West Sydney.</p>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-4">
        {areas.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-elevated px-6 py-4 flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-display font-semibold">{a}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AreasSection;
