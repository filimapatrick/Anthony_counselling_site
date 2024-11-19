import React from 'react';
import { Heart, Users, Brain, Sparkles, MessageCircle, Glasses } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Brain,
      title: "Individual Therapy",
      description: "One-on-one counseling sessions tailored to your unique needs, helping you overcome personal challenges and achieve emotional well-being.",
      price: "$120",
      duration: "50 minutes"
    },
    {
      icon: Users,
      title: "Couples Counseling",
      description: "Strengthen your relationship through guided sessions that improve communication, resolve conflicts, and deepen emotional connections.",
      price: "$150",
      duration: "60 minutes"
    },
    {
      icon: Heart,
      title: "Family Therapy",
      description: "Build stronger family bonds and navigate challenges together with sessions designed to improve family dynamics and communication.",
      price: "$180",
      duration: "75 minutes"
    },
    {
      icon: MessageCircle,
      title: "Group Therapy",
      description: "Share experiences and learn from others in a supportive group environment, facilitated by experienced therapists.",
      price: "$60",
      duration: "90 minutes"
    },
    {
      icon: Sparkles,
      title: "Anxiety Treatment",
      description: "Learn effective strategies to manage anxiety and stress through evidence-based therapeutic approaches.",
      price: "$120",
      duration: "50 minutes"
    },
    {
      icon: Glasses,
      title: "Depression Counseling",
      description: "Find hope and healing through specialized treatment approaches for managing depression and improving mood.",
      price: "$120",
      duration: "50 minutes"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80"
            alt="Counseling services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-white/90">
                Comprehensive psychological services tailored to your unique needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-rose-600 flex items-center justify-center">
                    <service.icon className="w-20 h-20 text-white/90" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center border-t pt-6">
                    <div>
                      <span className="text-2xl font-semibold text-rose-600">{service.price}</span>
                      <span className="text-gray-500 ml-2">/ session</span>
                    </div>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>
                  <button className="w-full mt-6 bg-gray-100 hover:bg-rose-600 hover:text-white text-gray-800 px-6 py-3 rounded-lg transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide professional, confidential, and personalized care to help you achieve your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Expert Therapists
              </h3>
              <p className="text-gray-600">
                Our team consists of licensed professionals with years of experience
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Personalized Care
              </h3>
              <p className="text-gray-600">
                Treatment plans tailored to your specific needs and goals
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Confidential Support
              </h3>
              <p className="text-gray-600">
                Your privacy and confidentiality are our top priorities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards a better tomorrow. Schedule your consultation today and let us help you achieve your goals.
          </p>
          <button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-3 rounded-full transition-all">
            Book Your First Session
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;