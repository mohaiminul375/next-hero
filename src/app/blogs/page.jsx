import Link from "next/link";
import React from "react";

export default function page() {
  const blogs = [
    {
      slug: "understanding-react-lifecycle",
      title: "Understanding React Lifecycle Methods",
      description:
        "A deep dive into React's lifecycle methods and how they affect component rendering and state management.",
    },
    {
      slug: "modern-web-development-tools",
      title: "Top 10 Modern Web Development Tools in 2024",
      description:
        "Explore the most popular and powerful tools for web development in 2024, focusing on efficiency and scalability.",
    },
    {
      slug: "introduction-to-nextjs",
      title: "Introduction to Next.js: A Beginner's Guide",
      description:
        "Learn the basics of Next.js and how it can help you build server-side rendered React applications.",
    },
    {
      slug: "optimize-your-mongodb-queries",
      title: "Optimize Your MongoDB Queries for Better Performance",
      description:
        "Techniques and best practices to improve the performance of your MongoDB queries.",
    },
    {
      slug: "frontend-trends-2024",
      title: "Frontend Trends in 2024: What's New and What's Next",
      description:
        "Discover the latest frontend development trends that are shaping the industry in 2024, including new frameworks and design patterns.",
    },
  ];

  return (
    <div className="p-24">
      {blogs.map((blog) => (
        <div key={blog.slug} className="border-2 p-12">
            <h3>{blog.title}</h3>
            <h3>{blog.description}</h3>
            <Link className="bg-red-400 p-3" href={`/blogs/${blog.slug}`}>View details</Link>
        </div>
      ))}
    </div>
  );
}
