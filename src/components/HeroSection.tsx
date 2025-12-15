import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Yellow accent shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 gradient-hero rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 left-0 w-72 h-72 gradient-hero rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Available 24/7 in Your City
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-wide text-foreground mb-6">
              YOUR RIDE,
              <br />
              <span className="text-gradient">YOUR WAY</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
              Experience premium taxi services with professional drivers,
              competitive rates, and seamless booking. Get where you need to go,
              safely and on time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="taxi" size="xl" asChild>
                <a href="#booking" className="gap-2">
                  Book Your Ride
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#services">View Services</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {[
                { icon: MapPin, label: "Cities", value: "50+" },
                { icon: Clock, label: "Avg. Pickup", value: "5 min" },
                { icon: Shield, label: "Safe Rides", value: "1M+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Taxi Illustration */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg animate-fade-in">
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 gradient-hero rounded-full opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full" />
              
              {/* Main taxi card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 gradient-hero rounded-2xl mb-4 shadow-glow">
                    <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary-foreground" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl text-foreground mb-2">
                    READY TO RIDE?
                  </h3>
                  <p className="text-muted-foreground">
                    Book in seconds, ride in minutes
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">From</div>
                      <div className="font-medium text-foreground">Your Location</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">To</div>
                      <div className="font-medium text-foreground">Destination</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
