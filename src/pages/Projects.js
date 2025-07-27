import React from "react";
import { Globe, Github, Gamepad2, ExternalLink } from "lucide-react";

export default function Projects() {
    const projects = [
        { 
            icon: Globe, 
            title: "all abroad", 
            description: "the community messaging app for students studying abroad",
            link: "https://github.com/mattcruz45/liveboard",
            //demo: "#projects"
        },
        { 
            icon: Gamepad2, 
            title: "collisions", 
            description: "a game",
            link: "https://github.com/mattcruz45/collisions",
            demo: "https://mattcruz45.github.io/collisions/"
        }//,
        // { 
        //     icon: Globe, 
        //     title: "Project Three", 
        //     description: "Description of your third project goes here",
        //     link: "https://github.com/mattcruz45",
        //     demo: "#"
        // }
    ];

    return (
        <section id="projects" className="py-5 px-5 pt-16 max-w-4xl mx-auto bg-slate-800">
            <div className="text-center mb-5">
                <p className="text-2xl font-bold text-amber-100/80 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                    projects
                </p>
            </div>

            <div className="grid gap-6 max-w-2xl mx-auto">
                {projects.map((project, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600/30 hover:border-slate-500/50 hover:bg-slate-600/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-slate-600/40 backdrop-blur-sm rounded-xl border border-slate-500/20">
                                <project.icon className="w-6 h-6 text-amber-100 drop-shadow-sm" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-amber-100/70 mb-1">{project.title}</p>
                                <p className="text-amber-50 font-medium text-lg drop-shadow-sm">{project.description}</p>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 text-amber-100/60 hover:text-amber-100 hover:bg-slate-600/40 rounded-xl transition-all duration-300">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 text-amber-100/60 hover:text-amber-100 hover:bg-slate-600/40 rounded-xl transition-all duration-300">
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}