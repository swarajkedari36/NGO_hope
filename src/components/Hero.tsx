import { Button } from "@/components/ui/button";
import { Users, Heart, Globe } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToVolunteer = () => {
    const element = document.getElementById('volunteer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Building Hope,
            <span className="block text-accent-glow">One Community at a Time</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join us in creating lasting change through compassion, dedication, and community action. 
            Together, we can make a difference in the lives of those who need it most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="accent" 
              size="lg"
              onClick={scrollToVolunteer}
              className="text-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              Become a Volunteer
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <Globe className="w-5 h-5 mr-2" />
              Our Impact
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent-glow mb-2">2,500+</div>
              <div className="text-lg text-white/80">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent-glow mb-2">150+</div>
              <div className="text-lg text-white/80">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent-glow mb-2">25+</div>
              <div className="text-lg text-white/80">Communities Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-white/20 animate-glow">
        <Users className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 right-10 text-white/20 animate-glow" style={{ animationDelay: '1s' }}>
        <Heart className="w-12 h-12" />
      </div>
    </section>
  );
};

export default Hero;