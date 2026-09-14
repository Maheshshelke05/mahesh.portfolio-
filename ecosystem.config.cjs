module.exports = {
  apps: [
    {
      name: 'portfolio-web',
      script: 'server.js',
      cwd: '/data/data/com.termux/files/home/mahesh.portfolio-',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      max_memory_restart: '250M',
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    {
      name: 'portfolio-tunnel',
      script: './tunnel-runner.sh',
      cwd: '/data/data/com.termux/files/home/mahesh.portfolio-',
      interpreter: '/data/data/com.termux/files/usr/bin/bash',
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '150M',
      watch: false
    }
  ]
};
