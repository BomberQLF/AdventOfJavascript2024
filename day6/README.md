# 🎄 Day 6: Copy to Clipboard Button

## 📖 Description

The challenge for today is to create a **copy to clipboard button**. This interactive component allows users to copy text from an input field to their clipboard with a user-friendly interface and feedback.

---

## ✨ Features

- **Default state**:
  - Displays a text input field with a button labeled "Copy to Clipboard."
- **Hover tooltip**:
  - When the user hovers over the button, a tooltip appears with the text "Copy."
- **Dynamic text**:
  - Users can modify the text inside the input field before copying.
- **Copy functionality**:
  - When the button is clicked:
    - The input text is copied to the user's clipboard.
    - The tooltip text changes to "Copied."
    - The button icon changes to a checkmark.
- **Revert state**:
  - After 5 seconds, the tooltip and button icon revert to their original state.

---

## 🚀 How It Works

1. Users can edit the text in the input field.
2. Hovering over the button displays a tooltip with the message "Copy."
3. Clicking the button:
   - Copies the current input text to the clipboard.
   - Changes the tooltip to "Copied" and the button icon to a checkmark.
4. After 5 seconds, the tooltip and button return to their default state.

---

## 🛠️ Technologies Used

- **HTML/CSS**: For the structure and styling of the component.
- **JavaScript (ES6+)**: To handle the clipboard API, button states, and dynamic interactions.
- **CSS Transitions**: For smooth tooltip and icon state changes.

---

## 📋 Usage

1. Type any text in the input field.
2. Hover over the "Copy to Clipboard" button to see the tooltip.
3. Click the button to copy the text to your clipboard:
   - Observe the tooltip and icon changes.
4. Wait for 5 seconds to see the component reset to its default state.

---

## 🌟 What I Learned

- How to use the **Clipboard API** for copying text programmatically.
- How to manage **button states** (default, hover, active) with JavaScript.
- How to implement **tooltips** with dynamic text updates.
- How to use **timers** in JavaScript to handle state resets.

---

## 📜 License

This project is part of my **Advent of JavaScript 2024** challenge and is licensed under the MIT License. Feel free to use, modify, or share!