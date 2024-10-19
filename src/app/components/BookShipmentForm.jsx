import "../globals.css";
const BookShipmentForm = () => {
  return (
    <div className="absolute   right-[5%]  bg-black   bottom-0 h-[430px] w-[469.49px] rounded-lg rounded-b-none font-manrope">
  <h2 className="text-white text-2xl font-semibold mb-2 mt-10 text-center">
    Pan India Transportation Service
  </h2>
  <p className="text-gray-300 mb-4 text-center">
    Pan India transportation with guaranteed <br />
    on-time delivery
  </p>
  <form>
    <div className="mb-4 relative px-[5%] md:px-11 mt-10">
      <input
        type="text"
        placeholder="Weight"
        className="w-full bg-white py-2 px-3 rounded-md pr-8 placeholder:text-[#272727]"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
        ▼
      </span>
    </div>
    <div className="mb-4 relative px-[5%] md:px-11">
      <input
        type="text"
        placeholder="Pickup Pincode"
        className="w-full bg-white py-2 px-3 rounded-md pr-8 placeholder:text-[#272727]"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
        ▼
      </span>
    </div>
    <div className="px-[5%] md:px-11 pb-12">
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
      >
        Book Shipment
      </button>
    </div>
  </form>
</div>
  );
};
export default BookShipmentForm;