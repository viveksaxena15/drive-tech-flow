import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, Wallet } from "lucide-react";

const badges = [
  { icon: Award, label: "96% Pass Rate", sub: "First attempt success", color: "221 83% 53%" },
  { icon: Star, label: "5-Star Rated", sub: "150+ Google Reviews", color: "38 92% 50%" },
  { icon: ShieldCheck, label: "RMS Accredited", sub: "Licensed instructor", color: "152 69% 45%" },
  { icon: Wallet, label: "Best Value", sub: "Affordable packages", color: "262 52% 47%" },
];

const TrustSection = () => (
  <section className="py-6 relative -mt-8 z-20">
    <div className="container-tight px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card-elevated p-5 md:p-6 text-center group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: `hsl(${b.color} / 0.1)` }}>
              <b.icon className="w-6 h-6" style={{ color: `hsl(${b.color})` }} />
            </div>
            <p className="font-display font-bold text-sm md:text-base text-foreground">{b.label}</p>
            <p className="text-xs text-muted-foreground mt-1">{b.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
