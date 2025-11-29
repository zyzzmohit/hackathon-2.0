"use client";
import { useState } from "react";
import { Search, Filter, BookOpen, Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const dummyNotes = [
  { id: 1, title: "Advanced Calculus", author: "Alex Chen", subject: "Math", likes: 124, date: "2 days ago", color: "bg-blue-500" },
  { id: 2, title: "Organic Chemistry", author: "Sarah Smith", subject: "Science", likes: 89, date: "1 week ago", color: "bg-green-500" },
  { id: 3, title: "World History 101", author: "Mike Ross", subject: "History", likes: 256, date: "3 days ago", color: "bg-yellow-500" },
  { id: 4, title: "Data Structures", author: "Emily White", subject: "CS", likes: 412, date: "5 hours ago", color: "bg-purple-500" },
  { id: 5, title: "Quantum Physics", author: "David Kim", subject: "Physics", likes: 150, date: "1 day ago", color: "bg-indigo-500" },
  { id: 6, title: "Macroeconomics", author: "Lisa Wang", subject: "Economics", likes: 98, date: "4 days ago", color: "bg-pink-500" },
];

const categories = ["All", "Math", "Science", "History", "CS", "Physics", "Economics"];

export default function NotesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = dummyNotes.filter((note) => {
    const matchesCategory = activeCategory === "All" || note.subject === activeCategory;
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          note.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen w-full px-4 py-12 bg-premium-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notes Repository</h1>
            <p className="text-gray-400 text-lg">Explore thousands of notes from top students.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent-blue transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search notes..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white focus:outline-none focus:border-accent-blue/50 transition-colors"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
              <Filter size={20} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-8 mb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 border ${
                activeCategory === cat 
                  ? "bg-accent-blue text-navy-blue border-accent-blue font-bold" 
                  : "bg-transparent text-gray-400 border-white/10 hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note, index) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute top-6 right-6 w-3 h-3 rounded-full ${note.color}`} />
              
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-accent-blue/10 transition-colors">
                  <BookOpen size={24} className="text-gray-300 group-hover:text-accent-blue transition-colors" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-accent-blue transition-colors">{note.title}</h3>
              <p className="text-sm text-gray-400 mb-6">by {note.author} • {note.subject}</p>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-xs text-gray-500">{note.date}</span>
                <div className="flex gap-4">
                  <button className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors">
                    <Heart size={16} />
                    <span className="text-xs">{note.likes}</span>
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
