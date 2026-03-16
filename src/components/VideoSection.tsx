import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => (
  <section className="section-padding bg-secondary/20">
    <div className="container-tight">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">Student <span className="text-gradient">Testimonials</span></h2>
        <p className="text-muted-foreground">Hear from our successful students.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map(i => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-elevated aspect-video flex items-center justify-center group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Play className="w-7 h-7 text-primary ml-1" />
            </div>
            <span className="absolute bottom-4 left-4 text-sm text-muted-foreground font-body">Student Review Video {i}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoSection;
