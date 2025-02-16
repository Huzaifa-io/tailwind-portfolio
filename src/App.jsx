import React, { useState } from "react";
import "./App.css";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen transition-colors duration-1000`}
    >
      {/* 🏠 Navbar */}
      <nav
        className={`${
          darkMode ? "bg-gray-900" : "bg-gray-200"
        } fixed top-0 left-0 w-full flex justify-between items-center py-4 px-10 shadow-md backdrop-blur-md z-50`}
      >
        <h1 className="text-2xl font-bold">Muhammad Huzaifa</h1>
        
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 transition"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      {/* 🚀 Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-500">Muhammad Huzaifa</span> 🚀
        </h1>
        <p className="text-xl max-w-xl">
          A passionate Frontend Developer who specializes in modern web
          technologies.
        </p>
        <button className="mt-6 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          Hire Me 💼
        </button>
      </section>

      {/* 🔥 About Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqf0Wx4wmsKfLYsiLdBx6H4D8bwQBurWhx5g&s"
          alt="Profile"
          className="w-40 h-40 rounded-full shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-3 max-w-lg">
            I specialize in modern frontend technologies, focusing on creating
            responsive and user-friendly applications.
          </p>
        </div>
      </section>

      {/* 🛠️ Projects Section */}
      <section className="px-10 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div
              key={project}
              className={`p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ${
                darkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <h3 className="text-2xl font-semibold">Project {project}</h3>
              <p className="mt-2">A short description of this project.</p>
              <button className="mt-4 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-400 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ⚡ Skills Section */}
      <section className="px-10 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Skills & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {[
            "HTML",
            "CSS",
            "Javascript",
            "React.js",
            "Vite",
            "Vercel",
            "Firebase",
            "GitHub",
            "Netlify",
            "Docker",
            "Material UI",
            "Tailwind",
            "Ant Design",
            "Bootstrap",
            "Stripe",
            "Cloudinary",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Postman",
          ].map((skill) => (
            <div
              key={skill}
              className={`px-6 py-3 rounded-full font-semibold shadow-md transition ${
                darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 Testimonials Section */}
      <section className="px-10 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4].map((testimony) => (
            <div
              key={testimony}
              className={`p-6 rounded-lg shadow-md ${
                darkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold">Client {testimony}</h3>
              <p className="mt-2">
                "Amazing work! Highly recommended for frontend development."
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 📩 Contact Section */}
      <section className="px-10 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={`w-full p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
          />
          <textarea
            placeholder="Your Message"
            className={`w-full p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
          ></textarea>
          <button className="w-full bg-blue-700 px-6 py-3 text-white rounded text-lg font-semibold hover:bg-blue-600 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* 🔚 Footer */}
      <footer
        className={`py-6 text-center ${
          darkMode ? "bg-gray-900 text-gray-400" : "bg-gray-200 text-gray-600"
        }`}
      >
        &copy; 2025 Muhammad Huzaifa. All rights reserved.
      </footer>
    </div>
  );
}
