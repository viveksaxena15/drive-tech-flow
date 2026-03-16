import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, Wallet } from "lucide-react";

const badges = [
  { icon: Award, label: "96% First Time Pass Rate" },
  { icon: Star, label: "5 Star Google Reviews" },
  { icon: ShieldCheck, label: "RMS Accredited Instructor" },
  { icon: Wallet, label: "Affordable Lesson Packages" },
];

const TrustSection = () => (
  <section className="py-12 border-y border-border bg-secondary/30">
    <div className="container-tight px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display font-semibold text-sm text-foreground">{b.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
