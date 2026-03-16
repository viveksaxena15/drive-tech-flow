import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => (
  <section className="section-padding">
    <div className="container-tight">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="section-badge">Testimonials</div>
        <h2 className="section-title">Hear From Our <span className="text-gradient">Students</span></h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-5">
        {[1, 2].map(i => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card-elevated aspect-video flex items-center justify-center group cursor-pointer relative overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent" />
            <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'hsl(var(--primary-light))' }}>
              <Play className="w-7 h-7 text-primary ml-1" />
            </div>
            <span className="absolute bottom-5 left-5 text-sm text-muted-foreground font-display font-medium">Student Review {i}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoSection;
