import "./App.css";
import Header from "./components/header";
import PopularCategories from "./components/PopularCategories";
import GameList from "./components/GameList";
import LatestNews from "./components/LatestNews";
import NewsletterSignup from "./components/NewsletterSignup";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PopularCategories />
      <GameList />
      <LatestNews />
      <Testimonials />
      <ContactUs />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;
