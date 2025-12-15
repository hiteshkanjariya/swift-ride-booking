import { Car, Users, Briefcase, Plane, Clock, Star } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "CITY RIDES",
    description:
      "Quick and comfortable rides within the city. Perfect for daily commutes, shopping trips, or meeting friends.",
    features: ["Instant booking", "Affordable rates", "Professional drivers"],
  },
  {
    icon: Plane,
    title: "AIRPORT TRANSFERS",
    description:
      "Reliable airport pickups and drop-offs. We track your flight to ensure timely service, no matter the hour.",
    features: ["Flight tracking", "Meet & greet", "Luggage assistance"],
  },
  {
    icon: Briefcase,
    title: "CORPORATE TRAVEL",
    description:
      "Premium service for business professionals. Impress clients with punctual, comfortable transportation.",
    features: ["Priority booking", "Invoice billing", "Dedicated support"],
  },
  {
    icon: Users,
    title: "GROUP TRAVEL",
    description:
      "Spacious vehicles for family outings or group events. Travel together in comfort and style.",
    features: ["Large vehicles", "Group discounts", "Flexible timing"],
  },
  {
    icon: Clock,
    title: "HOURLY RENTALS",
    description:
      "Book a taxi by the hour for multiple stops. Ideal for sightseeing, errands, or day trips.",
    features: ["Flexible duration", "Multiple stops", "Fixed pricing"],
  },
  {
    icon: Star,
    title: "PREMIUM CLASS",
    description:
      "Luxury vehicles for special occasions. Experience first-class comfort with our premium fleet.",
    features: ["Luxury vehicles", "VIP treatment", "Complimentary amenities"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            RIDE OPTIONS FOR
            <br />
            <span className="text-gradient">EVERY NEED</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From quick city rides to premium airport transfers, we've got you
            covered with a range of services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="font-display text-2xl text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-5">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
