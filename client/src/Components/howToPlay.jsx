import React from 'react';
import { motion } from 'framer-motion';

const HowToPlay = ({ close }) => {
  return (
    <motion.div 
      className="w-full max-w-2xl bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl relative"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Close button */}
      <button 
        onClick={() => close(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-xl"
        aria-label="Close how to play"
      >
        ✕
      </button>

      {/* Content */}
      <div className="pr-8">
        <h2 className="text-2xl font-bold mb-6 text-white">
          How to Play
        </h2>
        
        <div className="mb-6 p-3 bg-gray-800 rounded-lg border border-gray-700">
          <p className="text-gray-300 text-sm">💡 Best experienced on voice chat for live discussion during voting!</p>
        </div>
        
        <div className="space-y-5 text-gray-300">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 text-sm font-medium mt-0.5">1</div>
            <div>
              <h3 className="font-semibold text-white mb-1">Secret Imposter</h3>
              <p className="text-sm leading-relaxed">One player becomes the <span className="text-gray-200">Imposter</span> but doesn't know it. Everyone gets the same question except the imposter gets a different one.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 text-sm font-medium mt-0.5">2</div>
            <div>
              <h3 className="font-semibold text-white mb-1">Answer Phase</h3>
              <p className="text-sm leading-relaxed">All players answer naturally. The <span className="text-gray-200">Imposter</span> answers their different question, unaware it's not the real one.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 text-sm font-medium mt-0.5">3</div>
            <div>
              <h3 className="font-semibold text-white mb-1">The Reveal</h3>
              <p className="text-sm leading-relaxed">The real question is revealed with all answers. Now the <span className="text-gray-200">Imposter</span> must pretend they answered correctly!</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 text-sm font-medium mt-0.5">4</div>
            <div>
              <h3 className="font-semibold text-white mb-1">Vote & Win</h3>
              <p className="text-sm leading-relaxed">Discuss and vote. <span className="text-gray-200">Imposter</span> wins by avoiding detection, others win by finding the faker!</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HowToPlay;