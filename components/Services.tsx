
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications using React Native with seamless performance and native feel.",
      features: ["React Native", "iOS & Android", "API Integration", "Push Notifications"]
    },
    {
      icon: "🌐",
      title: "Web Application Development",
      description: "Creating modern, responsive web applications with cutting-edge technologies and best practices.",
      features: ["React.js", "Node.js", "Full-Stack", "Responsive Design"]
    },
    {
      icon: "🎨",
      title: "Website Development",
      description: "Designing and developing professional websites tailored to your business needs and brand identity.",
      features: ["Custom Design", "SEO Optimized", "Fast Loading", "Mobile Friendly"]
    },
    {
      icon: "☁️",
      title: "AWS Cloud Hosting",
      description: "Deploying and managing your applications on AWS with high availability, security, and scalability.",
      features: ["EC2 Setup", "S3 Storage", "RDS Database", "CloudFront CDN"]
    },
    {
      icon: "🔄",
      title: "DevOps & CI/CD",
      description: "Implementing automated deployment pipelines and infrastructure as code for faster, reliable releases.",
      features: ["Jenkins Pipeline", "Docker", "Terraform", "Ansible"]
    },
    {
      icon: "🛠️",
      title: "Infrastructure Automation",
      description: "Automating cloud infrastructure setup and configuration management for efficient operations.",
      features: ["Terraform IaC", "Ansible Config", "Auto Scaling", "Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-black/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <span className="h-px w-12 bg-cyan-500"></span>
            <h2 className="text-xs font-mono font-bold tracking-[0.3em] text-cyan-500 uppercase">What I Offer</h2>
            <span className="h-px w-12 bg-cyan-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight">
            Services & <span className="text-emerald-500">Solutions</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-2xl mx-auto">
            From mobile apps to cloud infrastructure - I provide end-to-end solutions for your digital needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="cyber-border p-8 bg-black/40 group hover:border-cyan-500/50 transition-all duration-500 space-y-6"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold font-mono text-white group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2 pt-4 border-t border-white/5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-mono text-slate-500">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 cyber-border bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-mono font-bold transition-all hover:scale-105 active:scale-95"
          >
            GET_STARTED()
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
