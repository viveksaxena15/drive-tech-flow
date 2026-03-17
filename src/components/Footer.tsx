import logo from "@/assets/logo.webp";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden">
    <div className="absolute inset-0 bg-foreground" />
    <div className="relative container-tight px-4 pt-16 pb-8">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <img src={logo} alt="D-Tech Driver Training" className="h-12 mb-4 brightness-0 invert" />
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">Professional driving lessons in Marsden Park with experienced, patient instructors and a 96% first-time pass rate.</p>
        </div>
        <div>
          <p className="font-display font-bold text-white mb-4">Quick Links</p>
          <div className="space-y-2">
            {["Services", "Pricing", "Reviews", "Booking", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-white/50 hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-display font-bold text-white mb-4">Contact</p>
          <div className="space-y-3">
            <a href="tel:0468525626" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
              <Phone className="w-4 h-4" /> 0468 525 626
            </a>
            <a href="mailto:info@dtechdrivertraining.com.au" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
              <Mail className="w-4 h-4" /> info@dtechdrivertraining.com.au
            </a>
            <div className="flex items-start gap-2 text-sm text-white/50">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" /> 19 Bromus Street, Marsden Park NSW 2765
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/40">© {new Date().getFullYear()} D-Tech Driver Training. All rights reserved.</p>
        <p className="text-xs text-white/30">ABN: Coming Soon | RMS Accredited Driving Instructor</p>
      </div>
    </div>
  </footer>
);

export default Footer;
