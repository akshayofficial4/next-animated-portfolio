"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const PortfolioPage = () => {
  const projects = [
   
    {
      id: 1,
      title: "BOOK-STORE APP",
      desc: "This is a MERN stack bookstoring app styled with Tailwind CSS. Users can perform CRUD operations on books. Backend is hosted on Render and frontend on Netlify, utilizing React Icons library for icons.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      demoLink: "https://gleeful-swan-2b4bbb.netlify.app/",
      githubLink: "https://github.com/akshayofficial4/bookstorefront",
      tags: ["React", "Node.js", "Express js", "MongoDB", "TailwindCSS"]
    },
  
    {
      id: 2,
      title: "NOTES APP",
      desc: "Its a fullstack Notes App which users can create, update and delete notes which build using MERN Stack and styled using TailwindCSS. Frontend is hosted in VERCEL and backend in RENDER. Used axios to fetch datas from backend",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      demoLink: "https://notes-app-ebon-three.vercel.app/",
      githubLink: "https://github.com/akshayofficial4/NotesApp",
      tags: ["React", "Node.js", "Express js", "MongoDB", "TailwindCSS"]
    },
    {
      id: 3,
      title: "TODO APP ",
      desc: "Its a fullstack TODO APP which users can create, update and delete todos which build using MERN Stack and styled using TailwindCSS. Frontend is hosted in VERCEL and backend in RENDER. As a database used MONGODB",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      demoLink: "https://todo-app-mern-seven.vercel.app/",
      githubLink: "https://github.com/akshayofficial4/todo-app-mern",
      tags: ["React", "Node.js", "Express js", "MongoDB", "TailwindCSS"]
    },

    {
      id: 4,
      title: "STOCK DASHBOARD",
      desc: "Developed a fully responsive stock dashboard for real-time stock data visualization using Reactjs and styled using TailwindCSS, Implemented search functionality and integrated Finhub REST API for fetching stock details.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      demoLink: "https://stock-dashboard-mauve.vercel.app/",
      githubLink: "https://github.com/akshayofficial4/stock-dashboard",
      tags: ["React", "TailwindCSS", "Recharts", "Finhub REST API"]
    },

    {
      id: 5,
      title: "T-SHIRT RENDERER",
      desc: "This is a T-shirt customization website built with Vite and React.js. Users can customize colors, add logos, and utilize an AI feature to generate custom designs based on prompts. Designs can be downloaded upon completion.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      demoLink: "https://celadon-kataifi-6922a2.netlify.app",
      githubLink: "https://github.com/akshayofficial4/threejs_viteapp",
      tags: ["React", "TailwindCSS", "Threejs", "Framer Motion"]
    },

    {
      id: 6,
      title: "PERSONAL PORTFOLIO",
      desc: "Its my personal portfolio website build using Nextjs and styled using tailwindCSS. Its a fully responsive website which has some exciting animations by Framer motion and integrated a mail functionality using Email js",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      demoLink: "https://akshaysunil-portfolio.vercel.app/",
      githubLink: "https://github.com/akshayofficial4/next-animated-portfolio",
      tags: ["React", "TailwindCSS", "Emailjs", "Framer Motion"]
    },
  
    {
      id: 7,
      title: " Weathercaster ",
      desc: "is a weather forecasting app build using React js and styled using Tailwind css. This app shows the current weather of the cities , states etc. For fetching the weather data used an API called open weather APi",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      demoLink: "https://amazing-strudel-d77dfc.netlify.app",
      githubLink: "https://github.com/akshayofficial4/weathercaster",
      tags: ["React", "TailwindCSS", "OpenWeather API"]
    },
    {
      id: 8,
      title: "ADVICE APP",
      desc: "Its a advice generating application build using React js and styled using CSS. This app shows advices and quotes and these datas on every click on button and  are fetched from a third party API called Advice Slip JSON API.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      demoLink: "https://tic-tac-toejs.netlify.app/",
      githubLink: "https://github.com/akshayofficial4/advice-app-react",
      tags: ["React", "CSS", "Advice Slip JSON API"]
    },

    {
      id: 9,
      title: "TIC-TAC-TOE GAME",
      desc: "Its a small TIC-TAC-TOE game that i build using HTML, CSS, and javascript. Users can play the game in their browser and it is fully mobile responsive these game is hosted in netlify website. its just a basic small game.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      demoLink: "https://silly-raindrop-a3f4c7.netlify.app/",
      githubLink: "https://github.com/akshayofficial4/advice-app-react",
      tags: ["HTML", "CSS", "Javascript", "Netlify"]
    },
  
  
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-red-200 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            bounce: 0.4,
            duration: 0.8 
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">My Works</h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-blue-400 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {/* Mobile layout (image on top) */}
              <div className="block sm:hidden">
                <div className="h-40 w-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a href={project.demoLink} className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                    <a href={project.githubLink} className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Tablet and Desktop layout (image on left) */}
              <div className="hidden sm:flex">
                <div className="w-1/3">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <a href={project.demoLink} className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                    <a href={project.githubLink} className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm p-6 rounded-xl inline-block border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Do you have a project?</h3>
            <p className="text-gray-600 mb-4">MERN Stack & React.js Developer</p>
            <button className="flex items-center gap-2 mx-auto bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg transition-colors">
              <span>Hire Me</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
