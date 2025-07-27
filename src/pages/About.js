import React from "react";
import { User, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
    const aboutItems = [
        { 
            icon: User, 
            title: "who am i?", 
            description: "i'm a software engineer currently interning at the walt disney company. i play the saxophone, go to the gym, drink coffee, program, and build some lego from time to time. i also dabble in cooking."
            //"i'm a software engineer, musician, sports fan, gamer, gym-goer, coffee-drinker, lego-builder, and soon-to-be college grad in spring '26. i also dabble in cooking from time to time." 
        },
        // { 
        //     icon: Briefcase, 
        //     title: "what am i doing?", 
        //     description: "i'm currently a software engineering intern at the walt disney company. i'm also working on a couple projects and a business with a friend, details in the projects section below. in my free time, you can probably find me doing one of the things listed above." 
        // },
        { 
            icon: GraduationCap, 
            title: "what do i study?", 
            description: "i'm studying computer science and math at boston college, and graduating in may of 2026." 
        }
    ];

    // min-h-screen to take up whole screen
    return (
        <section id="about" className="py-5 px-5 pt-16 max-w-4xl mx-auto">
            <div className="text-center mb-5">
                <p className="text-4xl font-bold text-amber-100 max-w-2xl mx-auto leading-relaxed drop-shadow-lg hover:text-amber-200 hover:scale-125 transition-all duration-500 cursor-pointer">
                    matthew cruz
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