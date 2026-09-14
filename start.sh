#!/data/data/com.termux/files/usr/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

echo "=================================================="
echo "🚀 Starting Mahesh Shelke Portfolio Server"
echo "=================================================="

# Check if dist folder exists, if not build it
if [ ! -d "dist" ]; then
  echo "📦 Building production bundle..."
  npm run build
fi

# Stop any existing portfolio server & tunnels
pkill -f "node server.js" 2>/dev/null
pkill -f "ssh -o StrictHostKeyChecking=no -R 80:localhost:3000 nokey@localhost.run" 2>/dev/null
sleep 1

# Start production server
echo "⚡ Starting background server on port 3000..."
nohup node server.js > server.log 2>&1 &
SERVER_PID=$!
echo "✓ Production server running (PID: $SERVER_PID)"

# Start public HTTPS tunnel via localhost.run
echo "🌐 Launching Public HTTPS Tunnel..."
rm -f tunnel.log public_url.txt
nohup ssh -o StrictHostKeyChecking=no -R 80:localhost:3000 nokey@localhost.run > tunnel.log 2>&1 &
TUNNEL_PID=$!

# Wait for tunnel URL
sleep 4
URL=$(grep -o 'https://[^ ]*\.lhr\.life' tunnel.log | head -n 1)

if [ -z "$URL" ]; then
  sleep 3
  URL=$(grep -o 'https://[^ ]*\.lhr\.life' tunnel.log | head -n 1)
fi

echo "$URL" > public_url.txt

echo "=================================================="
echo "🎉 DEPLOYMENT SUCCESSFUL!"
echo "📍 Local Network URL: http://$(ifconfig 2>/dev/null | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | head -n 1):3000"
if [ -n "$URL" ]; then
  echo "🌍 Public HTTPS URL : $URL"
else
  echo "🌍 Public Tunnel    : Starting... check './status.sh' in 5s"
fi
echo "=================================================="
