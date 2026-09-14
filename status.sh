#!/data/data/com.termux/files/usr/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

echo "=================================================="
echo "📊 Mahesh Portfolio Server Status"
echo "=================================================="

SERVER_RUNNING=$(pgrep -f "node server.js")
TUNNEL_RUNNING=$(pgrep -f "nokey@localhost.run")

if [ -n "$SERVER_RUNNING" ]; then
  echo "⚡ Server : RUNNING (PID: $SERVER_RUNNING)"
else
  echo "⚡ Server : STOPPED"
fi

if [ -n "$TUNNEL_RUNNING" ]; then
  echo "🌐 Tunnel : ACTIVE  (PID: $TUNNEL_RUNNING)"
  URL=$(grep -o 'https://[^ ]*\.lhr\.life' tunnel.log 2>/dev/null | head -n 1)
  echo "🔗 Public URL: $URL"
else
  echo "🌐 Tunnel : STOPPED"
fi

echo "=================================================="
