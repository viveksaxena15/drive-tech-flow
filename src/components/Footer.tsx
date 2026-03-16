import logo from "@/assets/logo.webp";

const Footer = () => (
  <footer className="py-10 px-4 border-t border-border">
    <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="D-Tech Driver Training" className="h-10 brightness-0 invert" />
      <p className="text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} D-Tech Driver Training. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
