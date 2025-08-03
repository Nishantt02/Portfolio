import React from "react";
import Navbar from "./Components/Navbar";
import BlurBlob from "./Blurbob.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Work from "./Components/Work.jsx"
import Education from "./Components/Education.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
const App = () => {
  return (
    <div className="bg-[#050414]">

       <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        
        <Navbar/>


 <section id="about"><About /></section>
<section id="skills"><Skills /></section>
<section id="project"><Work /></section>
<section id="education"><Education /></section>
<section id="contact"><Contact /></section>
<section id="Footer"><Footer /></section>



      </div>

    </div>
  );
};

export default App;