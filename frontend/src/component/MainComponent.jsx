import About from "./about/About";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";
import Navbar from "./Navbar/Navbar";
import Project from "./project/Project";
import SkillSection from "./skills/SkillSection";

export default function MainComponent() {
    return (
        <div>
            <Navbar />

            <Hero />
            <About />
            <SkillSection />
            <Project />
            <Contact />

            <footer style={{background:'#222' , color:'white', padding:'10px' , textAlign:'center'}}>
                <p style={{margin:'5px 0'}}>© 2025 Abhay Singh. All rights reserved.</p>
            </footer>
        </div>
    )
}