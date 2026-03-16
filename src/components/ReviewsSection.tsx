import { motion } from "framer-motion";

const reviews = [
  { name: "Sarah M.", text: "Amazing instructor! Passed my test on the first go. Highly recommend D-Tech Driver Training.", rating: 5 },
  { name: "James L.", text: "Very patient and professional. The test route practice was incredibly helpful. Thank you!", rating: 5 },
  { name: "Priya K.", text: "I was so nervous but the instructor made me feel comfortable. Passed first time!", rating: 5 },
  { name: "Ahmed R.", text: "Converted my overseas licence smoothly. Great lessons and very affordable packages.", rating: 5 },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
    ))}
  </div>
);

const ReviewsSection = () => (
  <section className="section-padding">
    <div className="container-tight">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">What Students <span className="text-gradient">Say</span></h2>
        <p className="text-muted-foreground">Real reviews from real students.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="card-elevated p-8"
          >
            <Stars />
            <p className="mt-4 text-muted-foreground leading-relaxed italic">"{r.text}"</p>
            <p className="mt-4 font-display font-semibold text-sm">{r.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
