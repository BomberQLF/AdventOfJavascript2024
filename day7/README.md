# 🎄 Day 7: Build a Slugify Preview

## 📖 Description

The goal of today's challenge is to create a **slugify preview** application. This app consists of a **text input** where users can type a title, and a live-updated preview below it showing its corresponding **slug**.

---

## ✨ Features

- A **responsive text input** where users can enter a title.
- A **real-time slug preview** that updates dynamically as the user types.
- The slug is formatted to:
  - Be all lowercase.
  - Replace spaces with hyphens (`-`).
  - Begin with a leading slash (`/`).

---

## 🚀 How It Works

1. Users type a title into the input field.
2. As text is entered or deleted, the slug preview below the input field updates automatically.
3. The slug is dynamically formatted based on the title, following the formatting rules described above.

---

## 🛠️ Technologies Used

- **React**: To build the interactive UI.
- **JavaScript (ES6+)**: For handling logic and dynamic updates.
- **CSS**: For styling the component.

---

## 📋 Usage

1. Type a title in the input field.
2. Watch the live slug preview update automatically.
3. Modify or clear the title to see the slug adjust dynamically.

---

## 🌟 What I Learned

- How to use React's **state management** (`useState`) to track and update input changes.
- How to format strings dynamically and ensure consistent output (e.g., lowercase, hyphen-separated).
- How to structure a React app with reusable components like `Input` and `Slug`.

---

## 📜 License

This project is part of my **Advent of JavaScript 2024** challenge and is licensed under the MIT License. Feel free to use, modify, or share!