# 🎄 Day 10: Build a Floating Action Button

## 📖 Description

The goal of today's challenge is to create a **Floating Action Button (FAB)** that expands and collapses. This interactive button allows users to reveal hidden social media icons by clicking on the button and collapse them by clicking again.

---

## ✨ Features

- **Floating Action Button**:
  - The button is fixed to the bottom-right corner of the screen for easy access.
- **Expand on Click**:
  - Clicking the button reveals social media icons with a smooth animation.
- **Collapse on Click**:
  - Clicking again hides the social media icons, restoring the button to its original state.
- **Dynamic Icon Swap**:
  - The main button icon changes to an `x` when expanded, and back to the default (e.g., megaphone) when collapsed.
- **Keyboard Accessibility**:
  - Use keyboard events to toggle the button's state for enhanced accessibility.

---

## 🚀 How It Works

1. The Floating Action Button is fixed at the bottom-right corner of the screen.
2. Initially, the button displays a default icon (e.g., a megaphone).
3. Clicking the button:
   - Expands the button to reveal social media icons.
   - Changes the main icon to an `x`.
4. Clicking the `x` button collapses the social media icons, hiding them.

---

## 🛠️ Technologies Used

- **React**: To create the interactive component and manage state.
- **GSAP or Framer Motion**: For smooth animations of the expanding and collapsing icons.
- **CSS**: For styling the FAB, positioning it, and making the icons visually appealing.
- **SVG Icons**: For a clean, modern look of the FAB and the social media buttons.

---

## 📋 Usage

1. Click on the Floating Action Button in the bottom-right corner.
2. Observe the button expanding to reveal social media icons.
3. Click the `x` button to collapse the icons and return the button to its default state.

---

## 🌟 What I Learned

- How to build an **interactive button** with a dynamic state in React.
- How to use animation libraries like **GSAP** or **Framer Motion** for smooth transitions.
- How to position elements using **CSS** to achieve a fixed, responsive layout.
- How to enhance user experience with **icon swapping** and **keyboard accessibility**.

---

## 🛠️ Next Steps

- Experiment with different animations for the social media icons (e.g., fade, bounce, rotate).
- Add more social media buttons or customize the button styles for your branding.
- Improve accessibility by adding proper focus states and ARIA attributes.

---

## 📜 License

This project is part of my **Advent of JavaScript 2024** challenge and is licensed under the MIT License. Feel free to use, modify, or share!