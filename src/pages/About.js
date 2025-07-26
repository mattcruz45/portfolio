import React from "react";
import { User, Code, GraduationCap } from "lucide-react";

export default function About() {
    const aboutItems = [
        { 
            icon: User, 
            title: "Who I Am", 
            description: "A passionate developer focused on creating meaningful digital experiences" 
        },
        { 
            icon: Code, 
            title: "What I Do", 
            description: "Full-stack development with modern technologies and best practices" 
        },
        { 
            icon: GraduationCap, 
            title: "Education", 
            description: "Computer Science student at Boston College" 
        }
    ];

    return (
        <section id="about" className="py-20 px-5 min-h-screen pt-16 max-w-4xl mx-auto bg-slate-800">
            <div className="text-center mb-16">
                <p className="text-xl text-amber-100/80 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                    about
                </p>
            </div>

            <div className="grid gap-6 max-w-2xl mx-auto">
                {aboutItems.map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 p-6 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600/30 hover:border-slate-500/50 hover:bg-slate-600/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                        <div className="p-3 bg-slate-600/40 backdrop-blur-sm rounded-xl border border-slate-500/20">
                            <item.icon className="w-6 h-6 text-amber-100 drop-shadow-sm" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-amber-100/70 mb-1">{item.title}</p>
                            <p className="text-amber-50 font-medium text-lg drop-shadow-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}