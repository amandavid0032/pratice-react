# ⚛️ React.js Notes

## 📌 What is React?

React is a **JavaScript library** used for building **user interfaces (UI)**, especially for web applications.

* Developed by **Facebook**
* Used to build **component-based applications**
* Supports **Single Page Applications (SPA)**

---

## 🚀 Key Features of React

* ⚡ **Virtual DOM** → Improves performance by updating only changed parts
* ♻️ **Reusable Components** → Write once, use multiple times
* 🔄 **Unidirectional Data Flow** → Data flows in one direction (parent → child)
* 🧩 **JSX Syntax** → Cleaner and more readable code (HTML inside JavaScript)

---

## 📚 Library vs Framework

### 🧰 Library (React)

A library is like a **toolbox**:

* Collection of pre-written code
* You control how and when to use it

### 🏗 Framework

A framework is like a **complete workshop**:

* Pre-structured environment
* Controls how your code should be organized
* Calls your code when needed

---

## 🧱 What is a Component?

A **component** is a reusable, independent piece of UI.

👉 You can build complex UIs by combining small components.

---

## 🔀 Types of Components

### 1. Functional Components (Recommended)

* Simple JavaScript functions
* Accept **props** as input
* Return **JSX (UI elements)**
* Use **Hooks** for state and lifecycle

#### ✅ Example:

```jsx
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

---

### 2. Class Components (Older Approach)

* ES6 classes that extend `React.Component`
* Use `render()` method to return JSX
* Manage state using `this.state`
* Update state using `this.setState()`

#### ⚠️ Problems with Class Components:

* Need to use `this` everywhere
* Must bind functions (`bind(this)`) → error-prone
* Hard to reuse logic
* Leads to complex patterns like:

  * Higher Order Components (HOC)
  * Render Props

---

## ⚔️ Functional vs Class Components

### 🟢 Functional Components

* Simple and easy to write
* No `this` keyword
* Use Hooks (`useState`, `useEffect`)
* Preferred in modern React
* Best for UI and logic

### 🔵 Class Components

* More complex
* Manage their own state
* Provide lifecycle methods
* Used in older React codebases

---

## 🧠 Summary

* React is a **powerful UI library**
* Uses **components** to build interfaces
* **Functional components + Hooks** are the modern approach
* Helps build fast, scalable, and maintainable apps

---

## 💡 Tip

👉 Always prefer **functional components** unless you are working on legacy code.
