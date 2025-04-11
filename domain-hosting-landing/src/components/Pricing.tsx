'use client';

import { useState } from 'react';

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Perfect for personal websites and small projects',
    monthlyPrice: 4.99,
    yearlyPrice: 49.99,
    features: [
      '1 Domain Registration',
      'Shared Hosting',
      '10GB Storage',
      'Free SSL Certificate',
      'Email Support',
      '99.9% Uptime Guarantee',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for businesses and growing websites',
    monthlyPrice: 9.99,
    yearlyPrice: 99.99,
    features: [
      '3 Domain Registrations',
      'VPS Hosting',
      '50GB SSD Storage',
      'Free SSL Certificate',
      'Priority Support',
      '99.9% Uptime Guarantee',
      'Daily Backups',
      'Advanced Security',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large businesses with high traffic demands',
    monthlyPrice: 19.99,
    yearlyPrice: 199.99,
    features: [
      '10 Domain Registrations',
      'Dedicated Hosting',
      '200GB SSD Storage',
      'Free SSL Certificate',
      '24/7 Phone Support',
      '99.99% Uptime Guarantee',
      'Hourly Backups',
      'Advanced Security',
      'CDN Integration',
      'Load Balancing',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl sm:text-center">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-5 text-xl text-gray-500 dark:text-gray-300 sm:text-center">
            Choose the perfect plan for your domain hosting needs. All plans
            include domain registration, hosting, and 24/7 support.
          </p>

          <div className="relative mt-6 bg-white dark:bg-gray-700 rounded-lg p-0.5 flex self-center">
            <button
              type="button"
              className={`relative w-1/2 py-2 text-sm font-medium rounded-md whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 sm:w-auto sm:px-8 ${
                !annual
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-200'
              }`}
              onClick={() => setAnnual(false)}
            >
              Monthly billing
            </button>
            <button
              type="button"
              className={`relative w-1/2 py-2 text-sm font-medium rounded-md whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 sm:w-auto sm:px-8 ${
                annual
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-200'
              }`}
              onClick={() => setAnnual(true)}
            >
              Annual billing
            </button>
          </div>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 dark:divide-gray-700 ${
                plan.highlighted
                  ? 'border-2 border-blue-500 dark:border-blue-400'
                  : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="p-6">
                <h2 className="text-2xl leading-6 font-semibold text-gray-900 dark:text-white">
                  {plan.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
                  {plan.description}
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">
                    {annual ? '/year' : '/month'}
                  </span>
                </p>
                {annual && (
                  <p className="mt-2 text-sm text-green-500">
                    Save $
                    {Math.round(plan.monthlyPrice * 12 - plan.yearlyPrice)} with
                    annual billing
                  </p>
                )}
                <button
                  className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                    plan.highlighted
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 dark:text-white tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-gray-500 dark:text-gray-300">
            Need a custom solution?{' '}
            <a
              href="#contact"
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Contact our sales team
            </a>{' '}
            for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
}
