
import React, { useEffect, useState } from 'react';

const Loading: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  
  const loadingSteps = [
    'Initializing AWS Infrastructure...',
    'Loading DevOps Modules...',
    'Deploying Portfolio...',
    'Terraform Apply Complete ✓'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const stepIndex = Math.floor(progress / 25);
    if (stepIndex < loadingSteps.length) {
      setText(loadingSteps[stepIndex]);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <div className="text-6xl font-mono font-bold text-cyan-500 animate-pulse">
            MS
          </div>
          <div className="text-xs font-mono text-slate-500 tracking-widest">
            MAHESH SHELKE
          </div>
        </div>
        
        <div className="w-64 space-y-3">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-xs font-mono text-cyan-400">
            {text}
          </div>
          <div className="text-xs font-mono text-slate-600">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
