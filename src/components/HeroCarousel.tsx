import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
    title: "Digital Innovation",
    subtitle: "Transforming businesses through technology"
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
    title: "Strategic Solutions",
    subtitle: "Empowering your digital transformation"
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
    title: "Future Ready",
    subtitle: "Building tomorrow's technology today"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div className="max-w-4xl px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 text-white">{slide.subtitle}</p>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;