import React, { useEffect } from "react";
import Navbar from "./Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
    // Handle URL hash navigation
    useEffect(() => {
        const hash = window.location.hash.substring(1); // Remove #
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, []);

    return (
        <div className="bg-slate-800 min-h-screen">
            <Navbar />
            <About />
            <Contact />
            <Projects />
            <Blog />
        </div>
    );
}

export default App;