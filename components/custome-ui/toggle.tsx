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
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 flex flex-row items-center">
          <h1 className="text-2xl w-[5%] font-bold text-gray-200">0{index + 1}</h1>
          <h3 className="text-lg w-[90%] font-semibold mb-2">{title}</h3>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-8 h-8 rounded-full transition duration-300 ml-4 flex items-center justify-center"
          >
            {isOpen ? (
              <div className="w-4 h-0.5 bg-white"></div>
            ) : (
              <div className="relative w-4 h-4">
                <div className="absolute top-1/2 left-0 w-4 h-0.5 bg-white"></div>
                <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-white"></div>
              </div>
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
              <p className="text-gray-600 mb-4 flex-grow">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Toggle;
