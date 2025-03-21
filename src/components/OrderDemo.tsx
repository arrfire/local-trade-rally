
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OrderDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const steps = [
    { title: "Customer Creates Order", description: "Customer lists items needed" },
    { title: "Order Broadcasts", description: "Nearby stores receive the order" },
    { title: "Store Accepts", description: "First store to accept gets the order" },
    { title: "Order Fulfilled", description: "Store prepares and delivers items" }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [steps.length]);
  
  return (
    <section id="for-customers" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <span>Simplified Experience</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Order Seamlessly from Your Local Stores</h2>
            <p className="text-gray-600 mb-8">
              NammaKirana removes the complexity from ordering groceries. No more browsing through endless products or deciphering inventory systems. Simply list what you need, and let the local stores respond.
            </p>
            
            <div className="space-y-6">
              <Feature
                title="Simple Item Lists"
                description="Just tell us what you need - no complex product catalogs to browse through."
              />
              
              <Feature
                title="Local Knowledge"
                description="Store owners understand local preferences and can suggest alternatives if needed."
              />
              
              <Feature
                title="Direct Communication"
                description="Chat directly with the store if you have special requirements or questions."
              />
              
              <Feature
                title="Quick Neighborhood Delivery"
                description="Products arrive fresh from stores just minutes away from your home."
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-float overflow-hidden border border-gray-100">
              {/* Status bar */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm font-medium">NammaKirana Demo</div>
                <div></div>
              </div>
              
              {/* Content area */}
              <div className="p-6 h-96 relative overflow-hidden">
                {/* Steps indicator */}
                <div className="flex justify-between mb-10 relative">
                  {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center relative z-10">
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index <= currentStep ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="text-xs font-medium mt-2 text-center max-w-[80px]">
                        {step.title}
                      </div>
                    </div>
                  ))}
                  
                  {/* Progress line */}
                  <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0">
                    <div 
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Step content */}
                <div className="bg-gray-50 rounded-xl p-6 h-64 relative overflow-hidden">
                  {/* Step 1: Customer creates order */}
                  <div className={`absolute inset-0 p-6 transition-all duration-500 ${currentStep === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                    <h3 className="font-semibold mb-3">Shopping List</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" checked readOnly />
                        <span>Rice (5kg Basmati)</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" checked readOnly />
                        <span>Onions (1kg)</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" checked readOnly />
                        <span>Tomatoes (500g)</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" checked readOnly />
                        <span>Milk (2 liters)</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" checked readOnly />
                        <span>Cooking Oil (1 liter)</span>
                      </div>
                    </div>
                    <button className="mt-6 px-4 py-2 bg-primary text-white rounded-lg text-sm">Send Order</button>
                  </div>
                  
                  {/* Step 2: Order broadcasting */}
                  <div className={`absolute inset-0 p-6 transition-all duration-500 ${currentStep === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                    <h3 className="font-semibold mb-3">Broadcasting Order</h3>
                    <div className="space-y-4">
                      <div className="relative border border-gray-200 rounded-lg p-3">
                        <div className="font-medium text-sm">Lakshmi Groceries</div>
                        <div className="text-xs text-gray-500">0.8 km away</div>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div className="relative border border-gray-200 rounded-lg p-3">
                        <div className="font-medium text-sm">Ganesh Provision Store</div>
                        <div className="text-xs text-gray-500">1.2 km away</div>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div className="relative border border-gray-200 rounded-lg p-3">
                        <div className="font-medium text-sm">Sri Venkateshwara Stores</div>
                        <div className="text-xs text-gray-500">1.5 km away</div>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500 flex items-center">
                      <div className="w-4 h-4 rounded-full border-2 border-yellow-400 border-t-transparent animate-spin mr-2"></div>
                      Waiting for stores to respond...
                    </div>
                  </div>
                  
                  {/* Step 3: Store accepts */}
                  <div className={`absolute inset-0 p-6 transition-all duration-500 ${currentStep === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                    <h3 className="font-semibold mb-3">Order Accepted</h3>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-4">
                      <div className="font-medium text-green-700 flex items-center gap-2 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        Sri Venkateshwara Stores
                      </div>
                      <div className="text-sm text-green-700">
                        Accepted your order at 2:45 PM
                      </div>
                    </div>
                    
                    <div className="text-sm mb-1 font-medium">Store Note:</div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm">
                      We have all items except the Basmati rice. We have Sona Masoori. Is that okay?
                    </div>
                    
                    <div className="mt-3 flex gap-2">
                      <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-sm">Yes, that's fine</button>
                      <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">Message Store</button>
                    </div>
                  </div>
                  
                  {/* Step 4: Order fulfilled */}
                  <div className={`absolute inset-0 p-6 transition-all duration-500 ${currentStep === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                    <h3 className="font-semibold mb-3">Order in Progress</h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center text-sm">
                        <span>Order Accepted</span>
                        <span className="text-green-600">✓</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Items Being Packed</span>
                        <span className="text-green-600">✓</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span>Out for Delivery</span>
                        <span className="text-green-600">✓</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>Delivered</span>
                        <span>-</span>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-3">
                      <div className="text-sm font-medium text-blue-700">Estimated delivery: 15 minutes</div>
                    </div>
                    
                    <div className="text-sm">
                      Your order is on the way from Sri Venkateshwara Stores. You can contact the delivery person directly.
                    </div>
                    
                    <button className="mt-3 px-4 py-2 border border-gray-300 rounded-lg text-sm flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      Call Delivery Person
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-0 translate-x-1/2 w-40 h-40 bg-blue-400/10 rounded-full mix-blend-multiply blur-xl -z-10 animate-float"></div>
            <div className="absolute bottom-1/4 left-0 -translate-x-1/2 w-48 h-48 bg-primary/10 rounded-full mix-blend-multiply blur-xl -z-10 animate-float" style={{ animationDelay: "1.5s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  title: string;
  description: string;
}

const Feature = ({ title, description }: FeatureProps) => {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default OrderDemo;
