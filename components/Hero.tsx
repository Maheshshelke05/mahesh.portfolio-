
import React, { useState, useEffect } from 'react';
import { USER_INFO } from '../constants';

const Hero: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  
  const codeLines = [
    'resource "aws_devops_engineer" "mahesh" {',
    '  name   = "Mahesh Shelke"',
    '  degree = "BCA_2025"',
    '  role   = "AWS & DevOps Engineer"',
    '  status = "Open to Work"',
    '  projects = 13',
    '  ',
    '  cloud_technologies = [',
    '    "EC2", "S3", "IAM", "VPC",',
    '    "RDS MySQL", "Lambda", "SNS",',
    '    "SQS", "DynamoDB", "CloudFront",',
    '    "Auto Scaling", "CloudWatch", "AMI"',
    '  ]',
    '  ',
    '  operating_systems = [',
    '    "Linux", "Amazon Linux", "Ubuntu"',
    '  ]',
    '  ',
    '  devops_tools = [',
    '    "Git", "GitHub", "GitLab",',
    '    "Jenkins", "CI/CD Pipelines",',
    '    "Terraform", "Ansible", "Docker"',
    '  ]',
    '  ',
    '  networking_security = [',
    '    "VPC", "Subnets", "Route 53",',
    '    "IAM", "Security Groups"',
    '  ]',
    '  ',
    '  availability = "Immediate"',
    '  uptime = "99.5%"',
    '}',
    '',
    '$ terraform plan --out=career.plan'
  ];

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, codeLines[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }, 100); // 100ms delay between lines
      
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  const renderLine = (line: string, index: number) => {
    if (line.startsWith('resource')) {
      return (
        <div key={index} className="flex space-x-2">
          <span className="text-purple-400">resource</span>
          <span className="text-emerald-400">"aws_devops_engineer"</span>
          <span className="text-cyan-400">"mahesh"</span>
          <span>{"{"}</span>
        </div>
      );
    }
    if (line === '}') {
      return <div key={index}>{"}"}</div>;
    }
    if (line.startsWith('$')) {
      return (
        <div key={index} className="text-emerald-500 animate-pulse">
          {line}
        </div>
      );
    }
    if (line.includes('=')) {
      const parts = line.split('=');
      return (
        <div key={index} className="flex space-x-2">
          <span className="text-slate-500">{parts[0].trim()}</span>
          <span className="text-white">=</span>
          <span className="text-orange-300">{parts[1].trim()}</span>
        </div>
      );
    }
    return <div key={index} className="text-orange-300">{line}</div>;
  };
  return (
    <section className="min-h-screen flex items-center pt-20 relative px-6 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Technical Info */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-3 text-cyan-400 font-mono text-sm border-b border-cyan-400/30 pb-2">
            <span className="animate-pulse">●</span>
            <span>SYSTEMS_DEPLOYED: ACTIVE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]">
            Mahesh <span className="text-cyan-500">Shelke</span>
          </h1>
          
          <div className="flex items-center space-x-4">
             <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
             <p className="font-mono text-lg text-emerald-400">AWS & DevOps Specialist</p>
          </div>

          <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
            Architecting high-availability infrastructure. BCA 2025 graduate focused on the intersection of <span className="text-white underline decoration-cyan-500">Cloud Automation</span> and <span className="text-white underline decoration-emerald-500">Security</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-6">
            <a href="#projects" className="px-8 py-4 cyber-border bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-mono font-bold transition-all hover:scale-105 active:scale-95">
              GET_INFRA_WORK()
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/10 hover:bg-white/5 text-slate-300 font-mono font-bold transition-all hover:scale-105 active:scale-95">
              SSH_CONNECT
            </a>
          </div>
        </div>

        {/* Right Side: Code/Terminal Element */}
        <div className="md:col-span-5 hidden md:block">
          <div className="cyber-border bg-black/60 backdrop-blur-xl rounded-sm overflow-hidden shadow-2xl">
            <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between border-b border-white/10">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-[10px] font-mono text-slate-500 tracking-widest">provision_mahesh.tf</span>
            </div>
            <div className="p-6 font-mono text-xs space-y-1.5 leading-relaxed max-h-[500px] overflow-y-auto">
              {displayedLines.map((line, index) => renderLine(line, index))}
              {currentLineIndex < codeLines.length && (
                <span className="inline-block w-2 h-4 bg-emerald-500 animate-pulse"></span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
