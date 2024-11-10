import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <HeroCarousel />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;