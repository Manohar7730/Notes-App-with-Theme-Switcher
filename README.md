# 📝 Notes App with Theme Switcher

A simple **Notes App** built with React that supports **add, edit, delete**, and **persistent storage** along with a **light/dark theme toggle**.  
This project is part of my **React Learning Journey (Stage 2 – Intermediate Hooks & Context)**.

---

## 🚀 Features

- ✍️ Add, edit, and delete notes  
- 🌞🌙 Toggle between **light** and **dark** themes using **Context API**  
- 💾 Persistent storage with **localStorage** (via custom hook `useLocalStorage`)  
- 🎯 Auto-focus on input field using `useRef`  
- 🖼️ Clean and responsive UI  

---

## 🛠️ Tech Stack

- **React (Vite)**  
- **Context API + Hooks** (`useState`, `useEffect`, `useContext`, `useRef`)  
- **Custom Hook**: `useLocalStorage`  
- **Vanilla CSS** for styling  

---

## 📸 Preview

*(You can add screenshots or a short GIF of your app running here)*  

---

## 📂 Project Structure
```
src/
├── components/
│   ├── InputForm/
│   ├── NotesList/
│   ├── NoteItem/
│   └── TopBar/
├── context/
│   ├── ThemeContext.jsx
│   └── ThemeProvider.jsx
├── App.jsx
├── localStorage.jsx
├── main.jsx
├── index.css
└── App.css

```

## ⚙️ Installation & Setup

- Clone the repository:
  git clone https://github.com/Manohar7730/Notes-App-with-Theme-Switcher.git

- Navigate into the project:
  cd Notes-App-with-Theme-Switcher

- Install dependencies:
  npm install

- Start the development server:
  npm run dev

---

## 🌟 Learning Outcomes
- Manage state & side effects with useState and useEffect
- Avoid prop drilling with useContext
- Write custom hooks for reusability (useLocalStorage)
- Use useRef for direct DOM interaction
- Build a modular, component-based architecture
