import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Technologies() {
    const [expandedSections, setExpandedSections] = useState({
        languages: false,
        frontend: false,
        backend: false,
        tools: false
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const technologies = {
        languages: [
            { name: "JavaScript", logo: `${process.env.PUBLIC_URL}/tech-pngs/js.png` },
            { name: "TypeScript", logo: `${process.env.PUBLIC_URL}/tech-pngs/ts.png` },
            { name: "Python", logo: `${process.env.PUBLIC_URL}/tech-pngs/py.png` },
            { name: "Java", logo: `${process.env.PUBLIC_URL}/tech-pngs/java.png` },
            { name: "Kotlin", logo: `${process.env.PUBLIC_URL}/tech-pngs/kotlin.png` },
            { name: "C", logo: `${process.env.PUBLIC_URL}/tech-pngs/c.png`  },
            { name: "C++", logo: `${process.env.PUBLIC_URL}/tech-pngs/cpp.png`  },
            { name: "Swift", logo: `${process.env.PUBLIC_URL}/tech-pngs/swift.png`  },
            { name: "Assembly", logo: `${process.env.PUBLIC_URL}/tech-pngs/0x.png`  },
            { name: "Bash", logo: `${process.env.PUBLIC_URL}/tech-pngs/bash.png`  },
            { name: "SQL", logo: `${process.env.PUBLIC_URL}/tech-pngs/sql.png`  },
        ],
        frontend: [
            { name: "React", logo: `${process.env.PUBLIC_URL}/tech-pngs/react.png` },
            { name: "CSS", logo: `${process.env.PUBLIC_URL}/tech-pngs/css.png` },
            { name: "Tailwind CSS", logo: `${process.env.PUBLIC_URL}/tech-pngs/tailwind.png` },
            { name: "Swift UI", logo: `${process.env.PUBLIC_URL}/tech-pngs/swiftui.png` },
            { name: "Angular", logo: `${process.env.PUBLIC_URL}/tech-pngs/angular.png` }
        ],
        backend: [
            { name: "Spring", logo: `${process.env.PUBLIC_URL}/tech-pngs/spring.png` },
            { name: "AWS", logo: `${process.env.PUBLIC_URL}/tech-pngs/aws.png` },
            { name: "Firebase", logo: `${process.env.PUBLIC_URL}/tech-pngs/firebase.png` },
            { name: "RESTful API", logo: `${process.env.PUBLIC_URL}/tech-pngs/rest.png` },
            { name: "GraqhQL", logo: `${process.env.PUBLIC_URL}/tech-pngs/graphql.png` },
            { name: "PostgreSQL", logo: `${process.env.PUBLIC_URL}/tech-pngs/postgre.png` },
            { name: "MySQL", logo: `${process.env.PUBLIC_URL}/tech-pngs/mysql.png` },
            { name: "Node.js", logo: `${process.env.PUBLIC_URL}/tech-pngs/node.png` },
        ],
        tools: [
            { name: "LaTeX", logo: `${process.env.PUBLIC_URL}/tech-pngs/latex.png` },
            { name: "Docker", logo: `${process.env.PUBLIC_URL}/tech-pngs/docker.png` },
            { name: "Figma", logo: `${process.env.PUBLIC_URL}/tech-pngs/figma.png` },
            { name: "HTML", logo: `${process.env.PUBLIC_URL}/tech-pngs/html.png` },
            { name: "Git", logo: `${process.env.PUBLIC_URL}/tech-pngs/git.png` },
            { name: "Postman", logo: `${process.env.PUBLIC_URL}/tech-pngs/postman.png` },
        ]
    };

    const TechnologyGrid = ({ techs }) => (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {techs.map((tech, index) => (
                <div
                    key={index}
                    className="group relative flex flex-col items-center p-4 bg-slate-600/30 backdrop-blur-sm rounded-xl border border-slate-500/20 hover:border-slate-400/50 hover:bg-slate-500/40 transition-all duration-300 cursor-pointer"
                    title={tech.name}
                >
                    {/* PNG logo */}
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        <img 
                            src={tech.logo} 
                            alt={tech.name} 
                            className="w-full h-full object-contain"
                        />
                    </div>


                    
                    {/* Tooltip on hover */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-amber-100 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                        {tech.name}
                    </div>
                </div>
            ))}
        </div>
    );

    const sections = [
        { key: 'languages', title: 'languages' },
        { key: 'frontend', title: 'frontend' },
        { key: 'backend', title: 'backend' },
        { key: 'tools', title: 'tools' }
    ];

    return (
        <section id="technologies" className="py-5 px-5 pt-16 max-w-4xl mx-auto bg-slate-800">
            <div className="text-center mb-5">
                <p className="text-2xl font-bold text-amber-100/80 max-w-2xl mx-auto leading-relaxed drop-shadow-sm hover:text-amber-200 hover:scale-125 transition-all duration-500 cursor-pointer">
                    technologies
                </p>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
                {sections.map((section) => (
                    <div key={section.key} className="bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-500 shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection(section.key)}
                            className="w-full flex items-center justify-between p-6 hover:bg-slate-600/50 transition-all duration-300"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-slate-600/40 backdrop-blur-sm rounded-xl border border-slate-500/20">
                                    {expandedSections[section.key] ? (
                                        <ChevronDown className="w-6 h-6 text-amber-100 drop-shadow-sm transition-transform duration-300" />
                                    ) : (
                                        <ChevronRight className="w-6 h-6 text-amber-100 drop-shadow-sm transition-transform duration-300" />
                                    )}
                                </div>
                                <div>
                                    <p className="text-amber-50 font-medium text-lg drop-shadow-sm text-left">
                                        {section.title}
                                    </p>
                                    <p className="text-sm text-amber-100/70">
                                        {expandedSections[section.key] ? 'click to collapse' : 'click to expand'}
                                    </p>
                                </div>
                            </div>
                        </button>
                        
                        {expandedSections[section.key] && (
                            <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                                <TechnologyGrid techs={technologies[section.key]} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}