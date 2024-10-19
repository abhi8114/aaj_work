"use client";
import { useState } from 'react';

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How can I track my shipment?',
      answer: 'You can track your shipment using the tracking number provided via email after placing your order.',
    },
    {
      question: "My shipment status is still at 'Pick up.' What should I do?",
      answer: "If your shipment is still marked as 'Pick up,' please contact customer support for further assistance.",
    },
    {
      question: 'My shipment is out for delivery. When will I receive it?',
      answer: 'Your shipment can be delivered between 10:00 am and 8:00 pm on the same day when it is marked out for delivery.',
    },
    {
      question: 'How can I get the delivery of my shipment if I missed it today?',
      answer: 'Your shipment can be delivered between 10:00 am and 8:00 pm on the same day when it is marked out for delivery.',
    },
    {
      question: 'How can I get the delivery of my shipment if I missed it today?',
      answer: 'Your shipment can be delivered between 10:00 am and 8:00 pm on the same day when it is marked out for delivery.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex p-10 pt-1">
      <div className='w-1/2 px-10'>
      <h2 className="text-4xl text-left pb-4">Frequently Asked <br /> Questions</h2>
      <p className="mb-6 text-gray-600">Find answers to common questions about our <br /> shipping services, rates, delivery times, and more</p>
      
      <button className="bg-red-600 text-white py-2 px-4 rounded-md mb-8 hover:bg-red-700 transition duration-200">
        Calculate Shipping Cost
      </button>
      </div>

      <div className="space-y-4 w-1/2">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-sm">
            <div
              className="bg-[#F8F2F2] flex justify-between p-4 cursor-pointer "
              onClick={() => toggleAccordion(index)}
            >
              <h3 className={`text-xl font-medium rounded-lg`}>
                {faq.question}
              </h3>
              <span className={`text-red-500 text-[24px] `}>
                +
              </span>
            </div>
            {activeIndex === index && (
              <div className="bg-[#F8F2F2] p-4 text-black">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
