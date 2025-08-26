import React, { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const scrollToSection = (id) => {
        // Close mobile menu when navigating
        setIsMenuOpen(false);
        
        // Update URL hash
        window.history.pushState(null, null, `#${id}`);
        
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { id: 'about', label: 'about' },
        { id: 'links', label: 'links' },
        { id: 'projects', label: 'projects' },
        { id: 'technologies', label: 'technologies' },
        { id: 'resume', label: 'resume' }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700/50">
            <div className="max-w-6xl mx-auto px-4 py-3">
                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-center">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-amber-100/80 hover:text-amber-50 transition-colors font-medium"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    {/* Mobile menu button */}
                    <div className="flex justify-between items-center">
                        <div className="text-amber-50 font-semibold">menu</div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-amber-100/80 hover:text-amber-50 focus:outline-none"
                        >
                            <svg
                                className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile menu dropdown */}
                    {isMenuOpen && (
                        <div className="mt-3 pb-3 border-t border-slate-700/50">
                            <ul className="space-y-2 mt-3">
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            className="block w-full text-left px-2 py-2 text-amber-100/80 hover:text-amber-50 hover:bg-slate-700/50 rounded transition-all font-medium"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}