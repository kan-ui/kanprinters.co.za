# NPM Startup Error Troubleshooting

## Error: `EPERM` (Permission Error)

The error you're seeing is:
```
Error: spawn EPERM
errno: -4048,
code: 'EPERM',
syscall: 'spawn'
```

This is a Windows permission/system issue, not a code issue. Here are solutions:

## Solutions

### 1. **Port Already in Use**
Another process might be using port 3000.

**Fix:**
```powershell
# Find what's using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with the number from above)
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

### 2. **Antivirus/Windows Defender**
Antivirus might be blocking Node.js from spawning processes.

**Fix:**
- Add your project folder to Windows Defender exclusions
- Temporarily disable antivirus to test
- Add Node.js to antivirus whitelist

### 3. **Run as Administrator**
Sometimes Node.js needs elevated permissions.

**Fix:**
- Right-click PowerShell/Command Prompt
- Select "Run as Administrator"
- Navigate to project and run `npm run dev`

### 4. **Clear Next.js Cache**
Corrupted cache can cause issues.

**Fix:**
```powershell
# Delete .next folder
Remove-Item -Recurse -Force .next

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install

# Try again
npm run dev
```

### 5. **Check Node.js Version**
Ensure you're using a compatible Node.js version.

**Fix:**
```powershell
# Check version (should be 18+)
node --version

# If outdated, update Node.js from nodejs.org
```

### 6. **File Permissions**
Check if you have write permissions in the project folder.

**Fix:**
- Right-click project folder
- Properties > Security
- Ensure your user has "Full control"

### 7. **OneDrive Sync Issues**
Since your project is in OneDrive, sync conflicts can cause issues.

**Fix:**
- Pause OneDrive sync temporarily
- Or move project outside OneDrive
- Or exclude `.next` and `node_modules` from OneDrive sync

### 8. **Kill All Node Processes**
Sometimes leftover Node processes cause conflicts.

**Fix:**
```powershell
# Kill all node processes
taskkill /F /IM node.exe

# Then try again
npm run dev
```

## Quick Fix Checklist

1. ✅ Kill any existing Node processes
2. ✅ Clear `.next` folder
3. ✅ Run as Administrator
4. ✅ Check port 3000 is free
5. ✅ Try different port: `npm run dev -- -p 3001`
6. ✅ Check antivirus isn't blocking
7. ✅ Verify Node.js version (18+)

## Alternative: Use Different Port

If port 3000 is the issue, you can use a different port:

```powershell
npm run dev -- -p 3001
```

Then access at: `http://localhost:3001`

## Still Having Issues?

1. Check Windows Event Viewer for more details
2. Try running in Command Prompt instead of PowerShell
3. Check if Windows Firewall is blocking Node.js
4. Verify npm and node are in your PATH
