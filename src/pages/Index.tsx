import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VolunteerForm from "@/components/VolunteerForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <VolunteerForm />
      <Footer />
    </div>
  );
};

export default Index;
