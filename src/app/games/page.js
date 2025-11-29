"use client";
import { Flame, Trophy, Target, Star, Crown } from "lucide-react";
import { motion } from "framer-motion";

export default function GamesPage() {
  return (
    <div className="min-h-screen w-full px-4 py-12 bg-premium-black text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
                Level Up Your Learning
            </h1>
            <p className="text-gray-400 text-xl">Earn rewards, maintain streaks, and compete with friends.</p>
        </div>

        {/* Streaks & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 flex flex-col items-center text-center"
            >
                <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                    <Flame size={40} className="text-orange-500" />
                </div>
                <h2 className="text-4xl font-bold mb-2">12 Days</h2>
                <p className="text-gray-400">Current Streak</p>
            </motion.div>

            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 flex flex-col items-center text-center"
            >
                <div className="w-20 h-20 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                    <Trophy size={40} className="text-yellow-500" />
                </div>
                <h2 className="text-4xl font-bold mb-2">Level 5</h2>
                <p className="text-gray-400">Scholar Rank</p>
            </motion.div>

            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 flex flex-col items-center text-center"
            >
                <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                    <Target size={40} className="text-blue-500" />
                </div>
                <h2 className="text-4xl font-bold mb-2">850 XP</h2>
                <p className="text-gray-400">Weekly Progress</p>
            </motion.div>
        </div>

        {/* Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Crown className="text-yellow-400" /> Global Leaderboard
                </h3>
                
                <div className="space-y-4">
                    {[
                        { rank: 1, name: "Alex Chen", xp: "12,450", avatar: "bg-purple-500" },
                        { rank: 2, name: "Sarah Smith", xp: "11,200", avatar: "bg-green-500" },
                        { rank: 3, name: "Mike Ross", xp: "10,850", avatar: "bg-blue-500" },
                        { rank: 4, name: "You", xp: "8,450", avatar: "bg-gray-700", highlight: true },
                        { rank: 5, name: "Emily White", xp: "8,200", avatar: "bg-pink-500" },
                    ].map((user) => (
                        <div key={user.rank} className={`flex items-center justify-between p-4 rounded-2xl ${user.highlight ? 'bg-accent-blue/10 border border-accent-blue/30' : 'bg-black/20'}`}>
                            <div className="flex items-center gap-6">
                                <span className={`font-bold text-lg w-6 ${user.rank <= 3 ? 'text-yellow-400' : 'text-gray-500'}`}>#{user.rank}</span>
                                <div className={`w-10 h-10 rounded-full ${user.avatar} flex items-center justify-center font-bold`}>
                                    {user.name[0]}
                                </div>
                                <span className="font-medium">{user.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star size={16} className="text-yellow-400" fill="currentColor" />
                                <span className="font-mono font-bold">{user.xp}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Daily Challenges */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Daily Quests</h3>
                {[
                    { title: "Focus Master", desc: "Study for 2 hours total", progress: 75, reward: "50 XP" },
                    { title: "Note Taker", desc: "Upload 1 new note", progress: 0, reward: "100 XP" },
                    { title: "Social Butterfly", desc: "Like 5 notes", progress: 100, reward: "30 XP", completed: true },
                ].map((quest, i) => (
                    <div key={i} className={`p-6 rounded-3xl border ${quest.completed ? 'bg-green-500/10 border-green-500/30' : 'bg-white/5 border-white/10'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="font-bold mb-1">{quest.title}</h4>
                                <p className="text-sm text-gray-400">{quest.desc}</p>
                            </div>
                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10">{quest.reward}</span>
                        </div>
                        <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                            <div 
                                className={`h-full rounded-full ${quest.completed ? 'bg-green-500' : 'bg-accent-blue'}`} 
                                style={{ width: `${quest.progress}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
