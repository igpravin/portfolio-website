# Debug Portfolio Images

## Issue: Portfolio Website Image Not Showing

### Quick Fixes:

1. **Hard Refresh Browser**
   - Press `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
   - This clears the cache and forces reload

2. **Check Browser Console**
   - Press `F12` to open Developer Tools
   - Look for any error messages in the Console tab
   - Check if there are any 404 errors for the image

3. **Test Image Directly**
   - Navigate to: `http://localhost:3000/assets/images/projects/portfolio-website-simple.svg`
   - The image should display in your browser

4. **Clear Browser Cache**
   - Go to browser settings and clear cache/cookies
   - Or use incognito/private mode to test

### Image Files Available:

- `portfolio-website.svg` - Original detailed version
- `portfolio-website-simple.svg` - Simplified version (currently used)

### Troubleshooting Steps:

1. **Verify File Exists:**
   ```bash
   ls -la assets/images/projects/
   ```

2. **Check File Permissions:**
   ```bash
   chmod 644 assets/images/projects/portfolio-website-simple.svg
   ```

3. **Test Local Server:**
   ```bash
   npm start
   # Then navigate to http://localhost:3000
   ```

4. **Check Network Tab:**
   - Open Developer Tools (F12)
   - Go to Network tab
   - Reload page and look for failed requests

### Alternative Solutions:

1. **Use PNG Instead:**
   - Convert SVG to PNG using online converter
   - Save as `portfolio-website.png`
   - Update `js/main.js` to use `.png` extension

2. **Inline SVG:**
   - Copy SVG content directly into HTML
   - Replace image tag with inline SVG

3. **Check MIME Type:**
   - Some servers don't serve SVG correctly
   - Add to `.htaccess`: `AddType image/svg+xml .svg`

### If Still Not Working:

Replace the image path in `js/main.js` with a placeholder:
```javascript
image: "https://via.placeholder.com/400x250/ff8c42/ffffff?text=Portfolio+Website",
```

This will show a placeholder while you debug the SVG issue.