import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  title: string;
  image: string;
  description: string;
}

interface ProductCarouselProps {
  products: Product[];
  autoPlayInterval?: number;
  className?: string;
}

export function ProductCarousel({ 
  products, 
  autoPlayInterval = 5000,
  className = ""
}: ProductCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (autoPlayInterval > 0) {
      const timer = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [autoPlayInterval]);

  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full h-[820px]">
        {/* Carousel Container */}
        <div className="absolute inset-0 overflow-hidden">
          {products.map((product, index) => (
            <div
              key={index}
              className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${100 * (index - currentSlide)}%)`,
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <h3 className="font-bold text-3xl md:text-4xl text-white mb-3">
                    {product.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-[var(--primary-color)] w-6'
                  : 'bg-white/50 w-2 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}