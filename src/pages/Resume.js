import React from "react";
import { Download, FileUser, ExternalLink } from "lucide-react";

export default function Resume() {
    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/Matthew_Cruz_Resume2025.pdf';
        link.download = 'Matthew_Cruz_Resume2025.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="resume" className="py-5 px-5 pt-16 max-w-4xl mx-auto bg-slate-800">
            <div className="text-center mb-5">
                <p className="text-2xl font-bold text-amber-100/80 max-w-2xl mx-auto leading-relaxed drop-shadow-sm hover:text-amber-200 hover:scale-125 transition-all duration-500 cursor-pointer">
                    resume
                </p>
            </div>

            <div className="grid gap-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-between p-6 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600/30 hover:border-slate-500/50 hover:bg-slate-600/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-slate-600/40 backdrop-blur-sm rounded-xl border border-slate-500/20">
                            <FileUser className="w-6 h-6 text-amber-100 drop-shadow-sm" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-amber-100/70 mb-1">updated aug '25</p>
                            <p className="text-amber-50 font-medium text-lg drop-shadow-sm">click to download or visit</p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button onClick={handleResumeDownload} className="p-3 text-amber-100/60 hover:text-amber-100 hover:bg-slate-600/40 rounded-xl transition-all duration-300">
                            <Download className="w-5 h-5" />
                        </button>
                        <a href={`${process.env.PUBLIC_URL}/Matthew_Cruz_Resume2025.pdf`} target="_blank" rel="noopener noreferrer" className="p-3 text-amber-100/60 hover:text-amber-100 hover:bg-slate-600/40 rounded-xl transition-all duration-300">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}