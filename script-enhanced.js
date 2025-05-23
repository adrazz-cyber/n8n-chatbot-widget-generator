// Enhanced N8N Chatbot Widget Generator with Font Options
// Enhanced version with typography controls

document.addEventListener('DOMContentLoaded', function() {
    console.log('Enhanced Chatbot Widget Generator Loading...');
    
    // Initialize on page load
    setTimeout(function() {
        generateCode();
        updateRangeValues();
        setupFontPreview();
        initialisePreviewToggle();
        previewWidget(); // Initialize preview with current settings
    }, 100);
});

// Setup font preview functionality
function setupFontPreview() {
    const fontSelects = document.querySelectorAll('select[id$="Font"]');
    fontSelects.forEach(select => {
        select.style.fontFamily = select.value;
        select.addEventListener('change', function() {
            this.style.fontFamily = this.value;
            generateCode(); // Update code when font changes
        });
    });
}

// Global functions that buttons call
function generateCode() {
    console.log('Generate Code clicked');
    try {
        const webhookUrl = document.getElementById('webhookUrl')?.value || '';
        const chatTitle = document.getElementById('chatTitle')?.value || 'Welcome to Our Chat';
        const welcomeMessage = document.getElementById('welcomeMessage')?.value || 'Hello! How can we help you today?';
        const placeholderText = document.getElementById('placeholderText')?.value || 'Type your message here...';
        const buttonColor = document.getElementById('buttonColor')?.value || '#009BDD';
        const buttonSize = document.getElementById('buttonSize')?.value || '54';
        const buttonRight = document.getElementById('buttonRight')?.value || '25';
        const buttonBottom = document.getElementById('buttonBottom')?.value || '25';
        const customIcon = document.getElementById('customIcon')?.value || 'https://www.svgrepo.com/show/339963/chat-bot.svg';
        
        // New icon customisation options
        const iconSize = document.getElementById('iconSize')?.value || '60';
        const iconBorderRadius = document.getElementById('iconBorderRadius')?.value || '15';
        const iconColor = document.getElementById('iconColor')?.value || '#FFFFFF';
        
        // Avatar settings
        const botAvatarUrl = document.getElementById('botAvatarUrl')?.value || 'https://www.svgrepo.com/show/339963/chat-bot.svg';
        const userAvatarUrl = document.getElementById('userAvatarUrl')?.value || 'https://www.svgrepo.com/show/382097/male-avatar-boy-face-man-user-9.svg';
        const showBotAvatar = document.getElementById('showBotAvatar')?.checked ?? true;
        const showUserAvatar = document.getElementById('showUserAvatar')?.checked ?? true;
        const avatarSize = document.getElementById('avatarSize')?.value || '32';
        const avatarBorderRadius = document.getElementById('avatarBorderRadius')?.value || '50';
        
        // New toggle options
        const showTooltip = document.getElementById('showTooltip')?.checked ?? true;
        const autoOpenWidget = document.getElementById('autoOpenWidget')?.checked ?? false;
        const showTitleSection = document.getElementById('showTitleSection')?.checked ?? true;
        const clearChatOnReload = document.getElementById('clearChatOnReload')?.checked ?? false;
        
        // Font settings
        const titleFont = document.getElementById('titleFont')?.value || 'Inter';
        const messageFont = document.getElementById('messageFont')?.value || 'Inter';
        const inputFont = document.getElementById('inputFont')?.value || 'Inter';
        const tooltipFont = document.getElementById('tooltipFont')?.value || 'Inter';
        const footerFont = document.getElementById('footerFont')?.value || 'Inter';
        
        // Additional styling options
        const chatWidth = document.getElementById('chatWidth')?.value || '400';
        const chatHeight = document.getElementById('chatHeight')?.value || '600';
        const chatBackgroundColor = document.getElementById('chatBackgroundColor')?.value || '#4d4d4d';
        const fontSize = document.getElementById('fontSize')?.value || '16';
        const botMessageColor = document.getElementById('botMessageColor')?.value || '#009BDD';
        const botTextColor = document.getElementById('botTextColor')?.value || '#FFFFFF';
        const userMessageColor = document.getElementById('userMessageColor')?.value || '#000000';
        const userTextColor = document.getElementById('userTextColor')?.value || '#A3A3A3';
        const inputBackgroundColor = document.getElementById('inputBackgroundColor')?.value || '#000000';
        const inputTextColor = document.getElementById('inputTextColor')?.value || '#ffffff';
        const sendButtonColor = document.getElementById('sendButtonColor')?.value || '#009BDD';
        
        const companyName = document.getElementById('companyName')?.value || 'Your Company';
        const companyLink = document.getElementById('companyLink')?.value || '';
        const footerTextColor = document.getElementById('footerTextColor')?.value || '#151515';
        const tooltipMessage = document.getElementById('tooltipMessage')?.value || 'Hello! Can I help you?';
        const tooltipBackgroundColor = document.getElementById('tooltipBackgroundColor')?.value || '#009BDD';
        const tooltipTextColor = document.getElementById('tooltipTextColor')?.value || '#FFFFFF';

        const embedCode = `<script src="https://adrazz-cyber.github.io/n8n-chatbot-widget-generator/n8n-chatbot-widget.js?v=2"></script>
<script>
  N8NChatbot.init({
    "n8nChatUrl": "${webhookUrl}",
    "theme": {
      "button": {
        "backgroundColor": "${buttonColor}",
        "right": ${buttonRight},
        "bottom": ${buttonBottom},
        "size": ${buttonSize},
        "iconColor": "${iconColor}",
        "customIconSrc": "${customIcon}",
        "iconSize": "${iconSize}%",
        "iconBorderRadius": "${iconBorderRadius}px",
        "borderRadius": "rounded",
        "autoOpen": ${autoOpenWidget}
      },
      "chatWindow": {
        "title": "${chatTitle}",
        "titleFont": "${titleFont}",
        "welcomeMessage": "${welcomeMessage}",
        "width": ${chatWidth},
        "height": ${chatHeight},
        "backgroundColor": "${chatBackgroundColor}",
        "fontSize": "${fontSize}px",
        "messageFont": "${messageFont}",
        "borderColor": "#e1e1e1",
        "borderWidth": "1px",
        "borderRadius": "10px",
        "showTitleSection": ${showTitleSection},
        "clearChatOnReload": ${clearChatOnReload},
        "avatars": {
          "bot": {
            "src": "${botAvatarUrl}",
            "show": ${showBotAvatar}
          },
          "user": {
            "src": "${userAvatarUrl}",
            "show": ${showUserAvatar}
          },
          "size": "${avatarSize}px",
          "borderRadius": "${avatarBorderRadius}%"
        },
        "textInput": {
          "placeholder": "${placeholderText}",
          "backgroundColor": "${inputBackgroundColor}",
          "textColor": "${inputTextColor}",
          "font": "${inputFont}",
          "sendButtonColor": "${sendButtonColor}",
          "borderColor": "#cccccc",
          "borderWidth": "1px"
        },
        "botMessage": {
          "backgroundColor": "${botMessageColor}",
          "textColor": "${botTextColor}",
          "font": "${messageFont}"
        },
        "userMessage": {
          "backgroundColor": "${userMessageColor}",
          "textColor": "${userTextColor}",
          "font": "${messageFont}"
        },
        "footer": {
          "companyName": "${companyName}",
          "companyLink": "${companyLink}",
          "textColor": "${footerTextColor}",
          "font": "${footerFont}"
        },
        "tooltip": {
          "message": "${tooltipMessage}",
          "backgroundColor": "${tooltipBackgroundColor}",
          "textColor": "${tooltipTextColor}",
          "font": "${tooltipFont}",
          "show": ${showTooltip}
        }
      }
    }
  });
</script>`;

        const embedCodeElement = document.getElementById('embedCode');
        if (embedCodeElement) {
            embedCodeElement.value = embedCode;
            console.log('Enhanced code generated successfully');
        } else {
            console.error('embedCode element not found');
        }
    } catch (error) {
        console.error('Error generating code:', error);
        alert('Error generating code: ' + error.message);
    }
}

function previewWidget() {
    console.log('Preview Widget clicked');
    try {
        const titleFont = document.getElementById('titleFont')?.value || 'Inter';
        const messageFont = document.getElementById('messageFont')?.value || 'Inter';
        const tooltipFont = document.getElementById('tooltipFont')?.value || 'Inter';
        const chatTitle = document.getElementById('chatTitle')?.value || 'Welcome to Our Chat';
        const tooltipMessage = document.getElementById('tooltipMessage')?.value || 'Hello! Can I help you?';
        const buttonColor = document.getElementById('buttonColor')?.value || '#009BDD';
        const tooltipBackgroundColor = document.getElementById('tooltipBackgroundColor')?.value || '#009BDD';
        const tooltipTextColor = document.getElementById('tooltipTextColor')?.value || '#FFFFFF';
        
        // Get button and icon settings
        const buttonSize = document.getElementById('buttonSize')?.value || '54';
        const buttonRight = document.getElementById('buttonRight')?.value || '25';
        const buttonBottom = document.getElementById('buttonBottom')?.value || '25';
        const customIcon = document.getElementById('customIcon')?.value || '';
        const iconSize = document.getElementById('iconSize')?.value || '60';
        const iconBorderRadius = document.getElementById('iconBorderRadius')?.value || '15';
        const iconColor = document.getElementById('iconColor')?.value || '#FFFFFF';
        
        // Get avatar settings
        const botAvatarUrl = document.getElementById('botAvatarUrl')?.value || 'https://www.svgrepo.com/show/339963/chat-bot.svg';
        const userAvatarUrl = document.getElementById('userAvatarUrl')?.value || 'https://www.svgrepo.com/show/382097/male-avatar-boy-face-man-user-9.svg';
        const showBotAvatar = document.getElementById('showBotAvatar')?.checked ?? true;
        const showUserAvatar = document.getElementById('showUserAvatar')?.checked ?? true;
        const avatarSize = document.getElementById('avatarSize')?.value || '32';
        const avatarBorderRadius = document.getElementById('avatarBorderRadius')?.value || '50';
        
        const previewContainer = document.getElementById('previewContainer');
        if (previewContainer) {
            // Determine what to show in the button
            let buttonContent = '';
            if (customIcon && customIcon.trim() !== '') {
                buttonContent = `<img src="${customIcon}" style="
                    width: ${iconSize}%; 
                    height: ${iconSize}%; 
                    object-fit: contain;
                    border-radius: ${iconBorderRadius}px;
                " onerror="this.style.display='none'; this.nextSibling.style.display='block';">
                <span style="display: none; color: ${iconColor}; font-size: 20px;">💬</span>`;
            } else {
                buttonContent = `<span style="color: ${iconColor}; font-size: 20px;">💬</span>`;
            }
            
            previewContainer.innerHTML = `
                <div class="preview-mockup">
                    <div class="mockup-website">
                        <div class="mockup-header">Your Website Preview</div>
                        <div class="mockup-content">
                            <p>This is how your chatbot will appear on your website.</p>
                            <div style="position: relative; height: 200px;">
                                <div style="
                                    position: absolute;
                                    bottom: ${buttonBottom}px;
                                    right: ${buttonRight}px;
                                    width: ${buttonSize}px;
                                    height: ${buttonSize}px;
                                    background-color: ${buttonColor};
                                    border-radius: 50%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    cursor: pointer;
                                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                                ">${buttonContent}</div>
                                <div style="
                                    position: absolute;
                                    bottom: 90px;
                                    right: 25px;
                                    background-color: ${tooltipBackgroundColor};
                                    color: ${tooltipTextColor};
                                    padding: 8px 12px;
                                    border-radius: 8px;
                                    font-family: '${tooltipFont}', sans-serif;
                                    font-size: 14px;
                                    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                                    max-width: 200px;
                                ">${tooltipMessage}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="
                    margin-top: 20px;
                    padding: 15px;
                    background: white;
                    border-radius: 10px;
                    border: 1px solid #e1e1e1;
                ">
                    <h4 style="margin: 0 0 10px 0; font-family: '${titleFont}', sans-serif;">${chatTitle}</h4>
                    <p style="margin: 0 0 10px 0; font-family: '${messageFont}', sans-serif; color: #666;">
                        Font Preview: Title uses ${titleFont}, Messages use ${messageFont}
                    </p>

                    <!-- Avatar and Message Examples -->
                    <div style="margin: 15px 0;">
                        <h5 style="margin: 0 0 10px 0; color: #333; font-size: 14px;">Avatar Preview:</h5>
                        
                        <!-- Bot Message with Avatar -->
                        <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px;">
                            ${showBotAvatar ? `
                                <div style="
                                    width: ${avatarSize}px;
                                    height: ${avatarSize}px;
                                    border-radius: ${avatarBorderRadius}%;
                                    background-color: transparent;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    font-size: 14px;
                                    color: #666;
                                    flex-shrink: 0;
                                    overflow: hidden;
                                ">
                                    ${botAvatarUrl ? `<img src="${botAvatarUrl}" alt="Bot" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.parentNode.innerHTML='🤖';">` : '🤖'}
                                </div>
                            ` : ''}
                            <div style="
                                background: #009BDD;
                                color: white;
                                padding: 8px 12px;
                                border-radius: 15px;
                                font-family: '${messageFont}', sans-serif;
                                font-size: 14px;
                                max-width: 200px;
                            ">Hello! Welcome to our chat!</div>
                        </div>
                        
                        <!-- User Message with Avatar -->
                        <div style="display: flex; align-items: flex-start; gap: 10px; justify-content: flex-end; margin-bottom: 10px; flex-direction: row-reverse;">
                            ${showUserAvatar ? `
                                <div style="
                                    width: ${avatarSize}px;
                                    height: ${avatarSize}px;
                                    border-radius: ${avatarBorderRadius}%;
                                    background-color: transparent;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    font-size: 14px;
                                    color: #666;
                                    flex-shrink: 0;
                                    overflow: hidden;
                                ">
                                    ${userAvatarUrl ? `<img src="${userAvatarUrl}" alt="User" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.parentNode.innerHTML='👤';">` : '👤'}
                                </div>
                            ` : ''}
                            <div style="
                                background: #e5e5e5;
                                color: #333;
                                padding: 8px 12px;
                                border-radius: 15px;
                                font-family: '${messageFont}', sans-serif;
                                font-size: 14px;
                                max-width: 200px;
                            ">Hi there!</div>
                        </div>
                    </div>
                    <div style="
                        margin-top: 10px;
                        padding: 8px 12px;
                        background: #f8f8f8;
                        border: 1px solid #cccccc;
                        border-radius: 6px;
                        font-family: '${messageFont}', sans-serif;
                        color: #999;
                        font-size: 14px;
                    ">Input field border preview</div>
                </div>
            `;
            console.log('Enhanced preview updated');
        } else {
            console.error('previewContainer not found');
        }
        generateCode();
    } catch (error) {
        console.error('Error in preview:', error);
        alert('Error in preview: ' + error.message);
    }
}

function saveConfig() {
    console.log('Save Config clicked');
    try {
        const config = {
            // Basic settings
            webhookUrl: document.getElementById('webhookUrl')?.value || '',
            chatTitle: document.getElementById('chatTitle')?.value || '',
            welcomeMessage: document.getElementById('welcomeMessage')?.value || '',
            placeholderText: document.getElementById('placeholderText')?.value || '',
            
            // Font settings
            titleFont: document.getElementById('titleFont')?.value || 'Inter',
            messageFont: document.getElementById('messageFont')?.value || 'Inter',
            inputFont: document.getElementById('inputFont')?.value || 'Inter',
            tooltipFont: document.getElementById('tooltipFont')?.value || 'Inter',
            footerFont: document.getElementById('footerFont')?.value || 'Inter',
            
            // Button settings
            buttonColor: document.getElementById('buttonColor')?.value || '#009BDD',
            buttonSize: document.getElementById('buttonSize')?.value || '54',
            buttonRight: document.getElementById('buttonRight')?.value || '25',
            buttonBottom: document.getElementById('buttonBottom')?.value || '25',
            customIcon: document.getElementById('customIcon')?.value || '',
            
            // Icon customisation settings
            iconSize: document.getElementById('iconSize')?.value || '60',
            iconBorderRadius: document.getElementById('iconBorderRadius')?.value || '15',
            iconColor: document.getElementById('iconColor')?.value || '#FFFFFF',
            
            // Avatar settings
            botAvatarUrl: document.getElementById('botAvatarUrl')?.value || '',
            userAvatarUrl: document.getElementById('userAvatarUrl')?.value || '',
            showBotAvatar: document.getElementById('showBotAvatar')?.checked ?? true,
            showUserAvatar: document.getElementById('showUserAvatar')?.checked ?? true,
            avatarSize: document.getElementById('avatarSize')?.value || '32',
            avatarBorderRadius: document.getElementById('avatarBorderRadius')?.value || '50',
            
            // Toggle settings
            showTooltip: document.getElementById('showTooltip')?.checked || true,
            autoOpenWidget: document.getElementById('autoOpenWidget')?.checked || false,
            showTitleSection: document.getElementById('showTitleSection')?.checked || true,
            clearChatOnReload: document.getElementById('clearChatOnReload')?.checked || false,
            
            // Chat window settings
            chatWidth: document.getElementById('chatWidth')?.value || '400',
            chatHeight: document.getElementById('chatHeight')?.value || '600',
            chatBackgroundColor: document.getElementById('chatBackgroundColor')?.value || '#4d4d4d',
            fontSize: document.getElementById('fontSize')?.value || '16',
            
            // Message styling
            botMessageColor: document.getElementById('botMessageColor')?.value || '#009BDD',
            botTextColor: document.getElementById('botTextColor')?.value || '#FFFFFF',
            userMessageColor: document.getElementById('userMessageColor')?.value || '#000000',
            userTextColor: document.getElementById('userTextColor')?.value || '#A3A3A3',
            
            // Input field
            inputBackgroundColor: document.getElementById('inputBackgroundColor')?.value || '#000000',
            inputTextColor: document.getElementById('inputTextColor')?.value || '#ffffff',
            sendButtonColor: document.getElementById('sendButtonColor')?.value || '#009BDD',
            
            // Footer settings
            companyName: document.getElementById('companyName')?.value || '',
            companyLink: document.getElementById('companyLink')?.value || '',
            footerTextColor: document.getElementById('footerTextColor')?.value || '#151515',
            
            // Tooltip settings
            tooltipMessage: document.getElementById('tooltipMessage')?.value || '',
            tooltipBackgroundColor: document.getElementById('tooltipBackgroundColor')?.value || '#009BDD',
            tooltipTextColor: document.getElementById('tooltipTextColor')?.value || '#FFFFFF'
        };
        
        const configJson = JSON.stringify(config, null, 2);
        const blob = new Blob([configJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chatbot-config-enhanced.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('Enhanced configuration saved successfully!');
        console.log('Enhanced config saved');
    } catch (error) {
        console.error('Error saving config:', error);
        alert('Error saving config: ' + error.message);
    }
}

function loadConfig() {
    console.log('Load Config clicked');
    try {
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
                        
                        // Apply all config values to form fields
                        Object.keys(config).forEach(key => {
                            const element = document.getElementById(key);
                            if (element && config[key] !== undefined && config[key] !== null) {
                                element.value = config[key];
                                
                                // Update font preview for font selects
                                if (key.includes('Font')) {
                                    element.style.fontFamily = config[key];
                                }
                            }
                        });
                        
                        updateRangeValues();
                        setupFontPreview();
                        generateCode();
                        alert('Enhanced configuration loaded successfully!');
                        console.log('Enhanced config loaded');
                    } catch (error) {
                        alert('Error loading configuration file: ' + error.message);
                        console.error('Config load error:', error);
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    } catch (error) {
        console.error('Error in loadConfig:', error);
        alert('Error loading config: ' + error.message);
    }
}

function copyCode() {
    console.log('Copy Code clicked');
    try {
        const embedCode = document.getElementById('embedCode');
        if (embedCode) {
            embedCode.select();
            embedCode.setSelectionRange(0, 99999);
            document.execCommand('copy');
            
            const copyButton = document.querySelector('.btn-copy');
            if (copyButton) {
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copied!';
                copyButton.style.background = '#48bb78';
                
                setTimeout(() => {
                    copyButton.textContent = originalText;
                    copyButton.style.background = '';
                }, 2000);
            }
            console.log('Enhanced code copied');
        } else {
            console.error('embedCode element not found');
        }
    } catch (err) {
        console.error('Failed to copy code:', err);
        alert('Failed to copy code. Please select and copy manually.');
    }
}

function togglePreview() {
    const previewContainer = document.getElementById('previewContainer');
    const toggleButton = document.querySelector('button[onclick="togglePreview()"]');
    
    if (previewContainer) {
        // Check current state - if not explicitly set, assume it's visible
        const isCurrentlyVisible = previewContainer.style.display !== 'none';
        
        if (isCurrentlyVisible) {
            previewContainer.style.display = 'none';
            if (toggleButton) toggleButton.textContent = 'Show Preview';
        } else {
            previewContainer.style.display = 'block';
            if (toggleButton) toggleButton.textContent = 'Hide Preview';
        }
        
        console.log('Preview toggled:', isCurrentlyVisible ? 'hidden' : 'shown');
    }
}

function initialisePreviewToggle() {
    const toggleButton = document.querySelector('button[onclick="togglePreview()"]');
    const previewContainer = document.getElementById('previewContainer');
    
    if (toggleButton && previewContainer) {
        // Set initial state - preview is visible by default
        previewContainer.style.display = 'block';
        toggleButton.textContent = 'Hide Preview';
        console.log('Preview toggle initialised');
    }
}

function updateRangeValues() {
    console.log('Updating range values');
    try {
        // Standard pixel values
        const pixelRanges = ['buttonSize', 'buttonRight', 'buttonBottom', 'chatWidth', 'chatHeight', 'fontSize', 'inputBorderWidth', 'iconBorderRadius'];
        pixelRanges.forEach(id => {
            const input = document.getElementById(id);
            const valueDisplay = document.getElementById(id + 'Value');
            if (input && valueDisplay) {
                valueDisplay.textContent = input.value + 'px';
            }
        });
        
        // Percentage values
        const percentageRanges = ['iconSize'];
        percentageRanges.forEach(id => {
            const input = document.getElementById(id);
            const valueDisplay = document.getElementById(id + 'Value');
            if (input && valueDisplay) {
                valueDisplay.textContent = input.value + '%';
            }
        });
    } catch (error) {
        console.error('Error updating range values:', error);
    }
}

// Add event listeners for range inputs and font selects
document.addEventListener('DOMContentLoaded', function() {
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(input => {
        input.addEventListener('input', function() {
            updateRangeValues();
            generateCode(); // Update code when ranges change
            previewWidget(); // Also update preview when ranges change
        });
    });
    
    // Add event listeners for all inputs to update code in real-time
    const allInputs = document.querySelectorAll('input, select');
    allInputs.forEach(input => {
        input.addEventListener('change', function() {
            generateCode();
            previewWidget(); // Also update preview when settings change
        });
        input.addEventListener('input', function() {
            if (input.type !== 'range') {
                generateCode();
                previewWidget(); // Also update preview when settings change
            }
        });
    });
});

console.log('Enhanced script loaded successfully');

// Tab switching functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab + '-tab').classList.add('active');
            
            console.log('Switched to tab:', targetTab);
        });
    });
}

// Enhanced initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('Enhanced Tabbed Widget Generator Loading...');
    
    // Initialize tabs first
    initializeTabs();
    
    // Then initialize existing functionality
    setTimeout(function() {
        generateCode();
        updateRangeValues();
        setupFontPreview();
        initialisePreviewToggle();
        previewWidget();
    }, 100);
});