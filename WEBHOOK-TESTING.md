# 🧪 N8N Webhook Testing & Troubleshooting Guide

## 🚀 Quick Test Your Webhook

**Test Page:** [webhook-tester.html](webhook-tester.html)

### Step-by-Step Testing Process:

1. **Open the webhook tester** in your browser
2. **Enter your webhook URL**: `https://your-n8n-instance.com/webhook/your-webhook-id/chat`
3. **Run all tests** in sequence:
   - URL Validation
   - Direct Connection Test
   - CORS Check
   - Live Widget Test

## 🔧 Common Issues & Solutions

### ❌ **"Connection Failed" Error**
**Possible Causes:**
- N8N workflow is not active
- Webhook URL is incorrect
- CORS not configured

**Solutions:**
1. Check your N8N workflow is **active** (green play button)
2. Verify the webhook URL is exactly correct
3. Test the URL directly in browser/Postman first

### ❌ **CORS Errors in Browser**
**Symptoms:** Works in Postman but not in browser
**Solution:** Add CORS headers to your N8N workflow:

```javascript
// In your N8N workflow, add a "Set" node with:
{
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
}
```

### ❌ **Widget Loads But No Response**
**Check:**
1. N8N workflow returns proper JSON format:
   ```json
   {
     "message": "Your response text here"
   }
   ```
2. Webhook URL ends with `/chat` path
3. Workflow processes the `message` field from request

### ❌ **"Script Loading Failed"**
**Cause:** GitHub Pages cache still updating
**Solution:** Wait 5-10 minutes or use cache-busting URL

## 📋 **N8N Workflow Requirements**

### Required Nodes:
1. **Chat Trigger** - Webhook receiver
2. **Processing Logic** - Your chatbot logic
3. **Respond to Webhook** - Send response back

### Expected Request Format:
```json
{
  "sessionId": "session_abc123_1234567890",
  "chatInput": "User's message text",
  "message": "User's message text", 
  "timestamp": "2025-05-22T16:30:00.000Z"
}
```

### Required Response Format:
```json
{
  "message": "Bot's response text"
}
```

## 🎯 **Testing Checklist**

- [ ] N8N workflow is active
- [ ] Webhook URL is correct and accessible
- [ ] CORS headers configured (if needed)
- [ ] Response format is correct JSON
- [ ] Widget loads without JavaScript errors
- [ ] Messages send and receive properly

## 🔍 **Debug Tools**

### Browser Console Testing:
```javascript
// Test webhook directly in browser console:
fetch('YOUR_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    sessionId: 'test_session_' + Date.now(),
    chatInput: 'Test message',
    message: 'Test message',
    timestamp: new Date().toISOString()
  })
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

### Network Tab Check:
1. Open browser Developer Tools (F12)
2. Go to Network tab
3. Send a message in chatbot
4. Check for failed requests (red entries)

## 🆘 **Still Having Issues?**

1. **Use the webhook tester** - It provides detailed error information
2. **Check N8N logs** - Look for errors in your N8N instance
3. **Test with Postman** - Verify webhook works outside browser
4. **Verify JSON response** - Ensure your workflow returns proper format

## 📞 **Support Checklist**

When asking for help, please provide:
- [ ] Full webhook URL (you can mask sensitive parts)
- [ ] Error messages from browser console
- [ ] Results from the webhook tester
- [ ] Screenshots of N8N workflow
- [ ] What testing steps you've already tried

---

**💡 Pro Tip:** Use the webhook tester first - it will identify most common issues automatically!
