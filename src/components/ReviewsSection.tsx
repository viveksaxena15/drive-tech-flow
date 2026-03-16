import { motion } from "framer-motion";

const reviews = [
  { name: "Sarah M.", text: "Amazing instructor! Passed my test on the first go. The patience and professionalism made all the difference.", time: "2 weeks ago" },
  { name: "James L.", text: "Very patient and professional. The test route practice was incredibly helpful. Highly recommend D-Tech!", time: "1 month ago" },
  { name: "Priya K.", text: "I was so nervous but the instructor made me feel comfortable and well-prepared. Passed first time!", time: "3 weeks ago" },
  { name: "Ahmed R.", text: "Converted my overseas licence smoothly. Great lessons, affordable packages, and fantastic results.", time: "2 months ago" },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
    ))}
  </div>
);

const ReviewsSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
    <div className="container-tight relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <div className="section-badge">Reviews</div>
        <h2 className="section-title">Loved by <span className="text-gradient">Students</span></h2>
        <p className="section-subtitle">Real reviews from students who passed with D-Tech.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 gap-5">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card-elevated p-7 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <Stars />
              <span className="text-xs text-muted-foreground">{r.time}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm mb-5">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm" style={{ background: 'hsl(var(--primary-light))', color: 'hsl(var(--primary))' }}>
                {r.name[0]}
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">Verified Student</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
