'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const [domain, setDomain] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (domain) {
      setIsSearching(true);
      // In a real application, this would call an API to check domain availability
      setTimeout(() => {
        setIsSearching(false);
      }, 1500);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Secure Your Online Presence</span>
            <span className="block text-blue-600 dark:text-blue-400">
              with Premium Domain Hosting
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Fast, reliable, and secure domain hosting services for businesses
            and individuals. Get started today with 24/7 support and a 99.9%
            uptime guarantee.
          </p>

          <div className="mt-10 max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="domain" className="sr-only">
                  Domain name
                </label>
                <input
                  id="domain"
                  type="text"
                  placeholder="Enter your domain name (e.g., yourdomain.com)"
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full py-3 px-4 rounded-md shadow bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                  disabled={isSearching}
                >
                  {isSearching ? 'Searching...' : 'Search Domain'}
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Find your perfect domain name and secure it before someone else
              does.
            </p>
          </div>

          <div className="mt-10 flex justify-center space-x-6">
            <Link
              href="#pricing"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
            >
              View Plans
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 dark:text-blue-400 dark:bg-gray-800 dark:hover:bg-gray-700 md:text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <div
          className="h-20 bg-white dark:bg-gray-900"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}
        ></div>
      </div>
    </section>
  );
}
