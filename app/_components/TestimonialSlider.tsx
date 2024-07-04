"use client";

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
    imgSrc: "/images/female_2.jpg"
  },
  {
    name: "Imran Hussain",
    role: "Home Office Client",
    quote: "From start to finish, Fix Your Home provided exceptional service. My home office is now a productive haven!",
    imgSrc: "/images/male_2.jpg", 
  },
  {
    name: "Sana Ahmed",
    role: "Living Room Renovation Client",
    quote: "Amazing work on my living room! The team was professional and the results are fantastic.",
    imgSrc: "/images/female_2.jpg"
  },
  {
    name: "Ali Raza",
    role: "Basement Finishing Client",
    quote: "Great job finishing my basement. It's now a wonderful space for the family.",
    imgSrc: "/images/male_1.jpg", 
  },
  {
    name: "Nadia Shaikh",
    role: "Outdoor Space Client",
    quote: "The team did a superb job on my patio. It's perfect for entertaining guests.",
    imgSrc: "/images/female_1.jpg"
  },
  {
    name: "Kamran Khan",
    role: "Garage Renovation Client",
    quote: "Top-notch service for my garage renovation. Everything was done on time and within budget.",
    imgSrc: "/images/male_4.jpg", 
  },
  {
    name: "Hina Tariq",
    role: "Home Decor Client",
    quote: "The decor advice was fantastic. My home feels so much more comfortable and stylish now.",
    imgSrc: "/images/female_2.jpg"
  }
];


export default function TestimonialSlider2() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-800">What Our Clients Say</h2>
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-4">
                <Card className="shadow-lg bg-gradient-to-b from-orange-300 to-orange-100">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col">
                      <q className="flex-1 text-gray-700 italic mb-6">
                        {testimonial.quote}
                      </q>
                      <div className="mt-6 flex items-center">
                        <Image
                          src={testimonial.imgSrc}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full mr-4 border-4 border-orange-500"
                        />
                        <div>
                          <p className="text-lg font-semibold text-orange-600">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-orange-500 hover:fill-orange-600" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-orange-500 hover:fill-orange-600" />
        </Carousel>
      </div>
    </section>
  );
}