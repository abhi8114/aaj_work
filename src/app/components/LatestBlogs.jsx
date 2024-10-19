import React from 'react';

const BlogCard = ({ date, title, image }) => (
  <div className="bg-white rounded-lg  shadow-lg group relative">
    <div className="">
      <p className="text-gray-600 px-4 pt-4  text-sm">{date}</p>
      <h3 className="text-xl px-4 pt-4 mt-2 mb-8 ">{title}</h3>
    </div>
    <img src={image} alt={title} className=" w-full z-[20] relative h-48 object-cover" />
    <div className=" z-[10] absolute bottom-0 left-0 right-0 bg-white p-3 transform -translate-y-10 group-hover:translate-y-11 transition-transform duration-300 ease-in-out shadow-lg rounded-md ">
      <a href="#" className="text-red-600  font-medium hover:underline">
        Read More →
      </a>
    </div>
  </div>
);

const BlogCards = () => {
  const blogs = [
    {
      date: "June 27, 2024",
      title: "What are the Warehouse Costs? - Tips to Optimize Warehousing Costs",
      image: "/images/blogPicture1.jpg"
    },
    {
      date: "June 27, 2024",
      title: "Top 10 Logistics Companies in Gurgaon  [Gurugram] - 2024",
      image: "/images/blogPicture2.jpg"
    },
    {
      date: "June 27, 2024",
      title: "Meesho Seller Panel - How to Sell Products on Meesho Supplier?",
      image: "/images/blogPicture3.jpg"
    }
  ];

  return (
    <div className=" p-20 container ">
      <h2 className="text-4xl mb-6">Latest Blogs</h2>
      <div className="  grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      <div className="text-center  mt-8">
        <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default BlogCards;