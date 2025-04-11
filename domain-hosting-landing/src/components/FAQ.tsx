'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is domain hosting?',
    answer:
      'Domain hosting is a service that makes your website accessible on the internet. It involves storing your website files on a server and connecting your domain name to those files, allowing users to access your site by typing your domain name in their browser.',
  },
  {
    question: 'How do I transfer my existing domain to DomainHub?',
    answer:
      'Transferring your domain to DomainHub is simple. First, unlock your domain with your current registrar and obtain the authorization code. Then, initiate the transfer process in your DomainHub dashboard. Our support team will guide you through the entire process to ensure a smooth transition.',
  },
  {
    question: 'Do you offer SSL certificates?',
    answer:
      "Yes, all our hosting plans include free SSL certificates. SSL certificates encrypt the data transferred between your website and visitors, ensuring secure connections and boosting your site's credibility and search engine ranking.",
  },
  {
    question: 'What kind of customer support do you provide?',
    answer:
      'We offer 24/7 customer support through multiple channels including live chat, email, and phone. Our Basic plan includes email support, while our Professional and Enterprise plans include priority support with faster response times. Our support team consists of domain hosting experts who can assist with any technical issues or questions.',
  },
  {
    question: 'Can I host multiple domains under one account?',
    answer:
      'Yes, you can host multiple domains under a single DomainHub account. Our Professional plan includes 3 domain registrations, and our Enterprise plan includes 10. If you need to host more domains, you can purchase additional domain slots or contact our sales team for a custom solution.',
  },
  {
    question: 'What is your uptime guarantee?',
    answer:
      'We guarantee 99.9% uptime for our Basic and Professional plans, and 99.99% uptime for our Enterprise plan. In the rare event that we fail to meet these guarantees, we provide credits to your account based on our Service Level Agreement (SLA).',
  },
  {
    question: 'Do you offer domain privacy protection?',
    answer:
      'Yes, we offer domain privacy protection for all registered domains. This service masks your personal information in the WHOIS directory, protecting you from spam, identity theft, and unwanted solicitations. Domain privacy is included free with our Professional and Enterprise plans, and available as an add-on for our Basic plan.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual plans. We also offer invoicing options for Enterprise customers.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            FAQ
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            Find answers to common questions about our domain hosting services.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="text-left w-full flex justify-between items-start text-gray-900 dark:text-white focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="ml-6 h-7 flex items-center">
                  <svg
                    className={`${
                      openIndex === index ? 'rotate-180' : 'rotate-0'
                    } h-6 w-6 transform transition-transform duration-200 ease-in-out text-blue-500`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-4 text-base text-gray-500 dark:text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-gray-500 dark:text-gray-300">
            Still have questions?{' '}
            <a
              href="#contact"
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Contact our support team
            </a>{' '}
            for assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
