import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, Wallet } from "lucide-react";

const badges = [
  { icon: Award, label: "96% Pass Rate", sub: "First attempt" },
  { icon: Star, label: "5-Star Rated", sub: "Google Reviews" },
  { icon: ShieldCheck, label: "RMS Accredited", sub: "Licensed instructor" },
  { icon: Wallet, label: "Great Value", sub: "Affordable packages" },
];

const TrustSection = () => (
  <section className="py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
    <div className="container-tight px-4 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card-elevated p-5 md:p-6 text-center transition-all duration-200"
          >
            <div className="w-11 h-11 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: 'hsl(var(--primary-light))' }}>
              <b.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="font-display font-bold text-sm md:text-base text-foreground">{b.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{b.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
