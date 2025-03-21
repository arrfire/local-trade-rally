
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md py-3 shadow-subtle" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 animate-pulse-slow"></div>
            <span className="relative text-primary font-bold text-xl">N</span>
          </div>
          <span className="font-bold text-xl tracking-tight">NammaKirana</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#for-stores">For Stores</NavLink>
          <NavLink href="#for-customers">For Customers</NavLink>
          <button className="bg-primary text-white px-5 py-2 rounded-lg font-medium transition-all hover:bg-primary/90 hover:shadow-float active:scale-95">
            Get Started
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-slide-up">
          <div className="container py-4 flex flex-col space-y-4">
            <MobileNavLink onClick={() => setIsMenuOpen(false)} href="#features">Features</MobileNavLink>
            <MobileNavLink onClick={() => setIsMenuOpen(false)} href="#how-it-works">How It Works</MobileNavLink>
            <MobileNavLink onClick={() => setIsMenuOpen(false)} href="#for-stores">For Stores</MobileNavLink>
            <MobileNavLink onClick={() => setIsMenuOpen(false)} href="#for-customers">For Customers</MobileNavLink>
            <button className="bg-primary text-white px-5 py-3 rounded-lg font-medium transition-all hover:bg-primary/90 active:scale-95 mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-foreground/80 hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <a 
    href={href} 
    className="text-foreground/80 hover:text-primary transition-colors font-medium py-2 px-4 rounded-md hover:bg-slate-50 active:bg-slate-100"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
