import React from 'react';

function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80"
          alt="Peaceful counseling environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              Find Your Inner Peace Through Professional Counseling
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Begin your journey to emotional wellness with our experienced therapists
            </p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full transition-all">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;