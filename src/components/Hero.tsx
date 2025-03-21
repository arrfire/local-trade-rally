
import React, { useEffect, useRef } from 'react';
import { ChevronRight, ShoppingBag, Store, Zap } from 'lucide-react';

const Hero = () => {
  const storeRef = useRef<HTMLDivElement>(null);
  const customerRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const showDemo = () => {
      if (storeRef.current && customerRef.current && messageRef.current) {
        setTimeout(() => {
          messageRef.current?.classList.add('opacity-100');
          messageRef.current?.classList.remove('opacity-0', 'translate-y-4');
        }, 300);
        
        setTimeout(() => {
          messageRef.current?.classList.add('translate-x-32');
        }, 1200);
        
        setTimeout(() => {
          storeRef.current?.classList.add('scale-105', 'border-green-500', 'border-2');
        }, 2000);
        
        setTimeout(() => {
          storeRef.current?.classList.remove('scale-105', 'border-green-500', 'border-2');
          messageRef.current?.classList.remove('translate-x-32');
          messageRef.current?.classList.add('opacity-0');
          resetAnimation();
        }, 3000);
      }
    };
    
    const resetAnimation = () => {
      setTimeout(() => {
        if (messageRef.current) {
          messageRef.current.classList.add('translate-y-4');
          messageRef.current.classList.remove('translate-x-32');
          showDemo();
        }
      }, 1000);
    };
    
    showDemo();
    
    return () => {
      // Cleanup any timers if needed
    };
  }, []);
  
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full mix-blend-multiply blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full mix-blend-multiply blur-3xl"></div>
      
      <div className="container relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm inline-flex items-center">
                Zero-Commission Platform
                <span className="w-1 h-1 bg-primary rounded-full mx-2"></span>
                Empowering Local Kiranas
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Local Grocery,</span>
              <span className="text-primary">Digital Convenience</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Connecting customers directly to neighborhood grocery stores without commissions, preserving local businesses while providing modern shopping convenience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-primary/90 hover:shadow-float active:scale-95 flex items-center justify-center">
                Shop Local Now
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
              <button className="border border-gray-300 bg-white px-6 py-3 rounded-lg font-medium transition-all hover:border-primary hover:text-primary active:scale-95 flex items-center justify-center">
                Register Your Store
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start pt-4 gap-6">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Store className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Local Stores</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <ShoppingBag className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Zero Commission</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 w-full max-w-md mx-auto">
              <div className="relative">
                {/* Animation container */}
                <div className="aspect-[5/3] bg-white rounded-2xl shadow-float overflow-hidden flex items-center justify-center p-4 mb-20">
                  <div className="relative w-full h-full flex">
                    {/* Customer */}
                    <div 
                      ref={customerRef}
                      className="absolute left-0 top-1/4 w-24 h-24 bg-gray-100 rounded-xl shadow-subtle flex flex-col items-center justify-center p-2 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <span className="text-xs font-medium">Customer</span>
                    </div>
                    
                    {/* Message */}
                    <div 
                      ref={messageRef}
                      className="absolute left-28 top-1/3 bg-primary/10 rounded-lg p-3 text-xs opacity-0 translate-y-4 transition-all duration-700 ease-spring"
                    >
                      <div className="font-medium">Order Broadcast</div>
                      <div className="text-gray-600 text-[10px] mt-1">5kg Rice, Vegetables, Milk</div>
                    </div>
                    
                    {/* Stores */}
                    <div className="absolute right-0 flex flex-col gap-4">
                      <div className="w-24 h-16 bg-gray-100 rounded-xl shadow-subtle flex flex-col items-center justify-center p-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-600">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                        </div>
                        <span className="text-[10px] font-medium">Store 1</span>
                      </div>
                      
                      <div 
                        ref={storeRef}
                        className="w-24 h-16 bg-gray-100 rounded-xl shadow-subtle flex flex-col items-center justify-center p-2 transition-all duration-300"
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-600">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                        </div>
                        <span className="text-[10px] font-medium">Store 2</span>
                      </div>
                      
                      <div className="w-24 h-16 bg-gray-100 rounded-xl shadow-subtle flex flex-col items-center justify-center p-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-600">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                        </div>
                        <span className="text-[10px] font-medium">Store 3</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Device frame */}
                <div className="absolute inset-0 border-[12px] border-gray-900 rounded-[2.5rem] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-primary/10 rounded-[2rem] pointer-events-none"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-blue-400/30 rounded-full mix-blend-multiply blur-2xl animate-float"></div>
            <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full mix-blend-multiply blur-xl -z-10 animate-float" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
