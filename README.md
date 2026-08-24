# 📝 React Todo App

A simple, responsive Todo application built with **React** and **Vite**, styled using **Tailwind CSS**.

### 🔗 Live Demo
👉 [View Live App](https://dishantsuthar-tech.github.io/my-todo-app/)

---

## ✨ Features

- ➕ Add new todos
- ✅ Mark todos as complete/incomplete
- 🗑️ Delete a single todo
- 🧹 Delete all todos at once
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🔔 Toast notifications on actions (create/delete)
- ✔️ Form validation using React Hook Form

---

## 🛠️ Tech Stack

- **React** – UI library
- **Vite** – Fast build tool & dev server
- **Tailwind CSS** – Utility-first styling
- **React Hook Form** – Form handling & validation
- **React Toastify** – Toast notifications
- **nanoid** – Unique ID generation

---

## 🚀 Getting Started (Run Locally)

```bash
# Clone the repository
git clone https://github.com/dishantsuthar-tech/my-todo-app.git

# Move into the project folder
cd my-todo-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173/`

---

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── Create.jsx     # Form to add new todos
 │    ├── Read.jsx       # List of todos + actions
 │    └── ShinyText.jsx  # Animated heading text
 ├── Wrapper.jsx         # Context provider for todos state
 ├── App.jsx             # Root layout
 └── main.jsx            # Entry point
```
---

### 🙌 Feedback

If you find a bug or have a suggestion, feel free to open an issue or a pull request!
