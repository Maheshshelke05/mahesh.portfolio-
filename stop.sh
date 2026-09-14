#!/data/data/com.termux/files/usr/bin/bash

echo "🛑 Stopping Portfolio Services..."
pm2 stop ecosystem.config.cjs 2>/dev/null
pkill -f "nokey@localhost.run" 2>/dev/null
pkill -f "node server.js" 2>/dev/null
echo "✓ All portfolio processes stopped."
