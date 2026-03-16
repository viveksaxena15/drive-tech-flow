import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingElements = () => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/61468525626?text=Hi%2C%20I%27d%20like%20to%20book%20a%20driving%20lesson"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </a>

      {/* Floating call button */}
      <a
        href="tel:0468525626"
        className="fixed bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 md:hidden"
        aria-label="Call now"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>

      {/* Sticky bottom bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border p-3 transition-transform duration-300 md:hidden ${showBar ? "translate-y-0" : "translate-y-full"}`}>
        <div className="flex gap-3 max-w-lg mx-auto">
          <a href="#booking" className="flex-1 py-3 rounded-xl btn-primary justify-center text-sm px-2">
            Book Now
          </a>
          <a href="tel:0468525626" className="flex-1 py-3 rounded-xl border border-border text-foreground font-display font-semibold text-center text-sm flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" /> Call
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingElements;
