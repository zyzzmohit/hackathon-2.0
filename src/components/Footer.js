export default function Footer() {
  return (
    <footer className="w-full py-8 mt-20 border-t border-white/5 bg-premium-black">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-accent-blue">NotesVerse</span>. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
