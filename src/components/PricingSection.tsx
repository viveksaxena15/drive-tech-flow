import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const packages = [
  { name: "Standard Lesson", price: "$70", per: "/ hour", features: ["1 hour lesson", "Pick-up & drop-off", "Dual-controlled vehicle"] },
  { name: "Silver Package", price: "$350", per: "5 hours", features: ["5 × 1 hour lessons", "Save $50", "Flexible scheduling"], popular: false },
  { name: "Gold Package", price: "$700", per: "10 hours", features: ["10 × 1 hour lessons", "Save $100", "Priority booking"], popular: true },
  { name: "Platinum Package", price: "$1,400", per: "20 hours", features: ["20 × 1 hour lessons", "Save $200", "Best value"], popular: false },
  { name: "Driving Test Package", price: "$230", per: "test day", features: ["1 hour preparation", "Car hire for test", "Test day support"] },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding">
    <div className="container-tight">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">Transparent <span className="text-gradient">Pricing</span></h2>
        <p className="text-muted-foreground max-w-lg mx-auto">No hidden fees. Choose a package that suits your needs.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className={`card-elevated p-8 relative hover:-translate-y-1 transition-transform duration-200 ${p.popular ? "border-primary ring-1 ring-primary/30" : ""}`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-display font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Most Popular
              </span>
            )}
            <h3 className="font-display font-bold text-lg mb-1">{p.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-display font-extrabold">{p.price}</span>
              <span className="text-muted-foreground text-sm ml-2">{p.per}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {p.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#booking" className={`block text-center py-3 rounded-lg font-display font-semibold transition-all duration-200 ${p.popular ? "bg-primary text-primary-foreground hover:brightness-110" : "bg-secondary text-foreground hover:bg-secondary/80"}`}>
              Book Now
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
