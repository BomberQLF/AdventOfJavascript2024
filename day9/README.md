# 🎄 Day 9: Persist Form Data Across a Page Refresh


# 🚫 Result 

Unfortunately, I did not manage to successfully complete the DAY 9 challenge. I encountered difficulties with using localStorage to retain the value in the input field after the user refreshed the page. I’ll revisit this challenge later when I have more time to work on it.

However, I still managed to save the DATA from the FORM after the form was submitted.

## 📖 Description

Today's challenge is to build a **form** that retains its data even after the user refreshes the page or navigates away and returns. This feature improves user experience by preventing data loss during accidental refreshes.

---

## ✨ Features

- **Dynamic form fields**:
  - A user can fill out various input types, such as text, email, radio buttons, and checkboxes.
- **Data persistence**:
  - The form retains all user-entered data across page refreshes using browser storage.
- **Data clearing on submission**:
  - Upon successful submission, the form data resets, ready for new input.

---

## 🚀 How It Works

1. Users fill out the form with the following fields:
   - **Name**: Text input (required)
   - **Email Address**: Email input (required)
   - **Favorite Reindeer**: Radio buttons (required)
   - **Holiday Movies Watched**: Checkboxes with these options:
     - *Elf (2003)*
     - *Home Alone (1990)*
     - *The Grinch (1966)*
     - *It’s a Wonderful Life (1946)*
     - *Die Hard (1988)*
2. The form automatically saves user input into the browser's local storage.
3. Upon returning to the page, the form repopulates with the previously entered data.
4. Submitting the form clears the data, resetting it for a fresh start.

---

## 🛠️ Technologies Used

- **React**: For building a dynamic and interactive form.
- **JavaScript (ES6+)**: To handle form state, persistence logic, and submission behavior.
- **Browser Local Storage**: To save and retrieve form data across refreshes.
- **CSS**: To style the form and create a user-friendly design.

---

## 📋 Usage

1. Fill out the form with the required details:
   - Enter your name and email address.
   - Select your favorite reindeer.
   - Check the holiday movies you've watched.
2. Refresh the page or navigate away, then return to see the form data intact.
3. Submit the form to clear all data and start fresh.

---

## 🌟 What I Learned

- How to use **localStorage** to persist user data across page refreshes.
- How to manage form state dynamically with React.
- How to handle **form validation** for required fields like text inputs and radio buttons.
- How to clear persisted data upon form submission for reusability.

---