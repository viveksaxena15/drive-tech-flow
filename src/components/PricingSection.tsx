import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const packages = [
  { name: "Standard Lesson", price: "$70", per: "/hour", features: ["1 hour lesson", "Pick-up & drop-off", "Dual-controlled vehicle", "Progress tracking"] },
  { name: "Silver Package", price: "$350", per: "5 hours", features: ["5 × 1 hour lessons", "Save $50", "Flexible scheduling", "Progress reports"], popular: false },
  { name: "Gold Package", price: "$700", per: "10 hours", features: ["10 × 1 hour lessons", "Save $100", "Priority booking", "Test route practice", "Progress reports"], popular: true },
  { name: "Platinum Package", price: "$1,400", per: "20 hours", features: ["20 × 1 hour lessons", "Save $200", "Best value", "Full test preparation", "Guaranteed results"], popular: false },
  { name: "Test Day Package", price: "$230", per: "test day", features: ["1 hour preparation", "Car hire for test", "Test day support", "Route practice"] },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/20" />
    <div className="container-tight relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <div className="section-badge">Pricing</div>
        <h2 className="section-title">Simple, Transparent <span className="text-gradient">Pricing</span></h2>
        <p className="section-subtitle">No hidden fees. Choose a package that fits your needs and budget.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {packages.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`card-elevated p-7 relative transition-all duration-300 ${p.popular ? "ring-2 ring-primary/30 scale-[1.02]" : ""}`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-display font-bold flex items-center gap-1" style={{ backgroundImage: 'var(--hero-gradient)', color: 'hsl(var(--primary-foreground))' }}>
                <Sparkles className="w-3 h-3" /> Most Popular
              </span>
            )}
            <p className="font-display font-bold text-foreground mb-1">{p.name}</p>
            <div className="mb-6">
              <span className="text-4xl font-display font-extrabold text-foreground">{p.price}</span>
              <span className="text-muted-foreground text-sm ml-1.5">{p.per}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {p.features.map(f => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#booking" className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-display font-semibold text-sm transition-all duration-200 ${p.popular ? "btn-primary text-sm px-4" : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"}`}>
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
