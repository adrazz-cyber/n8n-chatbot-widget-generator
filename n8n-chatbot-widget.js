/**
 * N8N Chatbot Widget - Self-hosted Implementation
 * A lightweight, customizable chat widget for N8N workflows
 * Version: 2.0.0 Enhanced with Typography Controls
 */

class N8NChatbotWidget {
    constructor(config) {
        this.config = {
            n8nChatUrl: '',
            theme: {
                button: {
                    backgroundColor: '#009BDD',
                    right: 25,
                    bottom: 25,
                    size: 54,
                    iconColor: '#FFFFFF',
                    customIconSrc: '',
                    borderRadius: 'rounded'
                },
                chatWindow: {
                    title: 'Chat with us',
                    titleFont: 'Inter',
                    welcomeMessage: 'Hello! How can we help you?',
                    width: 400,
                    height: 600,
                    backgroundColor: '#ffffff',
                    fontSize: '16px',
                    messageFont: 'Inter',
                    textInput: {
                        placeholder: 'Type your message...',
                        backgroundColor: '#f5f5f5',
                        textColor: '#333333',
                        font: 'Inter',
                        sendButtonColor: '#009BDD'
                    },
                    botMessage: {
                        backgroundColor: '#009BDD',
                        textColor: '#ffffff',
                        font: 'Inter'
                    },
                    userMessage: {
                        backgroundColor: '#e5e5e5',
                        textColor: '#333333',
                        font: 'Inter'
                    },
                    footer: {
                        companyName: 'Powered by N8N',
                        companyLink: '',
                        textColor: '#666666',
                        font: 'Inter'
                    },
                    tooltip: {
                        message: 'Chat with us!',
                        backgroundColor: '#009BDD',
                        textColor: '#ffffff',
                        font: 'Inter'
                    }
                }
            },
            ...config
        };
        
        this.isOpen = false;
        this.messages = [];
        this.sessionId = null; // Will be generated when first message is sent
        this.init();
    }

    init() {
        this.createStyles();
        this.createButton();
        this.createChatWindow();
        this.bindEvents();
    }

    createStyles() {
        const styles = `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Open+Sans:wght@300;400;500;600;700&family=Lato:wght@300;400;700&family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
            
            .n8n-chatbot-container * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            
            .n8n-chatbot-button {
                position: fixed;
                right: ${this.config.theme.button.right}px;
                bottom: ${this.config.theme.button.bottom}px;
                width: ${this.config.theme.button.size}px;
                height: ${this.config.theme.button.size}px;
                border-radius: 50%;
                background-color: ${this.config.theme.button.backgroundColor};
                border: none;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.2s ease;
            }
            
            .n8n-chatbot-button:hover {
                transform: scale(1.05);
            }
            
            .n8n-chatbot-button svg {
                width: 24px;
                height: 24px;
                fill: ${this.config.theme.button.iconColor};
            }
            
            .n8n-chatbot-tooltip {
                position: fixed;
                right: ${this.config.theme.button.right + this.config.theme.button.size + 15}px;
                bottom: ${this.config.theme.button.bottom}px;
                background-color: ${this.config.theme.chatWindow.tooltip.backgroundColor};
                color: ${this.config.theme.chatWindow.tooltip.textColor};
                padding: 8px 12px;
                border-radius: 8px;
                font-family: '${this.config.theme.chatWindow.tooltip.font}', sans-serif;
                font-size: 14px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                z-index: 9998;
                max-width: 200px;
                opacity: 0;
                transform: translateY(10px);
                transition: all 0.3s ease;
                pointer-events: none;
            }
            
            .n8n-chatbot-tooltip.show {
                opacity: 1;
                transform: translateY(0);
            }
            
            .n8n-chatbot-window {
                position: fixed;
                right: ${this.config.theme.button.right}px;
                bottom: ${this.config.theme.button.bottom + this.config.theme.button.size + 15}px;
                width: ${this.config.theme.chatWindow.width}px;
                height: ${this.config.theme.chatWindow.height}px;
                background-color: ${this.config.theme.chatWindow.backgroundColor};
                border-radius: 12px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                z-index: 9999;
                display: flex;
                flex-direction: column;
                opacity: 0;
                transform: translateY(20px) scale(0.95);
                transition: all 0.3s ease;
                pointer-events: none;
            }
            
            .n8n-chatbot-window.open {
                opacity: 1;
                transform: translateY(0) scale(1);
                pointer-events: all;
            }
            
            .n8n-chatbot-header {
                padding: 20px;
                border-bottom: 1px solid rgba(0,0,0,0.1);
                background: linear-gradient(135deg, ${this.config.theme.button.backgroundColor}, ${this.config.theme.button.backgroundColor}dd);
                border-radius: 12px 12px 0 0;
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .n8n-chatbot-title {
                font-family: '${this.config.theme.chatWindow.titleFont}', sans-serif;
                font-size: 18px;
                font-weight: 600;
                margin: 0;
            }
            
            .n8n-chatbot-close {
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background-color 0.2s ease;
            }
            
            .n8n-chatbot-close:hover {
                background-color: rgba(255,255,255,0.2);
            }
            
            .n8n-chatbot-messages {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            
            .n8n-chatbot-message {
                max-width: 80%;
                padding: 10px 15px;
                border-radius: 18px;
                font-family: '${this.config.theme.chatWindow.messageFont}', sans-serif;
                font-size: ${this.config.theme.chatWindow.fontSize};
                line-height: 1.4;
            }
            
            .n8n-chatbot-message.bot {
                align-self: flex-start;
                background-color: ${this.config.theme.chatWindow.botMessage.backgroundColor};
                color: ${this.config.theme.chatWindow.botMessage.textColor};
                font-family: '${this.config.theme.chatWindow.botMessage.font}', sans-serif;
            }
            
            .n8n-chatbot-message.user {
                align-self: flex-end;
                background-color: ${this.config.theme.chatWindow.userMessage.backgroundColor};
                color: ${this.config.theme.chatWindow.userMessage.textColor};
                font-family: '${this.config.theme.chatWindow.userMessage.font}', sans-serif;
            }
            
            .n8n-chatbot-input-container {
                padding: 20px;
                border-top: 1px solid rgba(0,0,0,0.1);
                display: flex;
                gap: 10px;
                align-items: center;
            }
            
            .n8n-chatbot-input {
                flex: 1;
                padding: 12px 15px;
                border: 1px solid rgba(0,0,0,0.2);
                border-radius: 20px;
                font-family: '${this.config.theme.chatWindow.textInput.font}', sans-serif;
                font-size: 14px;
                background-color: ${this.config.theme.chatWindow.textInput.backgroundColor};
                color: ${this.config.theme.chatWindow.textInput.textColor};
                outline: none;
            }
            
            .n8n-chatbot-input::placeholder {
                color: rgba(${this.hexToRgb(this.config.theme.chatWindow.textInput.textColor)}, 0.6);
            }
            
            .n8n-chatbot-send {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: ${this.config.theme.chatWindow.textInput.sendButtonColor};
                border: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.2s ease;
            }
            
            .n8n-chatbot-send:hover {
                transform: scale(1.05);
            }
            
            .n8n-chatbot-send svg {
                width: 16px;
                height: 16px;
                fill: white;
            }
            
            .n8n-chatbot-footer {
                padding: 10px 20px;
                text-align: center;
                font-family: '${this.config.theme.chatWindow.footer.font}', sans-serif;
                font-size: 12px;
                color: ${this.config.theme.chatWindow.footer.textColor};
                border-top: 1px solid rgba(0,0,0,0.05);
            }
            
            .n8n-chatbot-footer a {
                color: inherit;
                text-decoration: none;
            }
            
            .n8n-chatbot-footer a:hover {
                text-decoration: underline;
            }
            
            @media (max-width: 480px) {
                .n8n-chatbot-window {
                    right: 10px;
                    bottom: 10px;
                    width: calc(100vw - 20px);
                    height: calc(100vh - 100px);
                }
                
                .n8n-chatbot-button {
                    right: 20px;
                    bottom: 20px;
                }
                
                .n8n-chatbot-tooltip {
                    right: 35px;
                    bottom: 80px;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? 
            `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
            '0, 0, 0';
    }

    createButton() {
        this.button = document.createElement('div');
        this.button.className = 'n8n-chatbot-button';
        
        const icon = this.config.theme.button.customIconSrc ? 
            `<img src="${this.config.theme.button.customIconSrc}" alt="Chat" style="width: 24px; height: 24px;">` :
            `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`;
        
        this.button.innerHTML = icon;
        document.body.appendChild(this.button);
        
        // Create tooltip
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'n8n-chatbot-tooltip';
        this.tooltip.textContent = this.config.theme.chatWindow.tooltip.message;
        document.body.appendChild(this.tooltip);
        
        // Show tooltip after delay
        setTimeout(() => {
            if (!this.isOpen) {
                this.tooltip.classList.add('show');
            }
        }, 3000);
    }

    createChatWindow() {
        this.chatWindow = document.createElement('div');
        this.chatWindow.className = 'n8n-chatbot-window';
        
        this.chatWindow.innerHTML = `
            <div class="n8n-chatbot-header">
                <h3 class="n8n-chatbot-title">${this.config.theme.chatWindow.title}</h3>
                <button class="n8n-chatbot-close">&times;</button>
            </div>
            <div class="n8n-chatbot-messages" id="n8n-messages"></div>
            <div class="n8n-chatbot-input-container">
                <input type="text" class="n8n-chatbot-input" placeholder="${this.config.theme.chatWindow.textInput.placeholder}" id="n8n-input">
                <button class="n8n-chatbot-send" id="n8n-send">
                    <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
            </div>
            <div class="n8n-chatbot-footer">
                ${this.config.theme.chatWindow.footer.companyLink ? 
                    `<a href="${this.config.theme.chatWindow.footer.companyLink}" target="_blank">${this.config.theme.chatWindow.footer.companyName}</a>` :
                    this.config.theme.chatWindow.footer.companyName
                }
            </div>
        `;
        
        document.body.appendChild(this.chatWindow);
        
        // Add welcome message
        this.addMessage(this.config.theme.chatWindow.welcomeMessage, 'bot');
    }

    bindEvents() {
        this.button.addEventListener('click', () => this.toggleChat());
        
        const closeBtn = this.chatWindow.querySelector('.n8n-chatbot-close');
        closeBtn.addEventListener('click', () => this.closeChat());
        
        const input = this.chatWindow.querySelector('#n8n-input');
        const sendBtn = this.chatWindow.querySelector('#n8n-send');
        
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        this.isOpen = true;
        this.chatWindow.classList.add('open');
        this.tooltip.classList.remove('show');
        this.chatWindow.querySelector('#n8n-input').focus();
    }

    closeChat() {
        this.isOpen = false;
        this.chatWindow.classList.remove('open');
    }

    addMessage(text, sender) {
        const messagesContainer = this.chatWindow.querySelector('#n8n-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `n8n-chatbot-message ${sender}`;
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    async sendMessage() {
        const input = this.chatWindow.querySelector('#n8n-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Add user message
        this.addMessage(message, 'user');
        input.value = '';
        
        if (!this.config.n8nChatUrl) {
            this.addMessage('Please configure your N8N webhook URL to enable chat functionality.', 'bot');
            return;
        }
        
        try {
            // Generate a session ID if we don't have one
            if (!this.sessionId) {
                this.sessionId = 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
            }
            
            // Send to N8N webhook
            const response = await fetch(this.config.n8nChatUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sessionId: this.sessionId,
                    chatInput: message,
                    message: message,
                    timestamp: new Date().toISOString()
                })
            });
            
            const data = await response.json();
            const botMessage = data.message || data.response || data.output || 'Thank you for your message!';
            
            this.addMessage(botMessage, 'bot');
        } catch (error) {
            console.error('Error sending message:', error);
            this.addMessage('Sorry, there was an error sending your message. Please try again.', 'bot');
        }
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = N8NChatbotWidget;
}

// Global initialization function
window.N8NChatbot = {
    init: function(config) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                new N8NChatbotWidget(config);
            });
        } else {
            new N8NChatbotWidget(config);
        }
    }
};

// Auto-initialize if config is provided globally
if (typeof window !== 'undefined' && window.N8NChatbotConfig) {
    window.N8NChatbot.init(window.N8NChatbotConfig);
}