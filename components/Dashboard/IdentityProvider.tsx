import React, { useState, useEffect } from "react";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SocialConnection {
  name: string;
  icon: React.ReactNode;
  description: string;
  points: number;
}

const socialConnections: SocialConnection[] = [
  {
    name: "Discord",
    icon: (
      <img src="/api/placeholder/24/24" alt="Discord" className="w-6 h-6" />
    ),
    description: "Connect your Discord account to identify and reputation",
    points: 10,
  },
  {
    name: "Google",
    icon: <img src="/api/placeholder/24/24" alt="Google" className="w-6 h-6" />,
    description: "Connect to Google to verify your email address.",
    points: 15,
  },
  {
    name: "Instagram",
    icon: (
      <img src="/api/placeholder/24/24" alt="Instagram" className="w-6 h-6" />
    ),
    description: "Connect to Instagram to verify your social media presence.",
    points: 15,
  },
  {
    name: "X",
    icon: <img src="/api/placeholder/24/24" alt="X" className="w-6 h-6" />,
    description: "Connect to Twitter to verify your social media presence.",
    points: 10,
  },
];

const categories = [
  "Credit",
  "Social",
  "Professional",
  "Gaming",
  "On-chain Activities",
  "Legal Identity",
];

const SOLIDVaultExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Social");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const CardSkeleton = () => (
    <div className="bg-gray-800 p-3 rounded-lg flex flex-col animate-pulse">
      <div className="flex justify-between items-start mb-2">
        <div className="w-6 h-6 bg-gray-700 rounded" />
        <div className="w-16 h-6 bg-gray-700 rounded" />
      </div>
      <div className="text-left">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-1" />
        <div className="h-3 bg-gray-700 rounded w-full mb-1" />
        <div className="h-3 bg-gray-700 rounded w-2/3 mb-2" />
        <div className="h-5 bg-gray-700 rounded w-1/4" />
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-6"
      >
        <h2 className="text-xl font-bold">SOLID Vault</h2>
        <Info className="w-5 h-5 ml-2 text-gray-400" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex space-x-1 mb-6 bg-gray-800 p-1 rounded-lg"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-3 py-1 rounded-md text-sm ${
              activeTab === category
                ? "bg-white text-gray-900"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardSkeleton />
                </motion.div>
              ))
            : socialConnections.map((connection) => (
                <motion.div
                  key={connection.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 p-3 rounded-lg flex flex-col"
                >
                  <div className="flex justify-between items-start mb-2">
                    {connection.icon}
                    <motion.button
                      className="px-2 py-1 bg-gray-700 rounded text-xs"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Connect
                    </motion.button>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-sm mb-1">
                      {connection.name}
                    </h3>
                    <p className="text-xs text-gray-400 mb-2">
                      {connection.description}
                    </p>
                    <motion.span
                      className="bg-yellow-500 text-yellow-900 px-2 py-0.5 rounded-full text-xs font-bold inline-block"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      +{connection.points}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SOLIDVaultExplorer;
