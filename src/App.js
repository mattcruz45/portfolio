import React, { useEffect } from "react";
import Navbar from "./Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Links from "./pages/Contact";
import Resume from "./pages/Resume";
import Technologies from "./pages/Technologies";

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
            <Links />
            <Projects />
            <Technologies />
            {/* <Blog /> */}
            <Resume />
        </div>
    );
}

export default App;