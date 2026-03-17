import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowRight, Star, Shield, Users, Menu, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import heroImg from "@/assets/hero-car.jpg";
import logo from "@/assets/logo.webp";

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const start = Date.now();
          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const navLinks = ["Services", "Pricing", "Reviews", "Booking"];

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Parallax BG */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img src={heroImg} alt="D-Tech Driver Training lesson" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/40" />

      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-lg shadow-sm border-b border-border" : "bg-transparent"}`}>
        <div className="container-tight px-4 flex items-center justify-between h-16 md:h-20">
          <img src={logo} alt="D-Tech Driver Training" className={`h-9 md:h-12 transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`} />
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className={`text-sm font-medium transition-colors duration-300 ${scrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"}`}>{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:0468525626" className={`hidden sm:flex items-center gap-2 text-sm font-display font-bold transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${scrolled ? "bg-primary/10" : "bg-white/10"}`}>
                <Phone className="w-4 h-4" />
              </div>
              0468 525 626
            </a>
            <a href="#booking" className={`hidden md:flex btn-primary text-sm px-5 py-2.5 rounded-xl`}>
              Book Now
            </a>
            <button onClick={() => setNavOpen(!navOpen)} className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
              {navOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {navOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-background border-b border-border shadow-lg px-4 pb-4">
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setNavOpen(false)} className="block py-3 text-sm font-medium text-foreground hover:text-primary transition-colors border-b border-border/50 last:border-0">{l}</a>
            ))}
            <a href="#booking" onClick={() => setNavOpen(false)} className="btn-primary text-sm py-3 mt-3 w-full justify-center rounded-xl">Book a Lesson</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container-tight px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Rated #1 Driving School in Marsden Park
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] mb-7 text-white">
            Pass Your
            <br />
            Driving Test{" "}
            <span className="relative">
              <span className="relative z-10">With Confidence</span>
              <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="absolute bottom-1 left-0 right-0 h-3 md:h-4 rounded-sm origin-left" style={{ backgroundImage: 'var(--hero-gradient)', opacity: 0.3 }} />
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/70 mb-10 max-w-md font-body leading-relaxed">
            Professional driving lessons in Marsden Park with experienced instructors and a{" "}
            <strong className="text-white">96% first-time pass rate</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#booking" className="btn-primary gap-2 animate-pulse-ring">
              Book a Lesson
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:0468525626" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-display font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg"
        >
          {[
            { icon: Shield, value: 96, suffix: "%", label: "Pass Rate" },
            { icon: Users, value: 200, suffix: "+", label: "Students" },
            { icon: Star, value: 5, suffix: "★", label: "Google Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <s.icon className="w-4 h-4 text-white/50 mx-auto mb-1" />
              <p className="text-2xl md:text-3xl font-display font-extrabold text-white">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs text-white/50 font-medium">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path d="M0 60V30C240 5 480 0 720 10C960 20 1200 45 1440 30V60H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
