import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, rating }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">"{text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
          {/* Avatar placeholder */}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-gray-500 text-sm">Client</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;