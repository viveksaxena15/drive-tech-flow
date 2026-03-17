import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => (
  <section className="section-padding relative">
    <div className="container-tight">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="section-badge">
          <Play className="w-4 h-4" />
          Testimonials
        </div>
        <h2 className="section-title">Hear From Our <span className="text-gradient">Students</span></h2>
        <p className="section-subtitle">Watch real student testimonials about their experience with D-Tech.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-5">
        {[
          { title: "Sarah's Story", sub: "Passed first time after 10 lessons" },
          { title: "James's Journey", sub: "From nervous beginner to confident driver" },
        ].map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="card-elevated aspect-video flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute inset-0" style={{ backgroundImage: 'var(--hero-gradient-subtle)' }} />
            <div className="absolute inset-0 bg-dots opacity-20" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-18 h-18 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-4" style={{ background: 'hsl(var(--primary-light))' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundImage: 'var(--hero-gradient)' }}>
                  <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                </div>
              </div>
              <p className="font-display font-bold text-foreground">{v.title}</p>
              <p className="text-sm text-muted-foreground">{v.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoSection;
