#!/data/data/com.termux/files/usr/bin/bash

# 24/7 Persistent Public Tunnel Runner with Auto-Reconnect
DIR="/data/data/com.termux/files/home/mahesh.portfolio-"
cd "$DIR" || exit 1

# Acquire wake lock so Android never sleeps the CPU
termux-wake-lock 2>/dev/null

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Starting persistent tunnel loop..."

while true; do
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Connecting to public tunnel..."
  rm -f tunnel.log

  ssh -o StrictHostKeyChecking=no \
      -o ServerAliveInterval=15 \
      -o ServerAliveCountMax=3 \
      -o ExitOnForwardFailure=yes \
      -R 80:localhost:3000 nokey@localhost.run > tunnel.log 2>&1 &
  SSH_PID=$!

  # Wait for URL to appear in tunnel.log
  FOUND=0
  for i in {1..12}; do
    sleep 1
    URL=$(grep -o 'https://[^ ]*\.lhr\.life' tunnel.log 2>/dev/null | head -n 1)
    if [ -n "$URL" ]; then
      echo "$URL" > public_url.txt
      echo "[$(date '+%Y-%m-%d %H:%M:%S')] PUBLIC URL ESTABLISHED: $URL"
      FOUND=1
      break
    fi
  done

  if [ $FOUND -eq 0 ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Warning: Tunnel URL not found within 12s, retrying..."
    kill $SSH_PID 2>/dev/null
  else
    # Wait until connection breaks
    wait $SSH_PID
  fi

  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Tunnel disconnected. Auto-reconnecting in 3 seconds..."
  sleep 3
done
