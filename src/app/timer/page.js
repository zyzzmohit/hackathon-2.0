"use client";
import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Clock, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

import LazySpline from "@/components/LazySpline";

export default function TimerPage() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [activeSubject, setActiveSubject] = useState("Math");

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
  };

  const subjects = ["Math", "Physics", "Chemistry", "History", "CS"];

  return (
    <div className="min-h-screen w-full px-4 py-12 bg-premium-black text-white relative overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 -translate-y-24 scale-110">
        <LazySpline 
          scene="https://prod.spline.design/ylbBf-G2js-lg6h3/scene.splinecode" 
          className="w-full h-full opacity-60"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Timer Section */}
        <div className="flex flex-col items-center justify-center p-12 rounded-[3rem] bg-navy-blue border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-50" />
            
            <div className="mb-8 flex gap-3">
                {subjects.map(sub => (
                    <button 
                        key={sub}
                        onClick={() => setActiveSubject(sub)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${activeSubject === sub ? 'bg-accent-blue text-navy-blue font-bold' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                    >
                        {sub}
                    </button>
                ))}
            </div>

            <div className="relative mb-12">
                <div className="w-80 h-80 rounded-full border-8 border-white/5 flex items-center justify-center relative">
                    <div className={`absolute inset-0 rounded-full border-8 border-accent-blue border-t-transparent transition-all duration-1000 ${isActive ? 'animate-spin-slow' : ''}`} />
                    <span className="text-6xl font-mono font-bold tracking-wider">{formatTime(time)}</span>
                </div>
            </div>

            <div className="flex gap-6">
                <button 
                    onClick={toggleTimer}
                    className="w-16 h-16 rounded-full bg-accent-blue text-navy-blue flex items-center justify-center hover:scale-110 transition-transform"
                >
                    {isActive ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
                </button>
                <button 
                    onClick={resetTimer}
                    className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                    <RotateCcw size={24} />
                </button>
            </div>
        </div>

        {/* Dashboard Section */}
        <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-4 text-gray-400">
                        <Clock size={20} />
                        <span>Total Study Time</span>
                    </div>
                    <h3 className="text-3xl font-bold">42.5 hrs</h3>
                    <p className="text-sm text-green-400 mt-2">+12% from last week</p>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-4 text-gray-400">
                        <BarChart3 size={20} />
                        <span>Focus Score</span>
                    </div>
                    <h3 className="text-3xl font-bold">85/100</h3>
                    <p className="text-sm text-accent-blue mt-2">Top 5% of students</p>
                </div>
            </div>

            {/* Friends Activity */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <Users size={20} className="text-accent-blue" />
                        Friends Active Now
                    </h3>
                    <span className="text-sm text-green-400 animate-pulse">● 3 Online</span>
                </div>
                
                <div className="space-y-4">
                    {[
                        { name: "Sarah K.", subject: "Physics", time: "01:20:15", avatar: "bg-purple-500" },
                        { name: "Mike R.", subject: "Calculus", time: "00:45:30", avatar: "bg-blue-500" },
                        { name: "Jessica L.", subject: "History", time: "02:10:00", avatar: "bg-pink-500" },
                    ].map((friend, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-black/20 hover:bg-black/40 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full ${friend.avatar} flex items-center justify-center text-sm font-bold`}>
                                    {friend.name[0]}
                                </div>
                                <div>
                                    <p className="font-medium">{friend.name}</p>
                                    <p className="text-xs text-gray-400">Studying {friend.subject}</p>
                                </div>
                            </div>
                            <span className="font-mono text-accent-blue">{friend.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
