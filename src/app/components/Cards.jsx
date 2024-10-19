import React from "react";
import Image from "next/image";

const Feature = ({ title, description, imageUrl }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-left text-left h-full">
    <div className="w-16 h-16 relative  mb-4">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        style={{ objectFit: 'cover' }} 
        className="ml-2"
      />
    </div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Cards = () => {
  const features = [
    {
      title: "Efficient and Cost-Effective",
      description:
        "Our PTL service allows B2B Enterprises to transport their goods efficiently at lower cost through reliable and premium transporters.",
      imageUrl: "/images/Img 1.svg",
    },
    {
      title: "Digital",
      description:
        "We help businesses take their transportation management online with 100% POD access and real time tracking of shipments in one dashboard.",
      imageUrl: "/images/Img 2.svg",
    },
    {
      title: "Reliable and Timely",
      description:
        "With AAJ Swift, you can trust reliable and on-time deliveries, helping you meet your commitments to your customers.",
      imageUrl: "/images/Img 3.svg",
    },
    {
      title: "Seamless Integration",
      description:
        "PTL shipments seamlessly integrate with our advanced Transport Management System (TMS), providing you with enhanced efficiency and control over your logistics.",
      imageUrl: "/images/Img 4.svg",
    },
  ];

  return (
    <div className="bg-black text-white h-[565px]">
      <div className="max-w-[1300px] mx-auto">
        <h1 className="text-4xl pt-12 text-center mb-8">
          PTL (Part Truck Load) Transportation Optimized
        </h1>
        <div className=" px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
