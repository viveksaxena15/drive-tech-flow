import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Sarah Mitchell", text: "Amazing instructor! Passed my test on the first go. The patience and professionalism made all the difference. I was so nervous but felt completely prepared.", time: "2 weeks ago", initials: "SM", color: "221 83% 53%" },
  { name: "James Liu", text: "Very patient and professional. The test route practice was incredibly helpful — I knew exactly what to expect on test day. Highly recommend D-Tech!", time: "1 month ago", initials: "JL", color: "152 69% 45%" },
  { name: "Priya Kapoor", text: "I was so nervous about driving but the instructor made me feel comfortable and well-prepared from the very first lesson. Passed first time!", time: "3 weeks ago", initials: "PK", color: "38 92% 50%" },
  { name: "Ahmed Rashid", text: "Converted my overseas licence smoothly. Great lessons tailored to Australian road rules, affordable packages, and fantastic results. Couldn't be happier!", time: "2 months ago", initials: "AR", color: "262 52% 47%" },
];

const ReviewsSection = () => (
  <section id="reviews" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/20" />
    <div className="container-tight relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <div className="section-badge">
          <Star className="w-4 h-4 fill-primary" />
          Reviews
        </div>
        <h2 className="section-title">Loved by <span className="text-gradient">Students</span></h2>
        <p className="section-subtitle">Real reviews from students who passed with D-Tech Driver Training.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card-elevated p-7 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
          >
            <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/[0.06] group-hover:text-primary/[0.1] transition-colors" />
            
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 text-primary fill-primary" />
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm mb-6">"{r.text}"</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm" style={{ background: `hsl(${r.color} / 0.1)`, color: `hsl(${r.color})` }}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">Verified Student</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{r.time}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Google review badge */}
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted border border-border">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-primary fill-primary" />
            ))}
          </div>
          <span className="text-sm font-display font-semibold text-foreground">5.0</span>
          <span className="text-sm text-muted-foreground">on Google Reviews</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ReviewsSection;
