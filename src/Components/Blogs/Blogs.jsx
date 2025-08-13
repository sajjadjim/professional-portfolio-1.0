// src/pages/Blogs.jsx
import React, { useMemo } from "react";
import { Link } from "react-router";
import { Calendar, User, ArrowRight } from "lucide-react";

const featuredPosts = [
  {
    id: "nextjs-image-optim",
    title: "Saint Martin's Tour",
    year: 2016,
    excerpt:
      "Saint Martin's Tour , it was a amazing time in my life all time.",
    cover:
      "https://github.com/sajjadjim/sajjadjim/blob/main/images/blogs/image1.jpeg?raw=true",
  },
  {
    id: "mern-auth",
    title: "MERN Authentication Flows",
    year: 2025,
    excerpt:
      "A secure, scalable approach to authentication flows in production apps.",
    cover:
      "https://i.ytimg.com/vi/NR2MJk9C1Js/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwkYXiZidYj2T8-_ufxETBnudChA",
  },
  {
    id: "tailwind-design",
    title: "Designing Faster with Tailwind: Real Patterns",
    year: 2024,
    excerpt:
      "Utility-first workflows, component recipes, and consistent design tokens.",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEhHMa7DFofPlIcwk0cAFgwWjwPvByNXM2A&s",
  },
  {
    id: "api-caching",
    title: "API Caching Strategies for React & Node",
    year: 2024,
    excerpt:
      "From HTTP cache headers to Redis and stale-while-revalidate in the wild.",
    cover:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240530130806/Role-of-Artificial-Intelligence(AI)-in-System-Design.webp",
  },
];

const dailyPosts = [
  {
    id: "hooks-mental-model",
    title: "A Mental Model for React Hooks",
    date: "2025-08-01",
    cover:
      "https://i.ytimg.com/vi/lp8xXoG0xQY/maxresdefault.jpg",
    excerpt:
      "Think in effects, subscriptions, and snapshots to avoid common pitfalls.",
    tags: ["React", "Hooks"],
  },
  {
    id: "mongodb-schema",
    title: "MongoDB Schema Design for Speed",
    date: "2025-07-22",
    cover:
      "https://images.contentstack.io/v3/assets/blt39790b633ee0d5a7/blt7658e9520251eae4/647a2d426fa1c730d43cdf2f/twitter-schema-design-best-practices.png",
    excerpt:
      "Tradeoffs between embedding vs referencing and when to denormalize.",
    tags: ["MongoDB", "Database"],
  },
  {
    id: "framer-motion",
    title: "Docker",
    date: "2025-07-10",
    cover:
      "https://images.shiksha.com/mediadata/images/articles/1700649967php8v6tWG.jpeg",
    excerpt:
      `Docker is an open-source platform that allows developers to build, package, and run applications in lightweight, portable containers.
It simplifies software delivery by ensuring that your app runs the same way in development, testing, and production—regardless of the environment.

It was first released in 2013 by Solomon Hykes and has since become a key tool in DevOps and cloud computing.`,
    tags: ["Animation", "UI/UX"],
  },
  {
    id: "testing-react",
    title: "Next.js",
    date: "2025-06-27",
    cover:
      "https://img-c.udemycdn.com/course/750x422/3873464_403c_3.jpg",
    excerpt:
      `Next.js is an open-source React framework for building fast, user-friendly, and SEO-friendly web applications.
It was created by Vercel and adds features on top of React such as server-side rendering (SSR), static site generation (SSG), and API routes, making it a complete full-stack framework.`,
    tags: ["Testing", "React"],
  },
  {
    id: "node-queues",
    title: "Node.js",
    date: "2025-06-13",
    cover:
      "https://i0.wp.com/andrewbeeken.co.uk/wp-content/uploads/2018/11/nodejs.jpg?fit=1200%2C675&ssl=1",
    excerpt:
      `Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It uses the V8 JavaScript engine (developed by Google for Chrome) to execute code efficiently.
Originally created by Ryan Dahl in 2009, Node.js was designed to build scalable, high-performance network applications, especially those requiring real-time communication.`,
    tags: ["Node.js", "Queues"],
  },
];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

export default function Blogs() {
  const randomIndex = useMemo(
    () => Math.floor(Math.random() * dailyPosts.length),
    []
  );
  const randomPost = dailyPosts[randomIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900  to-blue-900/40  text-white">
      {/* Header */}
      <header className="container mx-auto px-4 md:px-6 pt-24 pb-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-teal-700 via-violet-500 to-blue-500 bg-clip-text text-transparent">
              Blogs.
            </span>{" "}
            — thoughts, guides, and dev notes
          </h1>
          <p className="mt-4 text-gray-300">
            Long-form case studies up top, daily posts below. All written by{" "}
            <span className="font-semibold text-white">JIM</span> — a web
            developer who loves sharing what he learns.
          </p>
        </div>
      </header>

      {/* Featured (Large screen 4 pictures with description & year) */}
      <section className="container mx-auto px-4 md:px-6 pb-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPosts.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Year badge */}
                <div className="absolute top-3 left-3">
                  <span className="rounded-lg bg-white/10 px-2 py-1 text-xs font-semibold backdrop-blur">
                    {p.year}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2">{p.excerpt}</p>
                <div className="pt-2">
                  <Link
                    // to={`/blog/${p.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-teal-700 via-blue-500 to-violet-500 bg-clip-text text-transparent hover:opacity-90"
                  >
                    Read more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Daily blogs + Sidebar (About + Random blog) */}
      <section className="container mx-auto px-4 md:px-6 pb-24">
        <div className="grid lg:grid-cols-[1fr,340px] gap-8">
          {/* Daily posts list */}
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
               Posts.
            </h2>
            {dailyPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl border border-white/10 bg-gray-900/40 overflow-hidden hover:border-blue-900/50 transition"
              >
                <Link 
                // to={`/blog/${post.id}`} 
                className="flex flex-col sm:flex-row">
                  <div className="sm:w-56 sm:flex-shrink-0">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="h-44 w-full sm:h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-300">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <User size={14} /> JIM
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs rounded-lg px-2 py-1 bg-white/5 border border-white/10"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* About author */}
            <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-5">
              <h3 className="text-xl font-bold">About the Author</h3>
              <p className="mt-2 text-gray-300 text-sm">
                I’m <span className="font-semibold text-white">JIM</span> — a web
                developer and writer. I build with React, Node, and Tailwind, and
                I share what I learn through practical write-ups and daily notes.
              </p>
              <Link
                to="/about"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-teal-400 via-teal-500 to-green-500 bg-clip-text text-transparent"
              >
                More about me <ArrowRight size={16} />
              </Link>
            </div>

            {/* Random blog spotlight */}
            <div className="rounded-2xl border border-white/10 bg-gray-900/40 overflow-hidden">
              <div className="relative aspect-[16/9]">
                <img
                  src={randomPost.cover}
                  alt={randomPost.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs text-white/80">
                    Random pick for you
                  </span>
                  <h4 className="text-lg font-semibold leading-snug">
                    {randomPost.title}
                  </h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-300 line-clamp-3">
                  {randomPost.excerpt}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-gray-300">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDate(randomPost.date)}
                  </span>
                  <Link
                    to={`/blog/${randomPost.id}`}
                    className="inline-flex items-center gap-1 font-semibold bg-gradient-to-r from-teal-400 via-teal-500 to-green-500 bg-clip-text text-transparent"
                  >
                    Read <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
