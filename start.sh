#!/data/data/com.termux/files/usr/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR" || exit 1

echo "=================================================="
echo "🚀 Initializing Mahesh Shelke Dedicated Server"
echo "=================================================="

# 1. Enable Android Wake Lock so CPU never sleeps
termux-wake-lock 2>/dev/null
echo "✓ CPU Wake-Lock Acquired (Prevents Android Sleep)"

# 2. Check if build exists
if [ ! -d "dist" ]; then
  echo "📦 Building production bundle..."
  npm run build
fi

# 3. Kill old loose non-PM2 processes if any
pkill -f "node server.js" 2>/dev/null
pkill -f "nokey@localhost.run" 2>/dev/null

# 4. Start / Reload with PM2
echo "⚡ Starting Production Services with PM2..."
pm2 start ecosystem.config.cjs
pm2 save

# 5. Wait for public URL
echo "⏳ Fetching Public Tunnel URL..."
URL=""
for i in {1..12}; do
  sleep 1
  if [ -f "public_url.txt" ]; then
    URL=$(cat public_url.txt 2>/dev/null)
    if [ -n "$URL" ]; then
      break
    fi
  fi
done

IP=$(ifconfig 2>/dev/null | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | head -n 1)

echo "=================================================="
echo "🎉 SERVER DEPLOYED & RUNNING 24/7!"
echo "📍 Local Network URL: http://${IP:-192.168.1.18}:3000"
echo "🌍 Public Live HTTPS: $URL"
echo "⚙️  Process Manager  : PM2 (Auto-restart enabled)"
echo "=================================================="
