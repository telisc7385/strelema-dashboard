import Banner from "./components/bannerComponent";
import BookTrip from "./components/BookTrip";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogoSlider from "./components/LogoScoller";
import Services from "./components/Services";
import Subscription from "./components/SubscriptionzComponent";
import Testimonials from "./components/Testimonials";
import TopDestinations from "./components/TopDestination";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Banner />
      <Services />
      <TopDestinations />
      <BookTrip />
      <Testimonials />
      <LogoSlider />
      <Subscription />
      <Footer />
    </main>
  );
}
