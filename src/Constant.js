import Html from './Assets/Html.png';
import CSS from './Assets/css.png'
import JavaScript from './Assets/javascript.png'
import next from './Assets/nextjs.png'
import react from './Assets/reactjs.png'
import redux from './Assets/redux.png'
import bootstrap from './Assets/bootstrap.png'
import tailwind from './Assets/tailwindcss.png'
import nodejs from './Assets/nodejs.png'
import express from './Assets/express.png'
import mongodb from './Assets/mongodb.png'
import mysql from './Assets/mysql.png'
import postgre from './Assets/postgre.png'
import typescript from './Assets/typescript.png'
import c  from './Assets/c.png'
import cpp from './Assets/cpp.png'
import python from './Assets/python.png'
import vercel from './Assets/vercel.png'
import vscode from './Assets/vscode.png'
import postman from './Assets/postman.png'
import git from './Assets/git.png'
import Uber from './Assets/Uber.png'
import Convertor from './Assets/Convertor.png'
import Wheather from './Assets/Wheather.png'
import Chatbot from './Assets/Chatbot.png'
import github from './Assets/github.png'
import Doctor from './Assets/Doctor.png'
import Nike from './Assets/Nike.png'
import TMU from './Assets/TMU.jpeg'
import School from './Assets/School.png'


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: 
    [
      { name: 'HTML', logo: Html },
      {
          name:'CSS',logo:CSS
      },
      {
        name:'Javascript',logo:JavaScript
      },
      {
        name:'Next.js',logo:next
      },
      {
        name:"react.js",logo:react
      },
      {
        name:"redux",logo:redux
      },
      {
        name:"bootstrap",logo:bootstrap
      },
      {
        name:"tailwind css",logo:tailwind
      }
    ]
  },
{

  title:"Backend",
  skills:[
    {
      name:'Node.js',logo:nodejs
    },{
        name:'Express.js',logo:express
    },{
      name:'MongoDB',logo:mongodb
    },{
      name:'MySQL',logo:mysql
    },
    {
      name:'PostgreSQL',logo:postgre
    }
  ]

},
{
    title:"Languages",
    skills:[
      {
        name:"C++",logo:cpp
      },{
        name:'C',logo:c
      },{
        name:'JavaScript',logo:JavaScript
      },{
        name:'TypeScript',logo:typescript
      },{
        name:'Python',logo:python
      }
    ]

},
{
  title:'Tools',
  skills:[
    {
      name:'git',logo:git
    },{
      name:'github',logo:github
    },{
      name:'postman',logo:postman
    },{
      name:'vercel',logo:vercel
    },{
      name:'vscode',logo:vscode
    }
  ]
}
  
];

export const education=[
  {

     id: 0,
      img: TMU,
      school: "Teerthanker Mahaveer University",
      date: "Sept 2022 - July 2026",
      grade: "7.74CGPA",
      desc:"I am a 4rd-year B.Tech Computer Science student at Teerthanker Mahaveer University with strong skills in full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js). I have built multiple real-world projects such as e-commerce websites, a ride-booking app, weather and currency converter apps, and an AI-powered chatbot interface. I have a solid understanding of Data Structures and Algorithms, Object-Oriented Programming (OOPs), and core CS subjects like Operating Systems, DBMS, Computer Networks, and Software Engineering, which help me write efficient and scalable code. My frontend expertise includes Tailwind CSS, Redux Toolkit, and responsive design, and I am currently exploring advanced domains like AI agents (LangGraph + FastAPI), DevOps, and Data Analytics to stay aligned with industry trends and future career opportunities.",
      degree: "Bachelor of Technology - B.Tech(CSE)",
  },
  {

    id: 2,
      img: School,
      school: "St.Mary's School Kashipur ",
      date: "Apr 2021 - March 2022",
      grade: "80%",
      desc: "I completed my class 12 education from St.Mary's School Kashipur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - Science",
  },{

    img: School,
      school: "St.Mary's School Kashipur ",
      date: "Apr 2019 - March 2020",
      grade: "84%",
      desc: "I completed my class 10 education from St.Mary's School Kashipur, under the CBSE board.",
      degree: "CBSE(X)",
  }
]
 export const projects = [
    {
      id: 0,
      title: " Uber- MERN Stack Mobile Web Application",
      description:
        "In this app, users can sign up, log in, and book rides, while drivers (called captains) can accept ride requests. I added secure login using JWT and built backend APIs to handle all the main features like booking a ride, assigning drivers, and updating ride status. The frontend is made with React and styled using Tailwind CSS to make it look good on all devices",
      image: Uber,
      tags: ["HTML", "CSS", "JavaScript", "React JS","API" ,"Express JS","MongoDb","Node JS","Socket.IO"],
      github: "https://github.com/Nishantt02/FullStack-Uber",
      webapp: "https://fullstack-uber-4.onrender.com/",
    },


    {
      id: 0,
      title: "AI Chatbot Application",
      description:
      "I developed an AI chatbot web application that allows users to have real-time conversations with an intelligent assistant. The chatbot supports natural language input and provides meaningful responses using a powerful language model.",
      image: Chatbot,
      tags: ["HTML", "CSS", "JavaScript", "React JS"," Gemini API" ,"Express JS", " Tailwind CSS","MongoDb","Node JS",],
      github: "https://github.com/Nishantt02/Chatbot",
      webapp: "https://frontend-2-ofef.onrender.com/",
    },

     {
      id: 0,
      title: "Currency Convertor",
      description:
      "The Currency Converter is a simple and easy-to-use web app made with React and Tailwind CSS. It lets users convert one currency into another using the latest exchange rates. The app is fast, works on all devices, and has a clean, user-friendly design",
      image:Convertor,
      tags: ["HTML", "CSS", "JavaScript", "React JS","Tailwind CSS",],
      github: "https://github.com/Nishantt02/CurrencyConvertor",
      webapp: "https://currency-convertor-xnfd.vercel.app/",
    },
    {
      id:0,
      title:"Wheather App",
      description:" It shows the current temperature, wind speed, and humidity of any city using real-time data from a weather API.",
      image:Wheather,
      tags:["HTML","CSS","JavaScript",],
      github:"https://github.com/Nishantt02/Wheather-application",
      webapp:"https://github.com/Nishantt02/Wheather-application"
    },{
      id:0,
      title:"doctor_app",
      description:'Doctor Care App is a responsive and user-friendly web interface designed for booking doctor appointments. Built using modern web technologies',
      image:Doctor,
      tags:["Next JS","TypeScript","CSS","JavaScript"],
      github:"https://github.com/Nishantt02/ellie-clone",
      webapp:"https://ellie-clone.vercel.app/"
    },{
      id:0,
      title:"E commerce",
      description:"Shoes E-commerce Website is a stylish and responsive front-end design created with HTML and CSS. It features a clean layout to showcase various shoe products, including product images, prices, and categories.",
      image:Nike,
      tags:["HTML","CSS"],
      github:"https://github.com/Nishantt02/E-Commerce-website",
      webapp:"https://github.com/Nishantt02/E-Commerce-website"
      
    },
 ]