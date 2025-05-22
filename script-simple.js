// Simple N8N Chatbot Widget Generator
// Simplified version to ensure buttons work

document.addEventListener('DOMContentLoaded', function() {
    console.log('Chatbot Widget Generator Loading...');
    
    // Initialize on page load
    setTimeout(function() {
        generateCode();
        updateRangeValues();
    }, 100);
});

// Global functions that buttons call
function generateCode() {
    console.log('Generate Code clicked');
    try {
        const webhookUrl = document.getElementById('webhookUrl')?.value || 'https://your-n8n-instance.com/webhook/your-webhook-id/chat';
        const chatTitle = document.getElementById('chatTitle')?.value || 'Welcome to BlueChilli';
        const welcomeMessage = document.getElementById('welcomeMessage')?.value || 'Hello! Welcome to BlueChilli';
        const placeholderText = document.getElementById('placeholderText')?.value || 'How can I help!';
        const buttonColor = document.getElementById('buttonColor')?.value || '#009BDD';
        const buttonSize = document.getElementById('buttonSize')?.value || '54';
        const buttonRight = document.getElementById('buttonRight')?.value || '25';
        const buttonBottom = document.getElementById('buttonBottom')?.value || '25';
        const customIcon = document.getElementById('customIcon')?.value || 'https://www.svgrepo.com/show/339963/chat-bot.svg';
        
        const embedCode = `<script src="https://adrazz-cyber.github.io/n8n-chatbot-widget-generator/n8n-chatbot-widget.js"></script>
<script>
  N8NChatbot.init({
    "n8nChatUrl": "${webhookUrl}",
    "theme": {
      "button": {
        "backgroundColor": "${buttonColor}",
        "right": ${buttonRight},
        "bottom": ${buttonBottom},
        "size": ${buttonSize},
        "iconColor": "#FFFFFF",
        "customIconSrc": "${customIcon}",
        "borderRadius": "rounded"
      },
      "chatWindow": {
        "title": "${chatTitle}",
        "welcomeMessage": "${welcomeMessage}",
        "textInput": {
          "placeholder": "${placeholderText}"
        }
      }
    }
  });
</script>`;

        const embedCodeElement = document.getElementById('embedCode');
        if (embedCodeElement) {
            embedCodeElement.value = embedCode;
            console.log('Code generated successfully');
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
        const previewContainer = document.getElementById('previewContainer');
        if (previewContainer) {
            previewContainer.innerHTML = '<div style="padding: 20px; background: white; border-radius: 10px; margin: 10px 0;"><h3>Preview Updated!</h3><p>Your widget preview has been generated.</p></div>';
            console.log('Preview updated');
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
            webhookUrl: document.getElementById('webhookUrl')?.value || '',
            chatTitle: document.getElementById('chatTitle')?.value || '',
            welcomeMessage: document.getElementById('welcomeMessage')?.value || ''
        };
        
        const configJson = JSON.stringify(config, null, 2);
        const blob = new Blob([configJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chatbot-config.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('Configuration saved successfully!');
        console.log('Config saved');
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
                        
                        // Apply config to form fields
                        if (config.webhookUrl && document.getElementById('webhookUrl')) {
                            document.getElementById('webhookUrl').value = config.webhookUrl;
                        }
                        if (config.chatTitle && document.getElementById('chatTitle')) {
                            document.getElementById('chatTitle').value = config.chatTitle;
                        }
                        if (config.welcomeMessage && document.getElementById('welcomeMessage')) {
                            document.getElementById('welcomeMessage').value = config.welcomeMessage;
                        }
                        
                        generateCode();
                        alert('Configuration loaded successfully!');
                        console.log('Config loaded');
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
            console.log('Code copied');
        } else {
            console.error('embedCode element not found');
        }
    } catch (err) {
        console.error('Failed to copy code:', err);
        alert('Failed to copy code. Please select and copy manually.');
    }
}

function updateRangeValues() {
    console.log('Updating range values');
    try {
        const ranges = ['buttonSize', 'buttonRight', 'buttonBottom', 'chatWidth', 'chatHeight', 'fontSize'];
        ranges.forEach(id => {
            const input = document.getElementById(id);
            const valueDisplay = document.getElementById(id + 'Value');
            if (input && valueDisplay) {
                valueDisplay.textContent = input.value + 'px';
            }
        });
    } catch (error) {
        console.error('Error updating range values:', error);
    }
}

// Add event listeners for range inputs
document.addEventListener('DOMContentLoaded', function() {
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(input => {
        input.addEventListener('input', updateRangeValues);
    });
});

console.log('Script loaded successfully');