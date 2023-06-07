import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBlogsData from "../../redux/thunk/fetchBlogs";

const Blogs = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogsData());
  }, []);

  return (
    <section className="container px-4 lg:px-32 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3">
        {blogs?.map((blog) => (
          <div className="card bg-base-100 rounded-lg mt-12 cursor-pointer ">
            <figure>
              <img
                src={blog?.blog_img}
                alt="blogs"
                className="object-cover rounded"
              />
            </figure>
            <div className="card-body px-0">
              <p className="flex font-semibold text-sm">
                Business, Travel -{" "}
                <span className="font-normal text-[#ADADAD]">
                  {blog?.publish_date}
                </span>
              </p>
              <h2 className="card-title font-bold">{blog?.blog_title}</h2>
              <p className="text-[#ADADAD] text-sm">
                {blog?.desc.slice(0, 100) + "..."}
              </p>
              <div className="flex gap-3 items-center mt-3">
                <div>
                  <img
                    src={blog?.author_img}
                    className="rounded-full h-12 w-12 object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-md">{blog?.author_name}</h3>
                  <p className="text-[#ADADAD] text-sm">Author Designation</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
