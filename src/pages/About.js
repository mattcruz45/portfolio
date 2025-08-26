import React from "react";
import { User, GraduationCap } from "lucide-react";

export default function About() {
    const aboutItems = [
        {
            icon: User,
            title: "who am i?",
            description: "i'm a software engineer who enjoys building things. i play the saxophone, go to the gym, drink coffee, and program (obviously). i also dabble in cooking."
        },
        {
            icon: GraduationCap,
            title: "what do i study?",
            description: "i'm studying computer science and math at boston college, and graduating in may of 2026."
        }
    ];

    return (
        <section id="about" className="py-8 px-4 pt-20 max-w-4xl mx-auto md:py-12 md:px-6 lg:py-16">
            {/* Name/Header */}
            <div className="text-center mb-8 md:mb-12">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-100 max-w-2xl mx-auto leading-relaxed drop-shadow-lg hover:text-amber-200 hover:scale-110 md:hover:scale-125 transition-all duration-500 cursor-pointer">
                    matthew cruz
                </p>
            </div>

            {/* About Cards */}
            <div className="grid gap-4 max-w-2xl mx-auto sm:gap-6">
                {aboutItems.map((item, i) => (
                    <div 
                        key={i} 
                        className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600/30 hover:border-slate-500/50 hover:bg-slate-600/50 transition-all duration-500 shadow-lg hover:shadow-xl"
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0 self-start sm:self-center">
                            <div className="p-3 bg-slate-600/40 backdrop-blur-sm rounded-xl border border-slate-500/20">
                                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-100 drop-shadow-sm" />
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm font-medium text-amber-100/70 mb-1 tracking-wide">
                                {item.title}
                            </p>
                            <p className="text-amber-50 font-medium text-base sm:text-lg drop-shadow-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}