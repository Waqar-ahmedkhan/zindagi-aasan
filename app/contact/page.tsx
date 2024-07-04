'use client';

import { useState } from 'react';
import Footer from '../_components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    isComplaint: false,
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '', isComplaint: false });
  };

  return (
    <>
 
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-orange-500 p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in-down">
              Contact ZindagiAsaan
            </h2>
            <p className="mb-8 animate-fade-in-down animation-delay-150">
              We're here to help fix your home and make your life easier.
            </p>
            <div className="space-y-4 animate-fade-in-down animation-delay-300">
              <div className="flex items-center">
                <span className="mr-4">📞</span>
                <span>+923456-7890</span>
              </div>
              <div className="flex items-center">
                <span className="mr-4">📍</span>
                <span>Kust Nic, kohat,  Pakistan</span>
              </div>
              <div className="flex items-center">
                <span className="mr-4">✉️</span>
                <span>contact@zindagiasaan.com</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in-down">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>
              <div className="animate-fade-in-down animation-delay-150">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>
              <div className="animate-fade-in-down animation-delay-300">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                ></textarea>
              </div>
              <div className="flex items-center animate-fade-in-down animation-delay-450">
                <input
                  type="checkbox"
                  id="isComplaint"
                  name="isComplaint"
                  checked={formData.isComplaint}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="isComplaint" className="ml-2 block text-sm text-gray-700">
                  This is a complaint
                </label>
              </div>
              <div className="animate-fade-in-down animation-delay-600">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {formData.isComplaint ? (
                    <>
                      <span className="mr-2">📝</span>
                      Submit Complaint
                    </>
                  ) : (
                    <>
                      <span className="mr-2">🔧</span>
                      Request Service
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
      <Footer/>
      </>
  );
}
