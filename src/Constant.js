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

import Chatbot from './Assets/Chatbot.png'
import github from './Assets/github.png'


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
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

},{
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
      tags: ["HTML", "CSS", "JavaScript", "React JS"," Gemini API" ,"Express JS","MongoDb","Node JS",],
      github: "https://github.com/Nishantt02/Chatbot",
      webapp: "https://frontend-2-ofef.onrender.com/",
    },
 ]