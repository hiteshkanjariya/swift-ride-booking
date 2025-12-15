import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    action: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["bookings@swiftcab.com", "support@swiftcab.com"],
    action: "mailto:bookings@swiftcab.com",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["123 Main Street", "Downtown, City 12345"],
    action: "#",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["24/7 Service Available", "Office: 9AM - 6PM"],
    action: "#",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 gradient-hero rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            CONTACT US
            <br />
            <span className="text-gradient">ANYTIME</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? Need help with a booking? Our team is here to assist
            you around the clock.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.action}
              className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-shadow duration-300">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {item.title}
              </h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-muted-foreground text-sm">
                  {detail}
                </p>
              ))}
            </a>
          ))}
        </div>

        {/* Map placeholder or CTA */}
        <div className="mt-16 bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border max-w-4xl mx-auto text-center">
          <h3 className="font-display text-3xl text-foreground mb-4">
            READY FOR YOUR NEXT RIDE?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Book your taxi now and experience the SwiftCab difference. Quick
            booking, professional service, and competitive prices.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 gradient-hero rounded-xl font-display text-xl text-primary-foreground tracking-wider hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
          >
            BOOK YOUR RIDE NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
