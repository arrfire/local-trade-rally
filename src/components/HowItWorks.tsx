
import React from 'react';
import { Circle1, Circle2, Circle3, Circle4 } from 'lucide-react';

const HowItWorks = () => {
  // Custom icons for the steps
  const Circle1Icon = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">1</div>
  );
  
  const Circle2Icon = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">2</div>
  );
  
  const Circle3Icon = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">3</div>
  );
  
  const Circle4Icon = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">4</div>
  );
  
  return (
    <section id="how-it-works" className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How NammaKirana Works</h2>
          <p className="text-gray-600">
            Our platform simplifies the connection between customers and local grocery stores with a straightforward process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-12">
              <Step 
                icon={<Circle1Icon />}
                title="Create Your Order"
                description="Customers create an order with their grocery list and delivery preferences."
              />
              
              <Step 
                icon={<Circle2Icon />}
                title="Order Broadcast"
                description="The order is instantly broadcast to all nearby participating grocery stores."
              />
              
              <Step 
                icon={<Circle3Icon />}
                title="First Store Accepts"
                description="The first store to accept the order gets to fulfill it - no bidding or waiting."
              />
              
              <Step 
                icon={<Circle4Icon />}
                title="Delivery & Payment"
                description="The store prepares the order and delivers it. Payment is made directly to the store."
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative bg-white rounded-2xl shadow-float p-4 border border-gray-100 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
              
              {/* Mock UI */}
              <div className="relative z-10 space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Your Order</h3>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Broadcasting</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Tomatoes</span>
                      <span>1 kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rice</span>
                      <span>5 kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Milk</span>
                      <span>2 L</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Onions</span>
                      <span>2 kg</span>
                    </div>
                    <div className="border-t border-gray-200 my-2 pt-2 flex justify-between items-center">
                      <span className="font-medium">Total Items</span>
                      <span className="font-medium">4 items</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold mb-3">Nearby Stores</h3>
                  <div className="space-y-3">
                    <StoreItem 
                      name="Lakshmi Groceries"
                      distance="0.8 km"
                      status="pending"
                    />
                    <StoreItem 
                      name="Ganesh Provision Store"
                      distance="1.2 km"
                      status="pending"
                    />
                    <StoreItem 
                      name="Sri Venkateshwara Stores"
                      distance="1.5 km"
                      status="accepted"
                    />
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-green-600 font-medium mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Order Accepted
                  </div>
                  <p className="text-green-700 text-sm">
                    Sri Venkateshwara Stores has accepted your order. Estimated delivery in 30 minutes.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="hidden md:block absolute top-1/2 left-0 h-full w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step = ({ icon, title, description }: StepProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface StoreItemProps {
  name: string;
  distance: string;
  status: 'pending' | 'accepted' | 'rejected';
}

const StoreItem = ({ name, distance, status }: StoreItemProps) => {
  return (
    <div className={`flex justify-between items-center p-2 rounded-lg ${status === 'accepted' ? 'bg-green-100' : 'bg-white'}`}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-subtle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-600">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <div>
          <div className="font-medium text-sm">{name}</div>
          <div className="text-xs text-gray-500">{distance}</div>
        </div>
      </div>
      <div>
        {status === 'accepted' && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Accepted</span>
        )}
        {status === 'pending' && (
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Pending</span>
        )}
        {status === 'rejected' && (
          <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Rejected</span>
        )}
      </div>
    </div>
  );
};

export default HowItWorks;
