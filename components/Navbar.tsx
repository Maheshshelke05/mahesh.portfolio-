
import React, { useState, useEffect } from 'react';

const Navbar: React.FC<{ 
  onServicesClick: () => void;
  onDownloadResume: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}> = ({ onServicesClick, onDownloadResume, isDarkMode, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-black/90 backdrop-blur-md border-b border-cyan-500/20' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer">
           <div className="w-8 h-8 cyber-border flex items-center justify-center font-mono text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
              M
           </div>
           <span className="text-xl font-bold tracking-tighter font-mono group-hover:text-cyan-400 transition-colors">MAHESH_S.</span>
        </div>
        
        <div className="hidden md:flex space-x-12 text-[11px] font-mono font-bold tracking-widest text-slate-500">
          <a href="#about" className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
             <span className="text-cyan-500/50">01.</span><span>ABOUT</span>
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
             <span className="text-cyan-500/50">02.</span><span>STACK</span>
          </a>
          <button onClick={onServicesClick} className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
             <span className="text-cyan-500/50">03.</span><span>SERVICES</span>
          </button>
          <a href="#projects" className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
             <span className="text-cyan-500/50">04.</span><span>NODES</span>
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
             <span className="text-cyan-500/50">05.</span><span>CONNECT</span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          
          <button 
            onClick={onDownloadResume}
            className="px-6 py-2 cyber-border text-[10px] font-mono font-bold text-cyan-400 hover:bg-cyan-500/10 transition-all shadow-[0_0_20px_rgba(6,182,212,0.1)] active:scale-95"
          >
            DOWNLOAD_CV()
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
