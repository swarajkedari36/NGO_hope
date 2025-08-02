import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, HandHeart } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";

const About = () => {
  const values = [
    {
      icon: HandHeart,
      title: "Compassion",
      description: "We lead with empathy and understanding in everything we do."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building stronger communities through collaborative action."
    },
    {
      icon: Target,
      title: "Impact",
      description: "Creating measurable, lasting change in people's lives."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in all our programs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">HopeBuilder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in 2015, HopeBuilder has been dedicated to creating positive change 
            in communities worldwide through sustainable programs and passionate volunteers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Mission Text */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To empower communities by providing resources, education, and support that 
                enable sustainable development and improve quality of life for all.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                A world where every community has the tools and support needed to thrive, 
                where hope is accessible to all, and where positive change is driven by 
                collective action and compassion.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
              <p className="text-lg text-muted-foreground">
                What started as a small group of friends wanting to make a difference 
                has grown into a global network of changemakers. We believe that when 
                communities come together, extraordinary things happen.
              </p>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={teamImage} 
                alt="HopeBuilder Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-hero rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Our Global Impact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent-glow mb-2">50+</div>
              <div className="text-white/90">Countries Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-glow mb-2">100K+</div>
              <div className="text-white/90">People Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-glow mb-2">500+</div>
              <div className="text-white/90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-glow mb-2">95%</div>
              <div className="text-white/90">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;