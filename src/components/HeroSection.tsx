import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-car.jpg";
import logo from "@/assets/logo.webp";

const HeroSection = () => (
  <section className="relative min-h-[100svh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="D-Tech Driver Training vehicle" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
    </div>

    {/* Nav */}
    <nav className="absolute top-0 left-0 right-0 z-20 px-4 py-6">
      <div className="container-tight flex items-center justify-between">
        <img src={logo} alt="D-Tech Driver Training" className="h-10 md:h-14" />
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Pricing", "Booking"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors">{l}</a>
          ))}
        </div>
        <a href="tel:0468525626" className="flex items-center gap-2 font-display font-bold text-primary text-sm">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone className="w-4 h-4" />
          </div>
          <span className="hidden sm:inline">0468 525 626</span>
        </a>
      </div>
    </nav>

    {/* Content */}
    <div className="relative z-10 container-tight px-4 pt-28 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <div className="section-badge">
          ⭐ Rated #1 Driving School in Marsden Park
        </div>
        <h1 className="text-[2.5rem] md:text-6xl lg:text-[4.5rem] font-display font-extrabold leading-[1.08] mb-7 text-foreground">
          Pass Your<br />Driving Test{" "}
          <span className="text-gradient">With Confidence</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-md font-body leading-relaxed">
          Professional driving lessons in Marsden Park with experienced instructors and a <strong className="text-foreground">96% first-time pass rate</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#booking" className="btn-primary gap-2">
            Book a Lesson
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="tel:0468525626" className="btn-secondary gap-2">
            <Phone className="w-5 h-5 text-primary" />
            Call Now
          </a>
        </div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 flex items-center gap-6 flex-wrap"
        >
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-card flex items-center justify-center text-xs font-bold" style={{ background: `hsl(${200 + i * 20}, 60%, 92%)`, color: `hsl(${200 + i * 20}, 60%, 35%)` }}>
                {String.fromCharCode(64 + i * 3)}
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-primary fill-primary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-body">Trusted by <strong className="text-foreground">200+</strong> students</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
