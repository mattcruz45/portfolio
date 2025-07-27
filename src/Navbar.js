import React from 'react';

export default function Navbar() {
    const scrollToSection = (id) => {
        // Update URL hash
        window.history.pushState(null, null, `#${id}`);
        
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700/50">
            <div className="max-w-6xl mx-auto px-5 py-3">
                <div className="flex justify-center">
                    <ul className="flex space-x-8">
                        <li>
                            <button
                                onClick={() => scrollToSection("about")}
                                className="text-amber-100/80 hover:text-amber-50 transition-colors font-medium"
                            >
                                mattcruz
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="text-amber-100/80 hover:text-amber-50 transition-colors font-medium"
                            >
                                links
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="text-amber-100/80 hover:text-amber-50 transition-colors font-medium"
                            >
                                projects
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection("blog")}
                                className="text-amber-100/80 hover:text-amber-50 transition-colors font-medium"
                            >
                                blog
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}