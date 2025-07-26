import React from "react";
import { Calendar, Clock } from "lucide-react";

export default function Blog() {
    const blogPosts = [
        { 
            title: "Building My First Portfolio", 
            date: "2024-01-15",
            readTime: "5 min read",
            excerpt: "How I created this portfolio using React and Tailwind CSS..."
        },
        { 
            title: "Learning React Hooks", 
            date: "2024-01-10",
            readTime: "8 min read",
            excerpt: "My journey understanding useState, useEffect, and custom hooks..."
        },
        { 
            title: "Why I Chose Computer Science", 
            date: "2024-01-05",
            readTime: "3 min read",
            excerpt: "The story of how I discovered my passion for programming..."
        }
    ];

    return (
        <section id="blog" className="py-20 px-5 min-h-screen pt-16 max-w-4xl mx-auto bg-slate-800">
            <div className="text-center mb-16">
                <p className="text-xl text-amber-100/80 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                    blog
                </p>
            </div>

            <div className="grid gap-6 max-w-2xl mx-auto">
                {blogPosts.map((post, i) => (
                    <article key={i} className="p-6 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600/30 hover:border-slate-500/50 hover:bg-slate-600/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                        <h3 className="text-xl font-semibold text-amber-50 mb-3 drop-shadow-sm">
                            {post.title}
                        </h3>
                        
                        <div className="flex items-center space-x-4 mb-3 text-amber-100/60 text-sm">
                            <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                        
                        <p className="text-amber-100/80 leading-relaxed">
                            {post.excerpt}
                        </p>
                        
                        <button className="mt-4 text-amber-200 hover:text-amber-100 transition-colors font-medium">
                            Read more →
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}