"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I upload my notes?",
    answer: "Navigate to the 'Contribute' page, fill in the details about your subject and topic, and upload your file (PDF or Markdown supported). Your notes will be reviewed by the community before going live."
  },
  {
    question: "Is NotesVerse free to use?",
    answer: "Yes! NotesVerse is a community-driven platform. All notes are free to access. We believe in democratizing education for everyone."
  },
  {
    question: "How does the 'Timer' feature work?",
    answer: "The Timer allows you to track your study sessions. Select a subject, start the timer, and we'll log your hours. You can view your daily, weekly, and monthly progress in the dashboard."
  },
  {
    question: "Can I collaborate with friends?",
    answer: "Absolutely! You can see your friends' active study sessions in real-time on the Timer page. We are also working on a real-time collaborative editor for notes."
  },
  {
    question: "What are 'Streaks'?",
    answer: "Streaks are a fun way to stay consistent. Study for at least 30 minutes every day to maintain your streak and earn exclusive badges and XP."
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen w-full px-4 py-20 bg-premium-black text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-6">
            <HelpCircle size={32} className="text-accent-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-colors hover:bg-white/10"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  {activeIndex === index ? <Minus size={20} className="text-accent-blue" /> : <Plus size={20} className="text-gray-400" />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-8 rounded-3xl bg-navy-blue border border-white/5">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-gray-400 mb-6">We're here to help you out.</p>
            <button className="px-8 py-3 bg-accent-blue text-navy-blue rounded-full font-bold hover:bg-white transition-colors">
                Contact Support
            </button>
        </div>
      </div>
    </div>
  );
}
