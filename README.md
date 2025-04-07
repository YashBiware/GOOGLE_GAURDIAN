# GOOGLE_GAURDIAN
Google Guardian is a Chrome extension that detects hate speech on social media in real-time. It highlights or blurs harmful content based on user mode and plans to integrate Gemini API &amp; GCP for smarter, scalable moderation.
🛡️ Google Guardian
Google Guardian is a Chrome extension designed to detect and manage hate speech in real-time on social media platforms like Twitter. It aims to make the internet a safer and more mindful space by giving users the ability to highlight or blur offensive content based on their preference.

🔍 Features
✅ Real-time hate speech detection

🧠 Toggle between:

Test Mode – Highlights offensive tweets

Shield Mode – Blurs offensive tweets

💬 Keyword-based detection (MVP)

🚀 Lightweight, fast, and easy to use

🔄 Future plans for AI-based detection with Gemini API

☁️ Optional logging and analytics via Google Cloud Platform (GCP)

🔧 Built using 100% Google technologies

📸 Screenshots
Test Mode (Highlight)	Shield Mode (Blur)
📁 Folder Structure
arduino
Copy
Edit
📦 GOOGLE-GUARDIAN/
 ┣ 📄 manifest.json
 ┣ 📄 content.js
 ┣ 📄 background.js (optional for future)
 ┣ 📄 popup.html
 ┣ 📄 popup.js
 ┗ 🖼️ icons/
     ┗ icon.png
🧪 How It Works
Install the extension in Chrome

Open Twitter

Tweets are scanned for predefined hate speech keywords

Depending on selected mode:

Test Mode: Red warning and highlight

Shield Mode: Tweet is blurred to prevent triggering content

🔮 Future Roadmap
Integrate Gemini API for context-aware text classification

GCP integration for logging flagged content

Add support for misinformation and deepfake detection

Admin dashboard for content moderation and analytics

Platform expansion (Facebook, YouTube, etc.)

🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript

Extension: Chrome Extensions API

AI (Planned): Google Gemini

Backend (Planned): GCP (Firestore, Cloud Functions)

Dev Platform: Google IDX

🧑‍💻 How to Install
Clone or download this repo

Open Chrome → chrome://extensions/

Enable Developer Mode

Click Load unpacked and select the GOOGLE-GUARDIAN folder

Pin the extension and start using on Twitter

[GOOGLE-GAURDIAN.zip](https://github.com/user-attachments/files/19636848/GOOGLE-GAURDIAN.zip)
