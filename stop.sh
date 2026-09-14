#!/data/data/com.termux/files/usr/bin/bash

echo "🛑 Stopping Mahesh Portfolio Server & Tunnels..."
pkill -f "node server.js" 2>/dev/null
pkill -f "nokey@localhost.run" 2>/dev/null
pkill -f "cloudflared tunnel" 2>/dev/null
echo "✓ All portfolio processes stopped."
