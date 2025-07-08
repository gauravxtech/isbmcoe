#!/bin/bash
# Bulk update script to replace isbmcoe.edu.in with isbmcoe.netlify.app in all TypeScript/JavaScript files

echo "Updating URLs from isbmcoe.edu.in to isbmcoe.netlify.app..."

# Find and replace in all .ts, .tsx, .js, .jsx files
find src -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) -exec sed -i 's/isbmcoe\.edu\.in/isbmcoe.netlify.app/g' {} +

echo "URL update complete!"
echo "Please review the changes and commit them to git."