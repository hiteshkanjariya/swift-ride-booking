import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Car, MapPin, Calendar, Clock, User, Phone, MessageCircle } from "lucide-react";

const taxiTypes = [
  { value: "standard", label: "Standard Sedan", price: "Base fare" },
  { value: "premium", label: "Premium Sedan", price: "+20%" },
  { value: "suv", label: "SUV", price: "+35%" },
  { value: "luxury", label: "Luxury", price: "+50%" },
  { value: "van", label: "Mini Van (6+)", price: "+40%" },
];

// Replace with your actual WhatsApp business number
const WHATSAPP_NUMBER = "1234567890";

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    taxiType: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s+\-()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.pickup.trim()) {
      newErrors.pickup = "Pickup location is required";
    } else if (formData.pickup.length > 200) {
      newErrors.pickup = "Location must be less than 200 characters";
    }

    if (!formData.dropoff.trim()) {
      newErrors.dropoff = "Drop-off location is required";
    } else if (formData.dropoff.length > 200) {
      newErrors.dropoff = "Location must be less than 200 characters";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    if (!formData.taxiType) {
      newErrors.taxiType = "Please select a taxi type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const formatBookingMessage = () => {
    const selectedTaxi = taxiTypes.find((t) => t.value === formData.taxiType);
    
    const message = `🚖 *NEW TAXI BOOKING REQUEST*

👤 *Passenger Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}

📍 *Ride Details:*
• Pickup: ${formData.pickup}
• Drop-off: ${formData.dropoff}
• Date: ${formData.date}
• Time: ${formData.time}
• Taxi Type: ${selectedTaxi?.label || formData.taxiType}

Please confirm my booking. Thank you!`;

    return message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing or invalid.",
        variant: "destructive",
      });
      return;
    }

    const message = formatBookingMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete your booking on WhatsApp.",
    });

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="booking" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 gradient-hero rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Easy Booking
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              BOOK YOUR RIDE
              <br />
              <span className="text-gradient">IN SECONDS</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Fill in your details and we'll connect you directly with our
              booking team via WhatsApp for instant confirmation.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: MessageCircle,
                  title: "Instant WhatsApp Booking",
                  desc: "Connect directly with our team",
                },
                {
                  icon: Clock,
                  title: "Quick Response Time",
                  desc: "Get confirmation within minutes",
                },
                {
                  icon: Car,
                  title: "Multiple Vehicle Options",
                  desc: "Choose from our diverse fleet",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-destructive text-sm">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-destructive text-sm">{errors.phone}</p>
                )}
              </div>

              {/* Pickup Location */}
              <div className="space-y-2">
                <Label htmlFor="pickup" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-500" />
                  Pickup Location
                </Label>
                <Input
                  id="pickup"
                  placeholder="Where should we pick you up?"
                  value={formData.pickup}
                  onChange={(e) => handleInputChange("pickup", e.target.value)}
                  className={errors.pickup ? "border-destructive" : ""}
                />
                {errors.pickup && (
                  <p className="text-destructive text-sm">{errors.pickup}</p>
                )}
              </div>

              {/* Drop-off Location */}
              <div className="space-y-2">
                <Label htmlFor="dropoff" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Drop-off Location
                </Label>
                <Input
                  id="dropoff"
                  placeholder="Where are you going?"
                  value={formData.dropoff}
                  onChange={(e) => handleInputChange("dropoff", e.target.value)}
                  className={errors.dropoff ? "border-destructive" : ""}
                />
                {errors.dropoff && (
                  <p className="text-destructive text-sm">{errors.dropoff}</p>
                )}
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    className={errors.date ? "border-destructive" : ""}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {errors.date && (
                    <p className="text-destructive text-sm">{errors.date}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Time
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleInputChange("time", e.target.value)}
                    className={errors.time ? "border-destructive" : ""}
                  />
                  {errors.time && (
                    <p className="text-destructive text-sm">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Taxi Type */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-primary" />
                  Taxi Type
                </Label>
                <Select
                  value={formData.taxiType}
                  onValueChange={(value) => handleInputChange("taxiType", value)}
                >
                  <SelectTrigger
                    className={errors.taxiType ? "border-destructive" : ""}
                  >
                    <SelectValue placeholder="Select a vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    {taxiTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex justify-between items-center w-full gap-4">
                          <span>{type.label}</span>
                          <span className="text-muted-foreground text-sm">
                            {type.price}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.taxiType && (
                  <p className="text-destructive text-sm">{errors.taxiType}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="taxi"
                size="xl"
                className="w-full mt-6"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By booking, you agree to our terms of service
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
