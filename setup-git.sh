#!/bin/bash

# Git Repository Setup Script for N8N Chatbot Widget Generator
# Run this script to initialize the Git repository and set up GitHub

echo "🚀 Setting up Git repository for N8N Chatbot Widget Generator..."

# Initialize Git repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: N8N Chatbot Widget Generator v1.0

Features:
- Visual configuration interface
- Real-time preview
- Customisable colours and fonts
- Save/load configurations
- One-click code generation
- Responsive design"

echo "✅ Git repository initialized with initial commit"

echo ""
echo "🔗 Next steps to create GitHub repository:"
echo "1. Go to https://github.com/new"
echo "2. Create a new repository named: n8n-chatbot-widget-generator"
echo "3. Don't initialize with README (we already have one)"
echo "4. Run these commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR-USERNAME/n8n-chatbot-widget-generator.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "5. Enable GitHub Pages in repository settings to host the app"
echo ""
echo "📝 Don't forget to:"
echo "- Replace 'YOUR-USERNAME' with your actual GitHub username"
echo "- Update the repository URL in package.json"
echo "- Update the live demo link in README-GITHUB.md"