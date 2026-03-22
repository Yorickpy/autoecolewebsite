import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/home/hero";
import TrustBadges from "@/components/home/trust-badges";
import FormationsPreview from "@/components/home/formations-preview";
import WhyUs from "@/components/home/why-us";
import ReviewsPreview from "@/components/home/reviews-preview";
import ContactBlock from "@/components/home/contact-block";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <FormationsPreview />
        <WhyUs />
        <ReviewsPreview />
        <ContactBlock />
      </main>
      <Footer />
    </>
  );
}
