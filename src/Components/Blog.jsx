import React from 'react';

const Blog = () => {

     const blogs = [
    {
      id: 1,
      title: "Top 10 FPS Games in 2025",
      summary:
        "Explore the top 10 FPS games you should play this year. Tips, reviews, and gameplay insights included.",
      image: "https://i.ibb.co/ZRzgvRGn/call-of-duty.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "How to Level Up Fast in PUBG Mobile",
      summary:
        "Tips and tricks to improve your rank in PUBG Mobile quickly. Learn the secrets of pro players.",
      image: "https://i.ibb.co/Y4mG5PpL/pubg.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Adventure Games Worth Your Time",
      summary:
        "Discover amazing adventure games that you will love playing. Action, puzzles, and open world.",
      image: "https://i.ibb.co/0jbGfW4Q/genshin-impact.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Strategy Games You Must Try",
      summary:
        "A list of strategy games that will challenge your mind and planning skills. Build your empire!",
      image: "https://i.ibb.co/v4dkmdY4/Clash-Royale.jpg",
      link: "#",
    },
  ];


    return (
       <section className=" px-4 py-16 bg-base-200 rounded-lg">
      <h2 className="text-3xl font-bold mb-10 text-center">📝 Latest Blogs</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className=" rounded-lg shadow-lg hover:shadow-2xl transition p-4 flex flex-col bg-white"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{blog.summary}</p>
         
          </div>
        ))}
      </div>
    </section>
    );
};

export default Blog;