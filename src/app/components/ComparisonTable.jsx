import React from 'react';
import Image from 'next/image';

const ComparisonTable = () => {
  const list1 = [
    { title: "Choose among 10+ transporters"},
    { title: "Manage all your booking on AAJ Swift platform"},
    { title: "Automate transport selection process"},
    { title: "Real Time Visibility of all your Bookings"},
    { title: "Access all PODs on AAJ Swift platform"},
    { title: "Live Shipment Tracking until Delivery"},
    { title: "Single Point of Contact for Pickups and Deliveries"},
  ]

  const list2 = [
    { title: "Dependent on 1 or 2 transporters"},   
    { title: "Manage Booking Manually"},
    { title: "Person dependent transport selection process Booking Manually"},
    { title: "No Real Time Visibility"},
    { title: "Download and manage PODs manually"},
    { title: "Unable to Track Live Delivery Status"},
    { title: "Coordinate with Multiple Stake Holders"},
  ]

  return (
    <div className=" p-6 rounded-lg  max-w-5xl mx-auto">
      <h1 className="text-5xl pt-12 mb-4 text-left">
        Why Partner with AAJ Swift rather than Traditional Transporters?
      </h1>
      <p className="text-left mb-6 text-gray-600">
        Find out Why AAJ Swift is the Preferred Choice for Businesses,<br /> Over Traditional Transporters.
      </p>

      <div className='flex gap-x-7'>
        {/* List 1 */}
        <div className='bg-[#F8F8F8] rounded-lg w-1/2 border border-[#D9D9D9]'>
          <Image src="/images/logo.svg" alt="AAJ Swift Logo" width={150} height={50} className='mx-auto py-8' />
          {list1.length > 0 && list1.map((item, index) => (
            <div className='text-center text-[#414042] py-5 px-4 even:bg-[#F4F4F9]' key={'list1_'+index}>{item.title}</div>
          ))}
        </div>

          {/* List 2 */}
        <div className='bg-[#F8F8F8] rounded-lg w-1/2 border border-[#D9D9D9]'>
            <div className='mx-auto py-8 text-center'><h1 > Traditional Transporters</h1> </div>
            {list2.length > 0 && list2.map((item, index) => (
              <div className='text-center text-[#414042] py-5 px-4 even:bg-[#F4F4F9]' key={'list1_'+index}>{item.title}</div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default ComparisonTable;