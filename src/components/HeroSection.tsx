import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import heroImg from "@/assets/hero-car.jpg";
import logo from "@/assets/logo.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="D-Tech Driver Training vehicle" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-20 px-4 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img src={logo} alt="D-Tech Driver Training" className="h-12 md:h-16 brightness-0 invert" />
          <a href="tel:0468525626" className="flex items-center gap-2 font-display font-semibold text-primary text-sm md:text-base">
            <Phone className="w-4 h-4" />
            0468 525 626
          </a>
        </div>
      </nav>

      <div className="relative z-10 container-tight px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-body text-sm font-medium mb-6">
            Marsden Park's #1 Driving School
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight mb-6">
            Pass Your Driving Test{" "}
            <span className="text-gradient">With Confidence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg font-body leading-relaxed">
            Professional driving lessons in Marsden Park with experienced instructors and a 96% first-time pass rate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-bold text-lg hover:brightness-110 transition-all duration-200 hover:-translate-y-0.5">
              Book Lesson
            </a>
            <a href="tel:0468525626" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border bg-secondary/50 text-foreground font-display font-semibold text-lg hover:bg-secondary transition-all duration-200 hover:-translate-y-0.5">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
