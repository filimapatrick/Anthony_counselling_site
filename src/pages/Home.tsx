import React from 'react';
import { Heart } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import ServiceCard from '../components/ServiceCard';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import BookingSection from '../components/BookingSection';

function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of psychological services to help you overcome life's challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Heart}
              title="Individual Therapy"
              description="One-on-one sessions focused on your personal growth and healing"
            />
            <ServiceCard 
              icon={Heart}
              title="Couples Counseling"
              description="Strengthen your relationship and improve communication"
            />
            <ServiceCard 
              icon={Heart}
              title="Family Therapy"
              description="Build stronger family bonds and resolve conflicts"
            />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">Real stories from real people</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              text="The support I received here changed my life. I'm forever grateful."
              author="Sarah Johnson"
              rating={5}
            />
            <TestimonialCard 
              text="Professional, caring, and truly dedicated to helping their clients."
              author="Michael Chen"
              rating={5}
            />
            <TestimonialCard 
              text="A warm and welcoming environment where I felt heard and understood."
              author="Emma Davis"
              rating={5}
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default Home;