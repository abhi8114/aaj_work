import Image from "next/image";

const HeroDeets = () => {
  return (
    <div className="h-full w-full container mx-auto">
       <div className="px-[251px] mt-12 text-3xl font-semibold font-manrope text-center">  <p > Empowering Businesses with Part Truck Load <br />(PTL) Transportation Solutions </p></div>
       <div className="mt-[27px]  px-[200px] "> <p className="text-center font-manrope text-base ">We understand the unique transportation challenges faced by B2B Enterprises. Often, SMEs have cargo that doesn't require a full truckload (FTL) but booking one can be costly. That's where our Part Truck Load (PTL) service comes in, designed specifically to cater to the needs of B2B Enterprises.</p> </div>
       <Image
        src="/images/Background.jpg"
        width={1673.5}
        height={506}
        alt="Frame-1"
        className=" mx-auto"
        />

    </div>
  )
}

export default HeroDeets
