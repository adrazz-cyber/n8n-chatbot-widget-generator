# N8N Chatbot Widget Generator - Enhanced Edition

## 🚀 Major Enhancements Added

### ✨ New Typography Features
- **5 Separate Font Controls:** Choose different fonts for each section:
  - Title Font
  - Message Font (Bot & User messages)
  - Input Field Font
  - Tooltip Font
  - Footer Font

### 🛡️ Privacy & Security Improvements
- **Clean Placeholders:** Removed all company-specific references
- **Safe Webhook Field:** N8N Webhook URL field is now empty by default
- **Generic Content:** All default text is now brand-neutral

### 📚 Available Font Options
- Inter
- Roboto
- Open Sans
- Lato
- Montserrat
- Poppins
- Source Sans Pro
- Nunito
- Work Sans
- Playfair Display
- Merriweather
- Georgia
- Times New Roman

## 🎯 Key Features

### Typography Control
- **Individual Font Selection:** Each section can use a different font
- **Live Font Preview:** Font dropdowns show the selected font in real-time
- **Professional Options:** Curated selection of web-safe fonts

### Enhanced Preview System
- **Font-Aware Preview:** Shows which fonts are being used
- **Visual Mockup:** Displays chatbot button and tooltip with actual styling
- **Real-time Updates:** Preview updates automatically when settings change

### Comprehensive Configuration
- **Complete Settings Export:** All typography and styling options saved
- **Enhanced JSON Format:** Includes all new font settings
- **Backwards Compatible:** Can load older configurations

### Clean Code Generation
- **Font Properties Included:** Generated embed code includes all font selections
- **Organized Structure:** Clear separation of font settings in the code
- **Professional Output:** Clean, readable JavaScript code

## 📁 File Structure

```
n8n-chatbot-widget-enhanced/
├── index.html              # Main application with typography controls
├── script-enhanced.js      # Enhanced JavaScript with font handling
├── demo.html              # Updated demo page
├── styles.css             # Existing styles (compatible)
└── README-Enhanced.md     # This documentation
```

## 🔧 How to Use the Enhanced Features

### 1. Typography Configuration
1. **Select Title Font:** Choose font for the chat window title
2. **Select Message Font:** Choose font for bot and user messages
3. **Select Input Font:** Choose font for the input field
4. **Select Tooltip Font:** Choose font for hover tooltips
5. **Select Footer Font:** Choose font for footer/company information

### 2. Real-time Preview
- Font selections are immediately visible in dropdown styling
- Preview section shows font combinations
- Generate preview to see visual mockup

### 3. Configuration Management
- **Save Enhanced Config:** Exports complete setup including fonts
- **Load Configuration:** Imports all settings including typography
- **File Format:** `chatbot-config-enhanced.json`

### 4. Code Generation
- All font settings automatically included in embed code
- Professional, clean JavaScript output
- Ready to embed on any website

## 🎨 Design Improvements

### User Experience
- **Typography Section:** Dedicated section for font controls
- **Organised Layout:** Logical grouping of related settings
- **Visual Feedback:** Font dropdowns styled with selected fonts

### Privacy Enhancements
- **Empty Webhook Field:** No pre-filled sensitive data
- **Generic Placeholders:** 
  - "Welcome to Our Chat" (instead of company names)
  - "Hello! How can we help you today?" (generic greeting)
  - "Type your message here..." (standard placeholder)
  - "Your Company" (generic company name)

### Code Quality
- **Enhanced JavaScript:** More robust font handling
- **Error Prevention:** Better validation and fallbacks
- **Professional Output:** Clean, organised embed code

## 🔄 Migration from Standard Version

The enhanced version is fully compatible with existing configurations:

1. **Load Existing Config:** Your old configurations will work
2. **Default Fonts:** Missing font settings default to 'Inter'
3. **Enhanced Export:** New saves include all typography options

## 🌟 Benefits of Enhanced Version

### Brand Consistency
- **Typography Control:** Match your brand's font choices
- **Professional Appearance:** Cohesive font selection across all elements
- **Customisation Depth:** Fine-grained control over every text element

### Privacy & Security
- **Clean Setup:** No pre-filled company data
- **Safe Defaults:** Empty webhook URL prevents accidental exposure
- **Professional Presentation:** Generic, professional placeholders

### Development Workflow
- **Better Organisation:** Typography controls grouped logically
- **Enhanced Preview:** See exactly how fonts will appear
- **Professional Code:** Generated code is clean and well-structured

## 🚀 Deployment

The enhanced version works exactly like the standard version:

1. **Local Development:** Open `index.html` in your browser
2. **Web Hosting:** Upload files to any web server
3. **GitHub Pages:** Push to repository for automatic hosting

## 📋 Generated Code Example

```javascript
<script type="module" defer>
  import Chatbot from "https://cdn.n8nchatui.com/v1/pole-embed-yard.js";
  Chatbot.init({
    "n8nChatUrl": "YOUR_WEBHOOK_URL",
    "theme": {
      "chatWindow": {
        "title": "Welcome to Our Chat",
        "titleFont": "Montserrat",
        "messageFont": "Roboto",
        "textInput": {
          "font": "Inter"
        },
        "footer": {
          "font": "Lato"
        },
        "tooltip": {
          "font": "Poppins"
        }
      }
    }
  });
</script>
```

## 🎯 Perfect For

- **Brand-Conscious Businesses:** Need specific typography
- **Privacy-Focused Users:** Want clean, secure setup process  
- **Professional Developers:** Require fine-grained control
- **Multi-Brand Agencies:** Need flexible font options

---

**🎉 Upgrade Complete!** Your N8N Chatbot Widget Generator now offers professional typography control while maintaining complete privacy and security.