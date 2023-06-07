import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBlogsData from "../../redux/thunk/fetchBlogs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Home = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogsData());
  }, []);

  return (
    <section className="container px-4 lg:px-24 my-12">
      <div>
        <h2 className="text-3xl font-bold text-center">Trending</h2>
      </div>
      <>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {blogs?.map((blog) => (
            <SwiperSlide key={blog?.id}>
              <div className="card lg:card-side bg-base-100 mt-12 cursor-pointer">
                <figure className="basis-1/2">
                  <img
                    src={blog?.blog_img}
                    alt="Album"
                    className="object-fill"
                  />
                </figure>
                <div className="card-body basis-1/2 p-0">
                  <p className="flex font-bold basis-[40%] mt-4 md:mt-0">
                    Business, Travel -{" "}
                    <span className="font-normal text-[#ADADAD]">
                      {blog?.publish_date}
                    </span>
                  </p>
                  <h2 className="card-title text-3xl font-bold my-3">
                    {blog?.blog_title}
                  </h2>
                  <p className="text-[#ADADAD] text-sm">
                    {blog?.desc.slice(0, 450) + "..."}
                  </p>
                  <div className="flex gap-3 items-center">
                    <div>
                      <img
                        src={blog?.author_img}
                        className="rounded-full h-12 w-12  object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-md">{blog?.author_name}</h3>
                      <p className="text-[#ADADAD] text-sm">
                        Author Designation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
};

export default Home;
