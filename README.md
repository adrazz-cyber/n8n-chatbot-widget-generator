# N8N Chatbot Widget Generator

🎉 **Now Enhanced with Typography Controls!** See [README-Enhanced.md](README-Enhanced.md) for new features.

A customisable web application for generating N8N chatbot widget embed codes with a visual configuration interface.

## ✨ Enhanced Features (NEW!)

- **Typography Control**: Choose from 13 professional fonts for different sections
- **5 Font Categories**: Title, Message, Input, Tooltip, and Footer fonts
- **Privacy-First**: Clean placeholders with no pre-filled company data
- **Enhanced Preview**: See font selections in real-time
- **Professional Output**: Clean, organised embed code with typography settings

## Core Features

- **Visual Configuration Interface**: Easy-to-use web interface for customising chatbot appearance
- **Real-time Preview**: See how your chatbot will look on your website
- **Colour Customisation**: Change all colours including button, messages, backgrounds, and text
- **Font and Size Controls**: Adjust font sizes and widget dimensions
- **Save/Load Configurations**: Save your settings as JSON files and load them later
- **One-click Code Generation**: Generate ready-to-use embed code
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

1. **Open the Application**
   - Open `index.html` in your web browser
   - The application will load with default BlueChilli settings

2. **Configure Your Webhook**
   - Enter your N8N webhook URL in the "N8N Webhook URL" field
   - This should be your n8n chat trigger node webhook URL

3. **Customise Appearance**
   - Adjust colours using the colour pickers
   - Modify sizes using the sliders
   - Change text content in the text fields
   - Use the preview to see changes in real-time

4. **Generate Code**
   - Click "Preview Widget" to see how it will look
   - Click "Generate Embed Code" to create the embed code
   - Copy the generated code and paste it into your website

## Configuration Sections

### Basic Configuration
- Webhook URL
- Chat title and welcome message
- Input placeholder text

### Button Settings
- Button colour and size
- Position (right and bottom margins)
- Custom icon URL

### Chat Window Settings
- Width and height
- Background colour
- Font size

### Message Styling
- Bot message colours
- User message colours
- Text colours

### Input Field
- Background and text colours
- Send button colour

### Footer Settings
- Company name and link
- Footer text colour

### Tooltip Settings
- Tooltip message and colours

## File Structure

```
n8n website chatbot/
├── index.html          # Main application interface
├── styles.css          # Styling and layout
├── script.js          # Application logic and functionality
└── README.md          # This documentation
```

## Usage Instructions

### 1. Basic Setup
1. Enter your N8N webhook URL
2. Customise the basic text content (title, welcome message, etc.)

### 2. Styling
1. Use colour pickers to match your brand colours
2. Adjust sizes using the sliders
3. Preview changes in real-time

### 3. Advanced Configuration
1. Set custom icon URLs for branding
2. Configure tooltip messages
3. Adjust footer company information

### 4. Code Generation
1. Click "Generate Embed Code" when satisfied with appearance
2. Copy the generated code
3. Paste into your website's HTML where you want the chatbot to appear

### 5. Save/Load Configurations
- **Save**: Click "Save Configuration" to download settings as JSON
- **Load**: Click "Load Configuration" to upload a saved JSON file

## Integration with N8N

The generated code uses the n8n chat UI library. Make sure your N8N workflow includes:

1. **Chat Trigger Node**: Configured to receive webhook requests
2. **Response Processing**: Logic to handle user messages
3. **Response Format**: Return responses in the expected format

### Expected N8N Response Format
```json
{
  "message": "Your bot's response text here"
}
```

## Customisation Tips

1. **Brand Colours**: Use your company's primary and secondary colours
2. **Icon**: Use your company logo or custom chat icon
3. **Messages**: Personalise welcome messages and placeholders
4. **Size**: Adjust based on your website's layout and user experience needs

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Troubleshooting

### Widget Not Appearing
- Check that the webhook URL is correct
- Ensure the N8N workflow is active
- Verify there are no JavaScript errors in browser console

### Styling Issues
- Clear browser cache
- Check for CSS conflicts with your website
- Ensure the widget has enough space to display

### CORS Issues
- Configure your N8N instance to allow cross-origin requests
- Check your server's CORS settings

## Support

For issues related to:
- **N8N Configuration**: Check N8N documentation
- **Widget Styling**: Modify the generated CSS in the embed code
- **Integration**: Ensure proper webhook setup in your N8N workflow

## Version History

- **v1.0**: Initial release with full configuration interface
- **v1.1**: Added save/load functionality
- **v1.2**: Improved preview system and responsive design

---

Created for SEO it Right Ltd - N8N Chatbot Integration Project