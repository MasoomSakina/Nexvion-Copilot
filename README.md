# 🚀 Nexvion Copilot

**The zero-shot live AI screen guide built for the DoraHacks 2.0 Hackathon.**

Nexvion Copilot is a persistent, real-time AI assistant for Chrome that provides visual "Ghost Cursor" guidance and instructions over any web application—without ever taking control of your mouse or keyboard.

## ✨ Features

- **Zero-Shot Visual Guidance:** No pre-recorded tutorials required. The AI understands unfamiliar interfaces natively.
- **Guide-Only Safety Boundary:** Enforced shadow DOM overlay (`pointer-events: none`). The AI *cannot* click or execute code on your behalf, ensuring complete user control and compliance.
- **Cross-OS & Chrome Native:** Natively built as a Manifest V3 extension, providing smooth performance across Mac, Linux, and Windows without requiring any Microsoft account dependency.
- **Interactive Feedback Hub:** Built-in asynchronous feedback mechanism to collect beta tester insights instantly.

## 📦 Installation (Beta)

To deploy the extension locally for testing or evaluation:

1. **Download:** Click the "Download Beta (.zip)" button from the landing page.
2. **Extract:** Unzip `Nexvion-Copilot.zip` to a folder on your machine.
3. **Enable Developer Mode:** 
   - Open Chrome and navigate to `chrome://extensions/`.
   - Toggle **"Developer mode"** in the top-right corner to **ON**.
4. **Load Unpacked:**
   - Click the **"Load unpacked"** button in the top-left.
   - Select the extracted extension folder.
5. **Launch:** Pin the extension to your toolbar, open any web app, and start your session.

## 🗂️ Repository Structure

- `/extension/` - Contains the Manifest V3 client, background service workers, and UI content scripts.
- `/brain_server/` - Contains the FastAPI WebSocket gateway, turn classifiers, and routing logic.
- `/landing-page/` - Contains the static `index.html` and `script.js` distribution site.

## 🏆 Hackathon Context

Crafted for the **DoraHacks 2.0 Hackathon** by **Masoom Sakina** and **Muhammad Aman Ghouri** (Team Nexvion).