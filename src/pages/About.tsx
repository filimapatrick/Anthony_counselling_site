import React from 'react';
import { Award, Heart, Users, BookOpen } from 'lucide-react';

function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80"
            alt="Therapist office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-white/90">
                Dedicated to helping you find your path to emotional wellness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80"
                alt="Professional therapist"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-light text-gray-800 mb-6">
                Dr. Sarah Thompson
              </h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in psychological counseling, I've dedicated my career to helping individuals, couples, and families navigate life's challenges and achieve emotional well-being.
              </p>
              <p className="text-gray-600 mb-6">
                My approach combines evidence-based therapeutic techniques with compassionate understanding, creating a safe space for healing and growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <span className="text-3xl font-bold text-rose-600">15+</span>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <span className="text-3xl font-bold text-rose-600">1000+</span>
                  <p className="text-gray-600">Clients Helped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-4">
              Qualifications & Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Committed to continuous learning and professional development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Education",
                description: "Ph.D. in Clinical Psychology from Stanford University"
              },
              {
                icon: Heart,
                title: "Specialization",
                description: "Cognitive Behavioral Therapy & Mindfulness-Based Approaches"
              },
              {
                icon: Users,
                title: "Experience",
                description: "15+ Years of Clinical Practice & Research"
              },
              {
                icon: BookOpen,
                title: "Publications",
                description: "Author of Multiple Research Papers & Self-Help Books"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-gray-800 mb-6">
              My Philosophy
            </h2>
            <p className="text-gray-600 mb-8">
              I believe that every individual has the capacity for growth and healing. My role is to provide the guidance, tools, and support needed to help you unlock your potential and create positive change in your life.
            </p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full transition-all">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;