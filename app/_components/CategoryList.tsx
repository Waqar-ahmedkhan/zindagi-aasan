import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from 'react';

const SkeletonLoader = () => (
  <>
    {[...Array(6)].map((_, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <div className="p-8 flex flex-col items-center">
          <div className="w-20 h-20 bg-orange-300 rounded-full mb-6 animate-pulse" />
          <div className="h-8 bg-orange-200 rounded w-3/4 mb-4 animate-pulse" />
          <div className="h-4 bg-orange-200 rounded w-1/2 animate-pulse" />
        </div>
      </motion.div>
    ))}
  </>
);

const CategoryList = ({ categories }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-orange-100 to-orange-200">
      <h1 className="text-5xl font-bold mb-12 text-center text-orange-600 shadow-text">Our Services</h1>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {loading ? (
            <SkeletonLoader key="skeleton" />
          ) : (
            categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-orange-200 to-white opacity-50 group-hover:opacity-70 transition-opacity duration-200"
                  style={{ backgroundColor: category.bgcolor?.hex || "#f9f9f9" }}
                />
                <div className="relative p-8 flex flex-col items-center justify-center h-full">
                  <motion.div
                    className="mb-6 transform group-hover:scale-110 transition-transform duration-200"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Image
                      src={category.icon?.url}
                      width={80}
                      height={80}
                      alt={category.name}
                      className="w-20 h-20 object-contain filter drop-shadow-lg"
                    />
                  </motion.div>
                  <motion.h2
                    className="text-3xl font-bold text-orange-600 text-center group-hover:text-orange-700 transition-colors duration-200"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {category.name}
                  </motion.h2>
                  <motion.p
                    className="mt-4 text-sm font-medium text-orange-700 text-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Click to explore more
                  </motion.p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-2 bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default CategoryList;