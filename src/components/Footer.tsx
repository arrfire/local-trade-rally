
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 animate-pulse-slow"></div>
                <span className="relative text-primary font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-lg tracking-tight">NammaKirana</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Connecting local grocery stores with customers, without commissions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Customers</h3>
            <ul className="space-y-2">
              <FooterLink href="#how-it-works">How It Works</FooterLink>
              <FooterLink href="#for-customers">Create an Order</FooterLink>
              <FooterLink href="#">Track Your Order</FooterLink>
              <FooterLink href="#">Support</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Stores</h3>
            <ul className="space-y-2">
              <FooterLink href="#for-stores">Join NammaKirana</FooterLink>
              <FooterLink href="#">Partner Benefits</FooterLink>
              <FooterLink href="#">Store Dashboard</FooterLink>
              <FooterLink href="#">Success Stories</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Our Mission</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NammaKirana. All rights reserved.
          </div>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <SocialLink href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </SocialLink>
            <SocialLink href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </SocialLink>
            <SocialLink href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </SocialLink>
            <SocialLink href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <a 
      href={href}
      className="text-gray-600 hover:text-primary transition-colors text-sm"
    >
      {children}
    </a>
  </li>
);

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

const SocialLink = ({ href, children }: SocialLinkProps) => (
  <a 
    href={href}
    className="text-gray-400 hover:text-primary transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default Footer;
