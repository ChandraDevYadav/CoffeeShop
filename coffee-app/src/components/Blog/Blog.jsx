import React from "react";

const blogPosts = [
  {
    id: 1,
    image: "./inner_b1.jpg",
    title: "Cras accumsan nulla nec lacus ultricies placerat.",
    description:
      "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
    date: "July 20, 2024",
  },
  {
    id: 2,
    image: "./inner_b2.jpg",
    title: "Dras accumsan nulla nec lacus ultricies placerat.",
    description:
      "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
    date: "July 15, 2024",
  },
  {
    id: 3,
    image: "./inner_b3.jpg",
    title: "Seas accumsan nulla nec lacus ultricies placerat.",
    description:
      "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
    date: "July 5, 2024",
  },
  // Add more blog posts here
];

const Blog = () => {
  return (
    <div className="mb-24">
      <div className="px-6 md:px-12 mx-4 md:mx-16">
        <div className="flex justify-center items-center gap-3">
          <img src="./cb.png" alt="" className="w-6 h-6" />
          <p className="text-[18px] md:text-[22px] font-semibold text-[#3f271e] font-caudex">
            OUR BLOG
          </p>
        </div>
        <div className="text-center mb-16">
          <p className="text-[32px] md:text-[40px] lg:text-[60px] text-[#3f271e] font-caudex font-bold my-2">
            Latest Blog & News
          </p>
          <p className="text-gray-500 px-4 font-caudex font-medium">
            Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin
            dolor eget neque viverra, sed interdum metus <br /> interdum. Cras
            lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel
          </p>
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[12rem] md:h-[18rem] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className="relative">
                <p className="text-sm text-white font-semibold px-10 py-2 mx-6 absolute -bottom-5 bg-[#3f271e]">
                  {post.date}
                </p>
              </div>
              <div className="p-4 md:p-6">
                <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold font-caudex mt-4 mb-2 leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 font-caudex mb-4 mt-3">
                  {post.description}
                </p>
                <button className="border-b-[2px] md:border-b-[3px] font-semibold border-b-[#3f271e] text-[#3f271e]">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <img
          src="./an-img-01.png"
          alt=""
          className="absolute animate-bounce bottom-[10rem] right-1 w-32 md:w-48"
        />
      </div>
    </div>
  );
};

export default Blog;
