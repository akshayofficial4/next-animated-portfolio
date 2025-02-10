<<<<<<< HEAD
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
=======
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Book Store App",
    desc: "This is a MERN stack bookstoring app styled with Tailwind CSS. Users can perform CRUD operations on books. Backend is hosted on Render and frontend on Netlify, utilizing React Icons library for icons.",
    img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    link: "https://gleeful-swan-2b4bbb.netlify.app/",
    git: "https://github.com/akshayofficial4/bookstorefront",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "T-shirt Renderer",
    desc: "This is a T-shirt customization website built with Vite and React.js. Users can customize colors, add logos, and utilize an AI feature to generate custom designs based on prompts. Designs can be downloaded upon completion.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://celadon-kataifi-6922a2.netlify.app",
    git: "https://github.com/akshayofficial4/threejs_viteapp",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "TODO App",
    desc: "It is a TODO APP which is build using React js and styled using CSS. It uses react icons library for icons. Here we can create , update , delete Todos.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: " https://beautiful-caramel-175b90.netlify.app",
    git: "https://github.com/akshayofficial4/toDo-app",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: " Weathercaster ",
    desc: "is a weather forecasting app build using React js and styled using Tailwind css. This app shows the current weather of the cities , states etc. For fetching the weather data used an API called open weather APi",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://amazing-strudel-d77dfc.netlify.app",
    git: "https://github.com/akshayofficial4/weathercaster",
  },

  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: " Advice App ",
    desc: "It is a Advice Generating Application which is build using React js and styled using CSS generates diffrent advices and prompts by the help of an API called Advice Slip JSON API",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://silly-raindrop-a3f4c7.netlify.app",
    git: "https://github.com/akshayofficial4/advice-app-react",
  },
  {
    id: 6,
    color: "from-purple-300 to-red-300",
    title: " Personal website",
    desc: "This is my personal portfolio website which i build first using NEXT JS and styled using Tailwind CSS . It is fully responsive  and it has NEXT JS cool features like Lazy loading Images and build in route system.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/akshayofficial4/portfolio",
    git: "https://github.com/akshayofficial4/portfolio",
  },


];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-86%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-5xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-3xl lg:text-5xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-60 h-56 md:w-76 md:h-64 lg:w-[400px] lg:h-[250px] xl:w-[500px] xl:h-[320px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-60 md:w-80 lg:w-[500px] lg:text-lg xl:w-[600px] gap-4 m-auto ">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-center">
                  <Link href={item.link} className="flex justify-end" target="blank">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded border-t-emerald-800" >See Demo</button>
                  </Link>

                  <Link href={item.git} className="flex justify-start" target="blank">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded" >Git</button>
                  </Link>

                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                MERN Stack -&- React js developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
>>>>>>> 5c1ac00d604a6ad8d53398af44fd26c22c74856c
