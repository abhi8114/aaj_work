'use client';
import { useState } from 'react';

const AccordionWithImage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionItems = [
    {
      title: 'Streamline Booking Management',
      description: 'Gain complete real-time visibility into all your bookings, ensuring you stay informed about every aspect of your transportation.',
      imgSrc: '/images/image 65.jpg',
    },
    {
      title: 'Unparalleled Real-Time Visibility',
      description: 'Gain complete real-time visibility into all your bookings.',
      imgSrc: '/images/image 65.jpg',
    },
    {
      title: 'Effortless POD Access',
      description: 'Easily access your Proof of Delivery documentation at any time.',
      imgSrc: '/images/image 65.jpg',
    },
    {
      title: 'Live Shipment Tracking',
      description: 'Monitor your shipments in real-time for added peace of mind.',
      imgSrc: '/images/image 65.jpg',
    },
    {
      title: 'Performance Analysis Made Easy',
      description: 'Analyze your freight performance quickly and efficiently.',
      imgSrc: '/images/image 65.jpg',
    },
    {
      title: 'Detailed Freight Invoices',
      description: 'Get in-depth invoices that break down every aspect of your freight costs.',
      imgSrc: '/images/image 65.jpg',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className=" font-manrope mt-16 container mx-auto">
        <p className="text-4xl px-[189px] ">
        Transforming Transportation with Our Cutting-Edge Transport Management System (TMS)
        </p>
        <p className=' py-5 text-center px-[200px]'>Effortlessly Optimize Your B2B Transportation with Our State-of-the-Art Transport Management System (TMS) for Enhanced Efficiency and Control</p>
    
    {/* Accordion Section */}
    <div className="bg-black w-2/3 flex flex-col px-20 py-16 md:flex-row md:space-x-8">
      <div className="w-full md:w-1/2 space-y-4">
        {accordionItems.map((item, index) => (
          <div key={index} className="border-b border-gray-600">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-white text-xl w-[calc(100% - 50px)]">{item.title}</h3>
              <span className="text-white w-10">{index === activeIndex ? '-' : '+'}</span>
            </div>
            {index === activeIndex && (
              <div className="py-2">
                <p className="text-gray-400">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-full md:w-2/3">
        {activeIndex !== null && (
          <img
            src={accordionItems[activeIndex].imgSrc}
            alt={accordionItems[activeIndex].title}
            className="w-full  h-auto rounded-md shadow-lg"
          />
        )}
      </div>
    </div>
  </div>
  );
};

export default AccordionWithImage;
