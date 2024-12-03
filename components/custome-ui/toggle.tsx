"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToggleProps {
  index: number,
  title: string;
  description: string;
}

const Toggle: React.FC<ToggleProps> = ({ index, title, description, }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mx-auto mt-3">
      <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
        <div className="p-4 flex items-center">
          <div className="flex w-[95%]">
            <h1 className="text-2xl font-bold text-blue-200">0{index + 1}</h1>
            <h3 className="text-lg ml-4 w-[90%] font-semibold mb-2">{title}</h3>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white font-bold w-8 h-8 rounded-full transition duration-300 ml-4 flex items-center justify-center"
          >
            {isOpen ? (
              <div className="text-gray-200">&#215;</div>
            ) : (
              <div className="text-gray-200">&#43;</div>
            )}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-gray-100"
            >
              <p className="text-gray-600 mb-4 flex-grow px-16">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Toggle;
