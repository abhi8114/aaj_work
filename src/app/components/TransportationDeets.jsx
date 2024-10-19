import Image from "next/image";

const cities = [
  { name: "Delhi", icon: "/images/place 1.svg" },
  { name: "Mumbai", icon: "/images/place 2.svg" },
  { name: "Kolkata", icon: "/images/place 3.svg" },
  { name: "Ghaziabad", icon: "/images/place 4.svg" },
  { name: "Banglore", icon: "/images/place 5.svg" },
  { name: "Hyderabad", icon: "/images/place 6.svg" },
  { name: "Delhi", icon: "/images/place 7.svg" },
  { name: "Mumbai", icon: "/images/place 8.svg" },
  { name: "Kolkata", icon: "/images/place 3.svg" },
];

const TransportationDeets = () => {
  return (
    <div className="p-20">
      <p className="text-5xl text-left  ">Transportation</p>
      <p className=" py-2 text-left text-[#535353]">
        The company expanded its presence to multiple locations, enhancing its
        reach and <br />
        accessibility to diverse markets
      </p>
      <div className="flex  flex-wrap items-start justify-between gap-8">
        <div>
          <Image
            src="/images/truck.jpg"
            width={480}
            height={440}
            alt="Frame-2"
            className="rounded-lg pt-10"
          />
        </div>
        {/* City Icons on the Right */}
        <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6 ">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 p-4  rounded-lg   hover:bg-red-50 transition-colors duration-200"
            >
              {/* Icon */}
              <Image
                src={city.icon}
                alt={city.name}
                width={70}
                height={70} 
                className=""
              />

              {/* City Name */}
              <p
                className="text-center text-[#272727] font-manrope "
              >
                Transportation in {city.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransportationDeets;
