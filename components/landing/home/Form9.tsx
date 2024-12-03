"use client";
import React from 'react';
import { motion } from "framer-motion";
import Toggle from '@/components/custome-ui/toggle';

const FAQs = [
  {
    title: "AI-Powered Risk Assessment",
    description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
  },
  {
    title: "Who can benefit from AIBuildIQ?",
    description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
  },
  {
    title: "How does AIBuildIQ ensure data security and privacy?",
    description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
  },
  {
    title: "Who can benefit from AIBuildIQ?",
    description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
  },
  {
    title: "What is AIBuildIQ and how does it work?",
    description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
  },
];


const Form9 = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      id="products"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-black text-4xl text-center font-bold mb-2">
          Frequently Asked <span className="text-[#004F8F]">Questions</span>
          </p>
          <h2 className="text-md w-1/2 justify-center mx-auto text-center text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </h2>
        </motion.div>

        {FAQs.map((faq, index) => (
          <Toggle 
          key={index}
          title={faq.title}
          description={faq.description}
          index={index}
          />
        ))}

      </div>
    </motion.section>
  );
};



export default Form9;
