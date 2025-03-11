import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 shadow-md p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Special Careers Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Speedy Careers</h2>
            <p className="text-sm mb-4">
              Speedy Career – AI-powered resume scanning and ranking system. Simplifying the hiring process with smart, efficient candidate evaluation.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-2 rounded-l text-gray-700 flex-grow border border-gray-300"
              />
              <button className="bg-green-500 p-2 rounded-r hover:bg-green-600 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 mt-6 pt-6 text-center">
          <p className="text-sm">
            <strong>Gamage Recruiters</strong><br />
            © 2025 Speedy Career. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;