"use client";
import { useEffect, useState } from 'react';

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

const testimonials = [
  {
    name: "Ahmed Farooq",
    role: "Homeowner",
    quote: "Fix Your Home transformed my living space! Their attention to detail and professionalism was outstanding.",
    imgSrc: "/images/male_1.jpg", 
  },
  {
    name: "Fatima Khan",
    role: "Interior Design Enthusiast",
    quote: "I'm extremely satisfied with the renovation work. The team was punctual, courteous, and delivered beyond my expectations.",
    imgSrc: "/images/female_1.jpg"
  },
  {
    name: "Muhammad Ali",
    role: "Kitchen Renovation Client",
    quote: "Excellent service! They helped me redesign my kitchen, and now it's the highlight of my home.",
    imgSrc: "/images/male_2.jpg", 
  },
  {
    name: "Ayesha Malik",
    role: "Bathroom Remodeling Client",
    quote: "The bathroom remodeling was done perfectly. I appreciate their commitment to quality and timeliness.",
    imgSrc: "/images/female_2.jpeg"
  },
  {
    name: "Imran Hussain",
    role: "Home Office Client",
    quote: "From start to finish, Fix Your Home provided exceptional service. My home office is now a productive haven!",
    imgSrc: "/images/male_3.jpg", 
  },
  {
    name: "Sana Ahmed",
    role: "Living Room Renovation Client",
    quote: "Amazing work on my living room! The team was professional and the results are fantastic.",
    imgSrc: "/images/female_3.jpeg"
  },
  {
    name: "Ali Raza",
    role: "Basement Finishing Client",
    quote: "Great job finishing my basement. It's now a wonderful space for the family.",
    imgSrc: "/images/male_4.jpg", 
  },
  {
    name: "Nadia Shaikh",
    role: "Outdoor Space Client",
    quote: "The team did a superb job on my patio. It's perfect for entertaining guests.",
    imgSrc: "/images/female_4.jfif"
  },
  {
    name: "Kamran Khan",
    role: "Garage Renovation Client",
    quote: "Top-notch service for my garage renovation. Everything was done on time and within budget.",
    imgSrc: "/images/male_5.jfif", 
  },
  {
    name: "Hina Tariq",
    role: "Home Decor Client",
    quote: "The decor advice was fantastic. My home feels so much more comfortable and stylish now.",
    imgSrc: "/images/female_5.jpg"
  }
];


export default function TestimonialSlider2() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
   
    <section className="w-full ">
      <div className="mx-auto max-w-6xl px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-800">What Our Clients Say</h2>
        
        {/* Main slider */}
        <div className="mb-16">
          <Card className="shadow-lg bg-gradient-to-b from-orange-300 to-orange-200 overflow-hidden">
            <CardContent className="flex items-center justify-between p-16">
              <div className="w-1/3">
                <Image
                  src={testimonials[activeIndex].imgSrc}
                  alt={testimonials[activeIndex].name}
                  width={170}
                  height={170}
                  className="rounded-full border-4 border-orange-500"
                />
              </div>
              <div className="w-2/3 pl-8">
                <q className="text-2xl text-gray-800 italic mb-6 block">
                  {testimonials[activeIndex].quote}
                </q>
                <div>
                  <p className="text-xl font-semibold text-orange-600">{testimonials[activeIndex].name}</p>
                  <p className="text-md text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Carousel */}
        <Carousel
          className="w-full"
          onScroll={(index) => setActiveIndex(index)}
          index={activeIndex}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/5 lg:basis-1/6 pl-4">
                <Card className={`shadow-lg cursor-pointer transition-all duration-300 ${index === activeIndex ? 'bg-orange-400 scale-110' : 'bg-orange-200 hover:bg-orange-300'}`}>
                  <CardContent className="flex aspect-square items-center justify-center p-4">
                    <Image
                      src={testimonial.imgSrc}
                      alt={testimonial.name}
                      width={90}
                      height={90}
                      className="rounded-full border-4 border-orange-500"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-30px] top-1/2 -translate-y-1/2 fill-orange-500 hover:fill-orange-600" />
          <CarouselNext className="absolute right-[-30px] top-1/2 -translate-y-1/2 fill-orange-500 hover:fill-orange-600" />
        </Carousel>
      </div>
    </section>
    
   
    </>
  );
}