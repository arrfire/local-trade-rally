
import React from 'react';
import { Store, ShoppingBag, MessageSquare, Clock, Percent, Shield } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Better Way to Connect Local Grocery</h2>
          <p className="text-gray-600">
            NammaKirana creates a direct connection between customers and local grocery stores without the high commissions of existing platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Store className="w-6 h-6" />}
            title="First to Accept"
            description="Orders are broadcast to nearby stores, and the first to accept fulfills it - ensuring efficiency with minimal complexity."
            color="blue"
          />
          
          <FeatureCard 
            icon={<ShoppingBag className="w-6 h-6" />}
            title="Zero Commission"
            description="Unlike platforms charging up to 40%, NammaKirana takes zero commission from stores, keeping prices lower."
            color="green"
          />
          
          <FeatureCard 
            icon={<MessageSquare className="w-6 h-6" />}
            title="Direct Communication"
            description="Customers communicate directly with store owners for special requests and substitutions."
            color="purple"
          />
          
          <FeatureCard 
            icon={<Clock className="w-6 h-6" />}
            title="Quick Delivery"
            description="Local delivery ensures products arrive fresh and quickly from nearby stores to your doorstep."
            color="orange"
          />
          
          <FeatureCard 
            icon={<Percent className="w-6 h-6" />}
            title="Lower Prices"
            description="Without platform commissions, customers enjoy lower prices while stores maintain their margins."
            color="red"
          />
          
          <FeatureCard 
            icon={<Shield className="w-6 h-6" />}
            title="Blockchain Security"
            description="Built on Polygon for secure, low-cost transactions and future decentralized features."
            color="indigo"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'indigo';
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    green: 'bg-green-50 text-green-600 border-green-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    red: 'bg-red-50 text-red-600 border-red-100',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  };
  
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-subtle hover:shadow-float transition-all duration-300 border border-gray-100"
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Features;
