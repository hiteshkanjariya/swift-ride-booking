import { CheckCircle, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Service Available" },
  { icon: CheckCircle, value: "99%", label: "On-Time Rate" },
];

const features = [
  "Professionally trained and vetted drivers",
  "Clean, well-maintained modern vehicles",
  "Transparent pricing with no hidden fees",
  "Real-time booking and tracking",
  "24/7 customer support available",
  "Secure payment options",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image/Visual */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Main card */}
              <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-muted rounded-2xl hover:bg-primary/5 transition-colors duration-300"
                    >
                      <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <div className="font-display text-3xl text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 gradient-hero rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-2xl -z-10" />
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              TRUSTED BY
              <br />
              <span className="text-gradient">THOUSANDS</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              SwiftCab has been providing premium taxi services for over 15
              years. Our mission is simple: get you where you need to go safely,
              comfortably, and on time. Every ride.
            </p>
            <p className="text-muted-foreground mb-8">
              We believe that transportation should be stress-free. That's why
              we've built a service that puts you first—from our easy booking
              system to our professional drivers and modern fleet.
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
