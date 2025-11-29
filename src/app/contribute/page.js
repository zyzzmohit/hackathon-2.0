"use client";
import { useState } from "react";
import { UploadCloud, FileText, CheckCircle2 } from "lucide-react";

export default function ContributePage() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop logic here
  };

  return (
    <div className="min-h-screen w-full px-4 py-20 bg-premium-black text-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contribute Notes</h1>
          <p className="text-gray-400">Share your knowledge and help others learn.</p>
        </div>

        <form className="space-y-8">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">Title</label>
            <input 
              type="text" 
              placeholder="e.g. Advanced Calculus - Chapter 3"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent-blue transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent-blue transition-colors appearance-none">
                    <option>Mathematics</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>Computer Science</option>
                    <option>History</option>
                </select>
            </div>
            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300">Topic</label>
                <input 
                  type="text" 
                  placeholder="e.g. Integration"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent-blue transition-colors"
                />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">Upload File</label>
            <div 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-3xl p-12 text-center transition-colors cursor-pointer ${isDragging ? 'border-accent-blue bg-accent-blue/10' : 'border-white/10 hover:border-white/30 bg-white/5'}`}
            >
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                        <UploadCloud size={32} className="text-accent-blue" />
                    </div>
                    <div>
                        <p className="font-bold text-lg mb-1">Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-400">PDF, MD, or TXT (max. 10MB)</p>
                    </div>
                </div>
            </div>
          </div>

          <button type="button" className="w-full py-4 bg-accent-blue text-navy-blue rounded-xl font-bold text-lg hover:bg-white transition-colors shadow-lg shadow-accent-blue/20">
            Submit Contribution
          </button>
        </form>
      </div>
    </div>
  );
}
