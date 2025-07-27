import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Copy, Check, ExternalLink } from "lucide-react";

export default function Contact() {
    const [copied, setCopied] = useState("");

    const contacts = [
        { icon: Github, label: "github", value: "mattcruz45", link: "https://github.com/mattcruz45", copyValue: "https://github.com/mattcruz45" },
        { icon: Linkedin, label: "linkedin", value: "matthew cruz", link: "https://www.linkedin.com/in/matthew-cruz-b2b127260/", copyValue: "https://www.linkedin.com/in/matthew-cruz-b2b127260/" },
        { icon: Mail, label: "personal email", value: "mattcruz4545@gmail.com", link: "mailto:mattcruz4545@gmail.com", copyValue: "mattcruz4545@gmail.com" },
        { icon: Mail, label: "school email", value: "matthew.cruz@bc.edu", link: "mailto:matthew.cruz@bc.edu", copyValue: "matthew.cruz@bc.edu" },
        { icon: Phone, label: "phone", value: "732-925-9552", link: "tel:+17329259552", copyValue: "732-925-9552" }
    ];

    const handleCopy = async (text, key) => {
        await navigator.clipboard.writeText(text);
        setCopied(key);
        setTimeout(() => setCopied(""), 2000);
    };

    return (
        <section id="contact"className="py-5 px-5 pt-16 max-w-4xl mx-auto bg-slate-800">
            <div className="text-center mb-5">
                <p className="text-2xl font-bold text-amber-100/80 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                    links & info
                </p>
            </div>

            <div className="grid gap-6 max-w-2xl mx-auto">
                {contacts.map((contact, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600/30 hover:border-slate-500/50 hover:bg-slate-600/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                        <div className="flex items-center space-x-4">
                            <a href={contact.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-600/40 backdrop-blur-sm rounded-xl border border-slate-500/20 hover:bg-slate-500/40 transition-all duration-300">
                                <contact.icon className="w-6 h-6 text-amber-100 drop-shadow-sm" />
                            </a>
                            <div>
                                <p className="text-sm font-medium text-amber-100/70 mb-1">{contact.label}</p>
                                <a href={contact.link} target="_blank" rel="noopener noreferrer" className="text-amber-50 hover:text-amber-200 transition-colors font-medium text-lg drop-shadow-sm">
                                    {contact.value}
                                </a>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button onClick={() => handleCopy(contact.copyValue, i)} className="p-3 text-amber-100/60 hover:text-amber-100 hover:bg-slate-600/40 rounded-xl transition-all duration-300">
                                {copied === i ? <Check className="w-5 h-5 text-green-400 animate-pulse" /> : <Copy className="w-5 h-5" />}
                            </button>
                            <a href={contact.link} target="_blank" rel="noopener noreferrer" className="p-3 text-amber-100/60 hover:text-amber-100 hover:bg-slate-600/40 rounded-xl transition-all duration-300">
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <p className="text-amber-100/60 text-sm drop-shadow-sm">
                </p>
            </div>
        </section>
    );
}