#!/data/data/com.termux/files/usr/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR" || exit 1

echo "=================================================="
echo "📊 Mahesh Dedicated Phone Server Status"
echo "=================================================="

pm2 status

echo "--------------------------------------------------"
IP=$(ifconfig 2>/dev/null | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | head -n 1)
echo "📍 Local Network URL: http://${IP:-192.168.1.18}:3000"
if [ -f "public_url.txt" ]; then
  echo "🌍 Public Live HTTPS: $(cat public_url.txt 2>/dev/null)"
fi
echo "=================================================="
