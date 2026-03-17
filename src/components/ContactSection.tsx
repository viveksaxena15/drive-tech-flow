import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactItems = [
  { icon: Phone, label: "Phone", value: "0468 525 626", href: "tel:0468525626" },
  { icon: Mail, label: "Email", value: "info@dtechdrivertraining.com.au", href: "mailto:info@dtechdrivertraining.com.au" },
  { icon: MapPin, label: "Address", value: "19 Bromus Street, Marsden Park NSW 2765" },
  { icon: Clock, label: "Hours", value: "7 AM – 7 PM, 7 days a week" },
];

const ContactSection = () => (
  <section id="contact" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
    <div className="container-tight relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="section-badge">
          <Phone className="w-4 h-4" />
          Contact
        </div>
        <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
        <p className="section-subtitle">Have questions? Reach out — we're always happy to help.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
          {contactItems.map(c => (
            <div key={c.label} className="card-elevated p-5 flex items-center gap-4 hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(var(--primary-light))' }}>
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="font-display font-semibold text-foreground hover:text-primary transition-colors">{c.value}</a>
                ) : (
                  <p className="font-display font-semibold text-foreground">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-elevated overflow-hidden rounded-2xl h-80 md:h-auto">
          <iframe
            title="D-Tech Driver Training location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d150.834!3d-33.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQyJzAwLjAiUyAxNTDCsDUwJzAyLjQiRQ!5e0!3m2!1sen!2sau!4v1"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
