
import { Project, Skill } from './types';

export const USER_INFO = {
  name: "Mahesh Shelke",
  title: "AWS & DevOps Engineer",
  bio: "Specializing in automating cloud infrastructure and streamlining delivery pipelines. BCA Graduate (2025) with a passion for scalable, secure, and highly available systems.",
  location: "Maharashtra, India",
  email: "msshelke0505@gmail.com",
  phone: "+919022604252",
  socials: {
    github: "https://github.com/Maheshshelke05",
    linkedin: "https://linkedin.com/in/mahesh-shelke-7497a7315",
    medium: "https://medium.com/@maheshshelke05"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Telegram Movies Platform - Production System",
    description: "Production-grade Telegram bot serving 2000+ active users with intelligent fuzzy search (95% accuracy), real-time alert system, partner management, and Flask web dashboard. Deployed on AWS with Docker, achieving 99.5% uptime and <500ms response time at $0.027/user/month.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Telegram Bot", "Docker", "AWS EC2", "Flask", "MariaDB", "SQLAlchemy"],
    category: "Personal",
    link: "https://github.com/Maheshshelke05/Telegram-Movies-Platform---Complete-Production-System"
  },
  {
    id: "2",
    title: "Notes2Cash - Student Notes Sharing Platform",
    description: "Full-stack mobile app enabling students to upload, share, and earn from academic notes. Built with Flutter & FastAPI, deployed on AWS EC2 with S3 storage, MariaDB database, Nginx reverse proxy, and automated CI/CD via GitHub Actions. Features Google OAuth, PDF viewer, earnings dashboard, and real-time notifications.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    tags: ["Flutter", "FastAPI", "AWS EC2", "AWS S3", "MariaDB", "GitHub Actions", "Nginx"],
    category: "Personal",
    link: "https://github.com/Maheshshelke05/Notes2Cash---Student-Notes-Sharing-Earning-Platform"
  },
  {
    id: "3",
    title: "Air Piano - Gesture-Controlled MIDI Instrument",
    description: "Real-time hand gesture-controlled virtual piano using computer vision. Maps each finger to D major scale chords with webcam-based hand detection via cvzone, MIDI output through pygame, sustain effects, and supports both hands. Features dynamic gesture recognition, customizable chord mappings, and adjustable sustain timing for natural music interaction.",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "OpenCV", "cvzone", "MIDI", "Computer Vision", "Hand Tracking", "pygame"],
    category: "Personal",
    link: "https://github.com/Maheshshelke05/Air--piano--"
  },
  {
    id: "4",
    title: "CloudCommerce Pro - Microservices E-commerce",
    description: "Production-ready e-commerce platform with microservices architecture deployed on AWS EC2. Features 5 containerized services (React frontend, Node.js backend, MongoDB, Redis cache, Nginx reverse proxy) orchestrated with Docker Compose. Implements service discovery, load balancing, and persistent storage with named volumes.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["Docker", "Microservices", "React", "Node.js", "MongoDB", "Redis", "Nginx", "AWS EC2"],
    category: "DevOps",
    link: "https://github.com/Maheshshelke05/cloudcommerce-pro-microservices-docker"
  },
  {
    id: "5",
    title: "3-Tier AWS DevOps File Upload Application",
    description: "Enterprise-grade file upload application with complete Infrastructure as Code. Built 3-tier architecture (Frontend, Backend, Database) on AWS using Terraform for provisioning, Ansible for configuration management, and Jenkins for CI/CD. Features VPC with public/private subnets, S3 storage, CloudFront CDN, SNS notifications, and automated deployment pipeline.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800",
    tags: ["Terraform", "Ansible", "Jenkins", "AWS VPC", "AWS S3", "CloudFront", "CI/CD", "IaC"],
    category: "DevOps",
    link: "https://github.com/Maheshshelke05/3tier-aws-devops-file-upload-project-terraform-ansible-jenkins"
  },
  {
    id: "6",
    title: "Ansible 2-Tier Application Deployment",
    description: "Automated 2-tier application deployment on AWS EC2 using Ansible playbooks. Configured App Server (Nginx + PHP + PHP-FPM) and Database Server (MariaDB) with single playbook execution. Demonstrates infrastructure automation, service orchestration, inventory management, and idempotent configuration following DevOps best practices.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
    tags: ["Ansible", "AWS EC2", "Nginx", "PHP", "MariaDB", "Configuration Management", "Automation"],
    category: "DevOps",
    link: "https://github.com/Maheshshelke05/ansible-aws-2-tier-realworld-project"
  },
  {
    id: "7",
    title: "Terraform AWS 3-Tier Infrastructure Automation",
    description: "Production-style 3-tier architecture on AWS built entirely with Terraform IaC. Implements Web (public subnet), Application (private subnet), and Database (private subnet) layers with custom VPC, Internet Gateway, NAT Gateway with Elastic IP, and separate route tables. Features remote state management in S3, network segmentation, and secure routing following enterprise best practices.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    tags: ["Terraform", "AWS VPC", "NAT Gateway", "IGW", "Network Architecture", "IaC", "Security"],
    category: "DevOps",
    link: "https://github.com/Maheshshelke05/terraform-aws-3tier-architecture"
  },
  {
    id: "8",
    title: "Cloud-Native E-Commerce - Spring Boot CI/CD",
    description: "Enterprise Spring Boot e-commerce application with fully automated deployment pipeline. Infrastructure provisioned via Terraform (VPC, EC2, RDS MySQL), Jenkins CI/CD with GitHub webhooks for auto-triggering, Maven build automation, systemd service management for zero-downtime deployments, and secure network architecture with proper security groups and subnet isolation.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
    tags: ["Spring Boot", "Jenkins", "Terraform", "AWS RDS", "Maven", "systemd", "GitHub Webhooks"],
    category: "DevOps",
    link: "https://github.com/Maheshshelke05/Cloud-Native-E-Commerce-Deployment-Using-Terraform-AWS-EC2-RDS-Jenkins-CI-CD"
  },
  {
    id: "9",
    title: "Amazon Price Tracker - Serverless AWS",
    description: "100% serverless automated price monitoring system using AWS Lambda, SNS, EventBridge, and DynamoDB. Tracks Amazon product prices every 2 minutes and sends instant SMS alerts when price drops below target. Cost-effective solution at ₹1.70/month with automatic scheduling, no server management, and scalable architecture supporting multiple products.",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=800",
    tags: ["AWS Lambda", "Amazon SNS", "EventBridge", "DynamoDB", "Python", "Serverless", "Automation"],
    category: "DevOps",
    link: "https://github.com/Maheshshelke05/Amazon-Price-Tracker-using-AWS-Services-Serverless"
  },
  {
    id: "10",
    title: "Student App - Complete Java CI/CD Pipeline",
    description: "Java-based Student Management web application with end-to-end CI/CD automation. Jenkins pipeline handles code checkout from GitHub, Maven build to generate WAR file, and automated deployment to Apache Tomcat on AWS EC2. Features SSH-based secure deployment, automatic service restart, and declarative pipeline with multi-stage build process.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    tags: ["Java", "Jenkins", "Maven", "Tomcat", "AWS EC2", "CI/CD", "Git", "SSH"],
    category: "DevOps",
    link: "https://github.com/Maheshshelke05/Student-App-Complete-DevOps-CI-CD-Project-"
  },
  {
    id: "11",
    title: "AutoVision 3D - Interactive Car Visualization",
    description: "Full-featured 3D car visualization website with Node.js/Express backend and interactive frontend. Features 360° car rotation, dynamic color customization, and real-time rendering. Deployed on AWS EC2 with Jenkins CI/CD pipeline, PM2 process management for zero-downtime deployments, cluster mode for scalability, and automated GitHub-triggered builds.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    tags: ["Node.js", "Express", "Jenkins", "PM2", "AWS EC2", "3D Visualization", "CI/CD"],
    category: "DevOps",
    link: "https://github.com/Maheshshelke05/-AutoVision-3D-Complete-3D-Car-View-Website-Node.js-Jenkins-AWS-EC2-PM2-"
  },
  {
    id: "12",
    title: "YouTube Auto Uploader - Serverless Automation",
    description: "Fully automated YouTube video uploader using AWS serverless architecture. Uploads 2 videos daily (9 AM & 8 PM) from S3 to YouTube via Lambda, EventBridge scheduling, YouTube Data API v3 integration, SNS email notifications, OAuth 2.0 authentication, and automatic cleanup. Handles 232+ videos with zero manual intervention and cost-effective pay-per-use pricing.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
    tags: ["AWS Lambda", "EventBridge", "AWS S3", "SNS", "YouTube API", "Python", "Serverless"],
    category: "DevOps",
    link: "https://github.com/Maheshshelke05/YouTube-Auto-Uploader-Complete-Automated-System-Serverless"
  },
  {
    id: "13",
    title: "Movie Ticket Booking - AWS 3-Tier Architecture",
    description: "Cloud-based movie ticket booking system with complete AWS 3-tier architecture. Frontend (Nginx) in public subnet, PHP backend in private subnet, and AWS RDS MySQL in isolated database subnet. Features custom VPC, NAT Gateway for private subnet internet access, Elastic IPs, multi-AZ deployment, security groups with least privilege, and automated backups.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800",
    tags: ["AWS VPC", "AWS RDS", "Nginx", "PHP", "NAT Gateway", "Multi-AZ", "Security Groups"],
    category: "DevOps",
    link: "https://github.com/Maheshshelke05/Movie-Ticket-Booking-System-AWS-3-Tier-Architecture-"
  }
];

export const SKILLS: Skill[] = [
  // Cloud Technologies
  { name: "AWS EC2", level: 90, category: "Cloud" },
  { name: "AWS S3", level: 85, category: "Cloud" },
  { name: "AWS IAM", level: 80, category: "Cloud" },
  { name: "AWS VPC", level: 85, category: "Cloud" },
  { name: "AWS RDS MySQL", level: 80, category: "Cloud" },
  { name: "AWS Lambda", level: 75, category: "Cloud" },
  { name: "AWS SNS", level: 75, category: "Cloud" },
  { name: "AWS SQS", level: 70, category: "Cloud" },
  { name: "AWS DynamoDB", level: 70, category: "Cloud" },
  { name: "AWS CloudFront", level: 75, category: "Cloud" },
  { name: "AWS Auto Scaling", level: 75, category: "Cloud" },
  { name: "AWS CloudWatch", level: 80, category: "Cloud" },
  { name: "AWS AMI", level: 80, category: "Cloud" },
  
  // Operating Systems
  { name: "Linux", level: 85, category: "OS" },
  { name: "Amazon Linux", level: 85, category: "OS" },
  { name: "Ubuntu", level: 85, category: "OS" },
  
  // DevOps Tools
  { name: "Git", level: 90, category: "DevOps" },
  { name: "GitHub", level: 90, category: "DevOps" },
  { name: "GitLab", level: 75, category: "DevOps" },
  { name: "Jenkins", level: 85, category: "DevOps" },
  { name: "CI/CD Pipelines", level: 85, category: "DevOps" },
  { name: "Terraform", level: 85, category: "DevOps" },
  { name: "Ansible", level: 80, category: "DevOps" },
  { name: "Docker", level: 80, category: "DevOps" },
  
  // Networking & Security
  { name: "VPC", level: 85, category: "Network" },
  { name: "Subnets", level: 85, category: "Network" },
  { name: "Route 53", level: 75, category: "Network" },
  { name: "Security Groups", level: 85, category: "Network" }
];
