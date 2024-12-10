# 🎄 Day 8: Build a Tag Input Field

## 📖 Description

The goal of today's challenge is to create a **tag input field**. This interactive component allows users to add, display, and remove tags dynamically in a user-friendly manner.

---

## ✨ Features

- **Dynamic tag creation**: 
  - Users can type text and press `,` (comma) to convert the text into a tag.
- **Multiple tags**: 
  - Users can add as many tags as they like, with each tag visually distinct.
- **Remove tags**:
  - Tags can be deleted individually by clicking the `x` button.
- **Keyboard support**:
  - If the input is empty, pressing the `Delete` key will remove the last tag.

---

## 🚀 How It Works

1. Users type text in the input field.
2. When a `,` (comma) is pressed:
   - The text is added as a tag.
   - The input clears for new entries.
3. Tags are displayed below or within the input field as styled elements.
4. Clicking the `x` button on a tag removes it from the list.
5. Pressing the `Delete` key with an empty input removes the last tag in the list.

---

## 🛠️ Technologies Used

- **React**: To build the interactive UI and manage state.
- **JavaScript (ES6+)**: For handling tag creation, deletion, and keyboard interactions.
- **CSS**: For styling the input and tags to match the provided design.
- **SVG Icon**: For the `x` button, ensuring a clean and modern look.

---

## 📋 Usage

1. Start typing in the input field.
2. Press `,` (comma) to create a tag from the entered text.
3. Add more tags as needed.
4. Remove a tag by clicking the `x` button.
5. Clear the last tag by pressing `Delete` with an empty input field.

---

## 🌟 What I Learned

- How to manage a **list of items** in state using React.
- How to handle **keyboard events** like `Delete` and `,` for a seamless user experience.
- How to use **CSS** for responsive and visually appealing tag styling.
- How to build reusable components for interactive UI elements.

---

## 📜 License

This project is part of my **Advent of JavaScript 2024** challenge and is licensed under the MIT License. Feel free to use, modify, or share!