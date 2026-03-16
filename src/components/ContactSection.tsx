import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="container-tight">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">Get In <span className="text-gradient">Touch</span></h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          {[
            { icon: Phone, label: "Phone", value: "0468 525 626", href: "tel:0468525626" },
            { icon: Mail, label: "Email", value: "info@dtechdrivertraining.com.au", href: "mailto:info@dtechdrivertraining.com.au" },
            { icon: MapPin, label: "Address", value: "19 Bromus Street, Marsden Park NSW 2765" },
            { icon: Clock, label: "Hours", value: "7 AM – 7 PM, 7 days" },
          ].map(c => (
            <div key={c.label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="font-display font-semibold text-foreground hover:text-primary transition-colors">{c.value}</a>
                ) : (
                  <p className="font-display font-semibold">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-elevated overflow-hidden rounded-xl h-72 md:h-auto">
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
