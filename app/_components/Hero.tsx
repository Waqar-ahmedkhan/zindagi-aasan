'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from 'react';
import Whatsapp from "./whatsapp";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <>
     <Whatsapp/> 
   
     <div className='flex  items-center gap-3 flex-col justify-center pt-14 pb-7 bg-gradient-to-b from-orange-200 to-white'>
  
      <motion.h2 
        className='font-bold text-4xl md:text-5xl lg:text-6xl text-center text-gray-800'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Find Home
        <motion.span 
          className='text-orange-500'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        > Service/Repair</motion.span>
        <br /> Near You
      </motion.h2>
      
      <motion.h2 
        className='text-xl text-gray-600 mt-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Explore Best Home Service & Repair near you
      </motion.h2>
      
      <motion.div 
        className='mt-8 flex gap-4 items-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Input 
          placeholder='Search for a service...'
          className="rounded-full md:w-[350px] shadow-md focus:ring-2 focus:ring-orange-400 border-orange-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button 
          className="rounded-full h-[46px] px-6 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 shadow-md text-white"
          onClick={handleSearch}
        >
          <Search className='h-5 w-5 mr-2' />
          Search
        </Button>
      </motion.div>
    
      

      <motion.div 
        className='mt-12  grid grid-cols-2 md:grid-cols-4 gap-6'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        {['Plumbing', 'Electrical', 'Cleaning', 'Painting'].map((service, index) => (
          <motion.div 
            key={service}
            className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
          
            <div className='w-12 h-12  bg-orange-100 rounded-full flex items-center justify-center mb-2'>

              <span className='text-orange-500 text-xl'>{service[0]}</span>
            </div>
            <span className='text-sm font-medium text-gray-700'>{service}</span>
          </motion.div>
        ))}
      </motion.div>

    


    </div>
    </>
   
  );
}