import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react";

const packages = [
  { name: "Standard Lesson", price: "$70", per: "/hour", features: ["1 hour lesson", "Pick-up & drop-off", "Dual-controlled vehicle", "Progress tracking"], icon: "🚗" },
  { name: "Silver Package", price: "$350", per: "5 hours", features: ["5 × 1 hour lessons", "Save $50", "Flexible scheduling", "Progress reports"], saving: "Save $50", icon: "🥈" },
  { name: "Gold Package", price: "$700", per: "10 hours", features: ["10 × 1 hour lessons", "Save $100", "Priority booking", "Test route practice", "Progress reports"], popular: true, saving: "Save $100", icon: "🥇" },
  { name: "Platinum Package", price: "$1,400", per: "20 hours", features: ["20 × 1 hour lessons", "Save $200", "Best value per hour", "Full test preparation", "Guaranteed confidence"], saving: "Best Value", icon: "💎" },
  { name: "Test Day Package", price: "$230", per: "test day", features: ["1 hour warm-up lesson", "Car hire for test", "Test centre drop-off", "Calming preparation"], icon: "🎯" },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-muted/30" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]" style={{ backgroundImage: 'var(--hero-gradient)' }} />

    <div className="container-tight relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <div className="section-badge">
          <Zap className="w-4 h-4" />
          Pricing
        </div>
        <h2 className="section-title">Simple, Transparent <span className="text-gradient">Pricing</span></h2>
        <p className="section-subtitle">No hidden fees. Choose a package that fits your needs and budget.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {packages.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`relative group ${p.popular ? "" : ""}`}
          >
            {p.popular && (
              <div className="absolute -inset-[1.5px] rounded-2xl z-0" style={{ backgroundImage: 'var(--hero-gradient)' }} />
            )}
            <div className={`card-elevated p-7 relative z-10 h-full flex flex-col transition-all duration-300 group-hover:-translate-y-1 ${p.popular ? "!border-transparent !shadow-lg" : ""}`}>
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-display font-bold flex items-center gap-1.5 text-primary-foreground" style={{ backgroundImage: 'var(--hero-gradient)' }}>
                  <Sparkles className="w-3.5 h-3.5" /> Most Popular
                </span>
              )}

              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{p.icon}</span>
                <div>
                  <p className="font-display font-bold text-foreground">{p.name}</p>
                  {p.saving && <span className="text-xs font-medium text-primary">{p.saving}</span>}
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-display font-extrabold text-foreground">{p.price}</span>
                <span className="text-muted-foreground text-sm ml-1.5">/ {p.per}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(var(--primary-light))' }}>
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#booking" className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-display font-semibold text-sm transition-all duration-300 ${p.popular ? "btn-primary text-sm px-4 py-3.5" : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"}`}>
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
        <p className="text-muted-foreground text-sm mb-1">Not sure which package? <a href="tel:0468525626" className="text-primary font-semibold hover:underline">Call us</a> for a free consultation.</p>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
