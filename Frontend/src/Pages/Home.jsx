import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import NewsletterForm from "../components/NewsletterForm/NewsletterForm";
import Pricing from "../components/Pricing/Pricing";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <NewsletterForm />
    </>
  );
};

export default Home;
