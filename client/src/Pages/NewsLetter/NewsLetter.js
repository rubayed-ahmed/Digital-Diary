import React from "react";

const NewsLetter = () => {
  return (
    <section className="container px-4 lg:px-24 my-12 bg-base-200 py-16">
      <div>
        <div className="text-left">
          <h1 className="text-2xl font-bold mb-3">Subscribe to newsletter</h1>
          <div className="flex flex-col lg:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered border-[#F9B252] w-full focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="bg-[#F9B252] rounded-full text-white font-bold py-2 px-12 hover:bg-transparent hover:text-black cursor-pointer border border-[#F9B252] transition-all duration-200 ease-linear"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
