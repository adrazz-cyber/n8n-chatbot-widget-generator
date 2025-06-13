# N8N Chatbot Widget Generator - Enhanced Edition v17

## 🚀 Latest Updates (June 13, 2025)

### ✨ Version 17 - URL Auto-Linking & Text Wrapping Fix

#### 🔗 Automatic URL Detection
- **Smart Link Conversion:** URLs in chat messages automatically become clickable links
- **Supported Formats:**
  - Standard URLs: `https://example.com` and `http://example.com`
  - WWW URLs: `www.example.com` (automatically adds http://)
  - URLs in parentheses: `(https://example.com)`
- **Link Security:** All links include `target="_blank"` and `rel="noopener noreferrer"`
- **Seamless Styling:** Links inherit message color with underline decoration

#### 📝 Text Wrapping Improvements
- **Fixed Word Breaking:** Words no longer split mid-word across lines
- **Natural Text Flow:** Text wraps at word boundaries for better readability
- **Disabled Hyphenation:** Removed automatic hyphenation for cleaner appearance

### ✨ Version 16 - Header Text Color Control

#### 🎨 New Header Customization
- **Header Text Color Control:** New color picker in Window tab > Basic Configuration
- **Customizable Elements:** 
  - Chat window title text
  - Refresh button icon
  - Close button (×)
- **Default Color:** White (#FFFFFF) maintains backward compatibility
- **Use Case:** Perfect for light-colored themes where white text isn't readable

### ✨ Version 15 Enhancements

#### 📝 Advanced Text Formatting
- **Smart Bullet Points:** Lines starting with `-` automatically convert to • symbols
- **Service Headers:** Lines ending with `:` become bold headers for better structure
- **Paragraph Support:** Proper spacing between paragraphs with configurable controls
- **Bold Text:** Use `**text**` for bold emphasis within messages
- **Enhanced Line Spacing:** Configurable line height from 1.2 to 2.0

#### 📱 Responsive Design
- **Mobile First:** Automatically adapts to screen size
  - Mobile (<600px): Full screen width minus padding
  - Tablet (601-900px): Respects configured size or viewport limits
  - Desktop (>900px): Uses your configured dimensions
- **Viewport Constraints:** Never exceeds screen boundaries
- **Text Scaling:** Font sizes adjust on smaller screens (14px on mobile)
- **Avatar Scaling:** Avatars resize from 40px to 32px on mobile devices

#### 🎛️ New UI Controls
- **Multi-line Welcome Message:** Textarea replaces single-line input
- **Message Formatting Section:** New controls in Window tab:
  - Line Height (1.2 - 2.0)
  - Paragraph Spacing (8-20px)
  - Bullet Point Spacing (6-16px)
  - Header Margin (10-24px)
- **Formatting Help Text:** Built-in guidance for message formatting

### 🏆 Complete Feature Set

#### Typography System (Unique Advantage)
- **5 Separate Font Controls:**
  - Title Font
  - Message Font (Bot & User messages)
  - Input Field Font
  - Tooltip Font
  - Footer Font
- **13 Professional Fonts:** Inter, Roboto, Open Sans, Lato, Montserrat, Poppins, and more
- **Live Font Preview:** Input fields show selected fonts in real-time

#### Professional Interface
- **4-Tab Layout:** Button, Tooltip, Window, Footer
- **Modern Toggle Switches:** Smooth animations for all boolean controls
- **Button Shapes:** Circle or Rounded Square options
- **Bounce Animation:** Professional entrance animation when chat opens
- **Header Text Color:** Customizable header text color for better contrast

#### Avatar System
- **Bot & User Avatars:** Custom URLs with fallback emojis (🤖 and 👤)
- **Show/Hide Toggles:** Control avatar visibility independently
- **Square Styling:** 8px border radius for modern appearance
- **Size Control:** 24-48px adjustable avatar dimensions

#### Advanced Features
- **Webhook Integration:** Full N8N workflow support with session management
- **Refresh Functionality:** Clear chat and reset session
- **Tooltip Modes:** Always visible or hover-only options
- **Save/Load Configurations:** Export and import settings as JSON
- **Icon Customization:** Custom icon URLs with size and styling controls

### 🛡️ Privacy & Security
- **No Pre-filled Data:** All fields start empty for security
- **Self-hosted Solution:** Complete independence from external services
- **MIT License:** Open source for transparency
- **No Tracking:** Zero analytics or user data collection

### 📊 Technical Specifications
- **Lightweight:** Widget JavaScript ~31KB optimized
- **Performance:** Instant loading with smooth animations
- **Browser Support:** Works on all modern browsers
- **Mobile Ready:** Responsive design for all devices
- **CDN Hosted:** GitHub Pages with automatic deployment

### 🎯 How to Use Text Formatting

#### Welcome Message Formatting:
```
Welcome to Our Service

- Digital Solutions:
- Support with web development, hosting, and technical consulting

- Custom Development

We tailor our services to meet your specific needs.

**Contact us today!**
```

#### Results in:
- Bold headers for sections ending with `:`
- Bullet points with • symbols
- Proper paragraph spacing
- Bold text for emphasis

### 🚀 Quick Start

1. **Visit Generator:** https://adrazz-cyber.github.io/n8n-chatbot-widget-generator/
2. **Configure Settings:**
   - Enter N8N webhook URL
   - Customize appearance
   - Write formatted welcome message
   - Adjust message formatting controls
3. **Generate Code:** Click to create embed script
4. **Deploy:** Add to any website's HTML

### 📈 Automatic Updates

#### Updates Without New Code:
- ✅ Text formatting improvements
- ✅ Responsive sizing
- ✅ Bug fixes
- ✅ Performance enhancements

#### Requires New Embed Code:
- ❌ New configuration options
- ❌ Message formatting controls
- ❌ Additional features

### 🔧 Configuration Example

```javascript
N8NChatbot.init({
  "n8nChatUrl": "your-webhook-url",
  "theme": {
    "button": {
      "backgroundColor": "#009BDD",
      "shape": "rounded",
      "size": 54
    },
    "chatWindow": {
      "title": "Welcome",
      "headerTextColor": "#FFFFFF",
      "welcomeMessage": "Hello!\\n\\n- Our Services:\\n- Professional support",
      "messageFormatting": {
        "lineHeight": 1.6,
        "paragraphSpacing": 10,
        "bulletSpacing": 8,
        "headerMargin": 16
      }
    }
  }
});
```

### 📁 Project Structure

```
n8n-chatbot-widget-enhanced/
├── index.html              # Generator interface
├── script-enhanced.js      # Generator logic
├── n8n-chatbot-widget.js   # Widget implementation
├── styles.css              # Generator styling
├── README-Enhanced.md      # This documentation
├── test-*.html             # Test files for features
└── webhook-tester.html     # Webhook testing tool
```

### 🌟 Advantages Over Competitors

| Feature | Our Generator | n8nchatui.com ($39) |
|---------|--------------|-------------------|
| Price | **FREE** | $39 |
| Typography System | **5 Fonts** | Basic |
| Header Text Color | **Yes** | No |
| Text Formatting | **Advanced** | Standard |
| Responsive Design | **Full** | Limited |
| Save/Load Config | **Yes** | No |
| Self-hosted | **Yes** | No |
| Open Source | **Yes** | No |

### 🤝 Contributing

This is an open-source project under MIT license. Contributions welcome!

### 📞 Support

- **GitHub Issues:** Report bugs or request features
- **Documentation:** Comprehensive guides included
- **Test Files:** Multiple examples for every feature

---

**Version:** 16 | **Updated:** May 28, 2025 | **License:** MIT