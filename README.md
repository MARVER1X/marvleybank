# Serverless Waitlist Pipeline & UI (Marvley Bank)

## 📌 Overview
A dynamic, multi-step front-end web application that securely captures user data and routes it to an external CRM (Google Sheets) without the need for a traditional backend server. This project simulates an early-access waitlist for a fintech platform.

> **Visual Proof: Real-Time Webhook Execution**
> ![Webhook Demo](webhook_demo.gif)
> *(Note: The data submitted in the UI is instantly appended to a private Google Sheet via Apps Script).*

## 🛠️ Tech Stack
* **Frontend:** HTML5, Advanced CSS3, Vanilla JavaScript
* **API / Backend:** Google Apps Script, Fetch API
* **Assets:** Custom Web Manifest & Favicon pipeline

## 🚀 Core Features
* **Serverless Webhook:** Utilizes the Fetch API (`no-cors` mode) to asynchronously POST JSON payloads to a Google Sheets endpoint, eliminating the need for a dedicated backend.
* **Multi-Step DOM Manipulation:** Creates a frictionless onboarding flow by transitioning smoothly between form states (Email -> Name -> Success) using JavaScript event listeners.
* **Client-Side Regex Validation:** Strict email and string validation to prevent malformed data entry, complete with dynamic UI error states that clear automatically upon user correction.
* **Modern Fintech UI:** Engineered with a responsive flexbox layout, floating CSS input labels, and a deep gradient background to emphasize brand contrast.

## 🧠 Engineering Focus
This project demonstrates proficiency in asynchronous JavaScript (`Promises`, `fetch`), state management via DOM manipulation, and the ability to build and interact with third-party API webhooks for data pipeline automation.

## 🗺️ Future Roadmap (V2.0)
To scale this application for a production environment, the following features are planned:
* **Rate Limiting / IP Throttling:** Implementing a debounce or basic IP check to prevent bot scraping and spam submissions to the webhook.
* **Real-Time Data Validation API:** Integrating a third-party API (e.g., ZeroBounce) to verify physical email existence before allowing the POST request to fire.
* **System-Aware Dark Mode:** Utilizing CSS variables (`var(--bg-color)`) and JavaScript media queries to automatically toggle the form container between light and dark themes based on the user's OS preferences.
