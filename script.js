// Global variables
let currentConfig = {};
let previewWidget = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadDefaultConfig();
});

function initializeApp() {
    console.log('N8N Chatbot Widget Generator initialized');
    updateRangeValues();
}

function setupEventListeners() {
    // Range input listeners
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(input => {
        input.addEventListener('input', function() {
            updateRangeValues();
            updatePreview();
        });
    });

    // Color input listeners
    const colorInputs = document.querySelectorAll('input[type="color"]');
    colorInputs.forEach(input => {
        input.addEventListener('change', updatePreview);
    });

    // Text input listeners
    const textInputs = document.querySelectorAll('input[type="text"], input[type="url"]');
    textInputs.forEach(input => {
        input.addEventListener('input', updatePreview);
    });
}

function updateRangeValues() {
    const rangeInputs = [
        { id: 'buttonSize', suffix: 'px' },
        { id: 'buttonRight', suffix: 'px' },
        { id: 'buttonBottom', suffix: 'px' },
        { id: 'chatWidth', suffix: 'px' },
        { id: 'chatHeight', suffix: 'px' },
        { id: 'fontSize', suffix: 'px' }
    ];

    rangeInputs.forEach(range => {
        const input = document.getElementById(range.id);
        const valueDisplay = document.getElementById(range.id + 'Value');
        if (input && valueDisplay) {
            valueDisplay.textContent = input.value + range.suffix;
        }
    });
}

function loadDefaultConfig() {
    const defaultConfig = {
        webhookUrl: 'https://your-n8n-instance.com/webhook/your-webhook-id/chat',
        chatTitle: 'Welcome to BlueChilli',
        welcomeMessage: 'Hello! Welcome to BlueChilli',
        placeholderText: 'How can I help!',
        buttonColor: '#009BDD',
        buttonSize: 54,
        buttonRight: 25,
        buttonBottom: 25,
        customIcon: 'https://www.svgrepo.com/show/339963/chat-bot.svg',
        chatWidth: 400,
        chatHeight: 600,
        chatBackgroundColor: '#4d4d4d',
        fontSize: 16,
        botMessageColor: '#009BDD',
        botTextColor: '#FFFFFF',
        userMessageColor: '#000000',
        userTextColor: '#A3A3A3',
        inputBackgroundColor: '#000000',
        inputTextColor: '#ffffff',
        sendButtonColor: '#009BDD',
        companyName: 'BlueChilli Ai',
        companyLink: 'https://bluechillidp.co.uk/',
        footerTextColor: '#151515',
        tooltipMessage: 'Hello 👋 can I help!',
        tooltipBackgroundColor: '#009BDD',
        tooltipTextColor: '#FFFFFF'
    };

    // Apply default values to form fields
    try {
        Object.keys(defaultConfig).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.value = defaultConfig[key];
            }
        });

        currentConfig = defaultConfig;
        updateRangeValues();
        generateCode();
    } catch (error) {
        console.error('Error loading default config:', error);
    }
}

function collectConfig() {
    const config = {
        webhookUrl: document.getElementById('webhookUrl').value,
        chatTitle: document.getElementById('chatTitle').value,
        welcomeMessage: document.getElementById('welcomeMessage').value,
        placeholderText: document.getElementById('placeholderText').value,
        buttonColor: document.getElementById('buttonColor').value,
        buttonSize: parseInt(document.getElementById('buttonSize').value),
        buttonRight: parseInt(document.getElementById('buttonRight').value),
        buttonBottom: parseInt(document.getElementById('buttonBottom').value),
        customIcon: document.getElementById('customIcon').value,
        chatWidth: parseInt(document.getElementById('chatWidth').value),
        chatHeight: parseInt(document.getElementById('chatHeight').value),
        chatBackgroundColor: document.getElementById('chatBackgroundColor').value,
        fontSize: parseInt(document.getElementById('fontSize').value),
        botMessageColor: document.getElementById('botMessageColor').value,
        botTextColor: document.getElementById('botTextColor').value,
        userMessageColor: document.getElementById('userMessageColor').value,
        userTextColor: document.getElementById('userTextColor').value,
        inputBackgroundColor: document.getElementById('inputBackgroundColor').value,
        inputTextColor: document.getElementById('inputTextColor').value,
        sendButtonColor: document.getElementById('sendButtonColor').value,
        companyName: document.getElementById('companyName').value,
        companyLink: document.getElementById('companyLink').value,
        footerTextColor: document.getElementById('footerTextColor').value,
        tooltipMessage: document.getElementById('tooltipMessage').value,
        tooltipBackgroundColor: document.getElementById('tooltipBackgroundColor').value,
        tooltipTextColor: document.getElementById('tooltipTextColor').value
    };

    currentConfig = config;
    return config;
}

function generateCode() {
    try {
        const config = collectConfig();
        
        const embedCode = `<script src="https://adrazz-cyber.github.io/n8n-chatbot-widget-generator/n8n-chatbot-widget.js"></script>
<script>
  N8NChatbot.init({
    "n8nChatUrl": "${config.webhookUrl}",
    "theme": {
      "button": {
        "backgroundColor": "${config.buttonColor}",
        "right": ${config.buttonRight},
        "bottom": ${config.buttonBottom},
        "size": ${config.buttonSize},
        "iconColor": "#FFFFFF",
        "customIconSrc": "${config.customIcon}",
        "customIconSize": 60,
        "customIconBorderRadius": 15,
        "autoWindowOpen": {
          "autoOpen": true,
          "openDelay": 2
        },
        "borderRadius": "rounded"
      },
      "tooltip": {
        "showTooltip": true,
        "tooltipMessage": "${config.tooltipMessage}",
        "tooltipBackgroundColor": "${config.tooltipBackgroundColor}",
        "tooltipTextColor": "${config.tooltipTextColor}",
        "tooltipFontSize": 15
      },
      "chatWindow": {
        "borderRadiusStyle": "rounded",
        "avatarBorderRadius": 25,
        "messageBorderRadius": 6,
        "showTitle": true,
        "title": "${config.chatTitle}",
        "titleAvatarSrc": "${config.customIcon}",
        "welcomeMessage": "${config.welcomeMessage}",
        "errorMessage": "Please try again",
        "backgroundColor": "${config.chatBackgroundColor}",
        "height": ${config.chatHeight},
        "width": ${config.chatWidth},
        "fontSize": ${config.fontSize},
        "starterPromptFontSize": 15,
        "clearChatOnReload": true,
        "botMessage": {
          "backgroundColor": "${config.botMessageColor}",
          "textColor": "${config.botTextColor}",
          "showAvatar": true,
          "avatarSrc": "https://www.svgrepo.com/show/334455/bot.svg"
        },
        "userMessage": {
          "backgroundColor": "${config.userMessageColor}",
          "textColor": "${config.userTextColor}",
          "showAvatar": true,
          "avatarSrc": "https://www.svgrepo.com/show/532363/user-alt-1.svg"
        },
        "textInput": {
          "placeholder": "${config.placeholderText}",
          "backgroundColor": "${config.inputBackgroundColor}",
          "textColor": "${config.inputTextColor}",
          "sendButtonColor": "${config.sendButtonColor}",
          "maxChars": 250,
          "maxCharsWarningMessage": "You exceeded the characters limit. Please input less than 250 characters.",
          "autoFocus": false,
          "borderRadius": 6,
          "sendButtonBorderRadius": 50
        },
        "footer": {
          "companyLink": "${config.companyLink}",
          "text": "Powered by",
          "company": "${config.companyName}",
          "textColor": "${config.footerTextColor}"
        }
      }
    }
  });
</script>`;

        const embedCodeElement = document.getElementById('embedCode');
        if (embedCodeElement) {
            embedCodeElement.value = embedCode;
        } else {
            console.error('embedCode element not found');
        }
    } catch (error) {
        console.error('Error generating code:', error);
    }
}

function previewWidget() {
    try {
        const config = collectConfig();
        
        // Create a preview mockup since we can't actually embed the widget
        const previewContainer = document.getElementById('previewContainer');
        
        if (!previewContainer) {
            console.error('previewContainer element not found');
            return;
        }
        
        // Clear existing preview
        previewContainer.innerHTML = '';
        
        // Create mockup
        const mockup = createMockupWidget(config);
        previewContainer.appendChild(mockup);
        
        generateCode();
    } catch (error) {
        console.error('Error in previewWidget:', error);
    }
}

function createMockupWidget(config) {
    const mockup = document.createElement('div');
    mockup.className = 'preview-mockup';
    mockup.style.position = 'relative';
    mockup.style.height = '400px';
    mockup.style.background = '#f0f0f0';
    mockup.style.borderRadius = '10px';
    mockup.style.overflow = 'hidden';
    
    // Create website mockup
    const website = document.createElement('div');
    website.style.padding = '20px';
    website.style.background = 'white';
    website.style.height = '100%';
    website.innerHTML = `
        <h3 style="margin-bottom: 15px; color: #333;">Your Website</h3>
        <p style="color: #666; line-height: 1.6;">This is how your chatbot will appear on your website.</p>
    `;
    
    // Create chat button mockup
    const chatButton = document.createElement('div');
    chatButton.style.position = 'absolute';
    chatButton.style.right = config.buttonRight + 'px';
    chatButton.style.bottom = config.buttonBottom + 'px';
    chatButton.style.width = config.buttonSize + 'px';
    chatButton.style.height = config.buttonSize + 'px';
    chatButton.style.backgroundColor = config.buttonColor;
    chatButton.style.borderRadius = '50%';
    chatButton.style.display = 'flex';
    chatButton.style.alignItems = 'center';
    chatButton.style.justifyContent = 'center';
    chatButton.style.cursor = 'pointer';
    chatButton.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    chatButton.style.transition = 'all 0.3s ease';
    
    // Add icon
    const icon = document.createElement('img');
    icon.src = config.customIcon;
    icon.style.width = '60%';
    icon.style.height = '60%';
    icon.style.filter = 'brightness(0) invert(1)';
    chatButton.appendChild(icon);
    
    // Add hover effect
    chatButton.addEventListener('mouseenter', () => {
        chatButton.style.transform = 'scale(1.1)';
    });
    chatButton.addEventListener('mouseleave', () => {
        chatButton.style.transform = 'scale(1)';
    });
    
    mockup.appendChild(website);
    mockup.appendChild(chatButton);
    
    return mockup;
}

function updatePreview() {
    // Auto-update preview when values change
    setTimeout(previewWidget, 100);
}

function togglePreview() {
    const previewContainer = document.getElementById('previewContainer');
    previewContainer.style.display = previewContainer.style.display === 'none' ? 'block' : 'none';
}

function copyCode() {
    const embedCode = document.getElementById('embedCode');
    embedCode.select();
    embedCode.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        
        // Show success feedback
        const copyButton = document.querySelector('.btn-copy');
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        copyButton.style.background = 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)';
        
        setTimeout(() => {
            copyButton.textContent = originalText;
            copyButton.style.background = 'linear-gradient(135deg, #9f7aea 0%, #805ad5 100%)';
        }, 2000);
        
    } catch (err) {
        console.error('Failed to copy code: ', err);
        alert('Failed to copy code. Please select and copy manually.');
    }
}

function saveConfig() {
    const config = collectConfig();
    const configJson = JSON.stringify(config, null, 2);
    
    // Create and download file
    const blob = new Blob([configJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chatbot-config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show success message
    alert('Configuration saved successfully!');
}

function loadConfig() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const config = JSON.parse(e.target.result);
                    applyConfig(config);
                    alert('Configuration loaded successfully!');
                } catch (error) {
                    alert('Error loading configuration file: ' + error.message);
                }
            };
            reader.readAsText(file);
        }
    };
    input.click();
}

function applyConfig(config) {
    // Apply loaded configuration to form fields
    Object.keys(config).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.value = config[key];
        }
    });
    
    // Update display values and preview
    updateRangeValues();
    previewWidget();
}

// Initialize with default preview
setTimeout(() => {
    previewWidget();
}, 500);
