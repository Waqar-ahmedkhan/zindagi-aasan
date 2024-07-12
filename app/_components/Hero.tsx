'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from 'react';
import Whatsapp from "./Whatsapp";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <>
     <Whatsapp/> 
   
     <div className='flex  items-center gap-3 flex-col justify-center pt-24 pb-7 bg-gradient-to-b from-orange-200 to-orange-50'>
  
      <motion.h2 
        className='font-bold text-4xl md:text-6xl lg:text-6xl text-center text-gray-800'
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
        className='text-xl text-gray-600 mt-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Explore Best Home Service & Repair near you
      </motion.h2>
      
      <motion.div 
        className='mt-10 flex gap-10 items-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Input 
          placeholder='Search for a service...'
          className="rounded-full md:w-[350px] p-5 shadow-md focus:ring-2 focus:ring-orange-400 border-orange-400"
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
    
      

     

    


    </div>
    </>
   
  );
}