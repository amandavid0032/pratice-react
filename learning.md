# ⚛️ React – Core Basics Notes

> 📘 This document contains **clear definitions and foundational concepts** of React.
> 🚀 We will **extend this step‑by‑step** with more advanced topics (Props, State, Hooks, Routing, etc.).

---

# 1️⃣ What is React?

**React** is a **JavaScript library** used to build **user interfaces (UI)**, especially **Single Page Applications (SPA)**.

### 🔑 Core Principles of React

* 🧩 Component-Based Architecture
* 📝 Declarative UI Approach
* ⚡ Efficient updates using Virtual DOM
* 🔄 Reusable UI elements

---

# 2️⃣ What is a Component in React?

A **component** is a **reusable and independent piece of UI**.

### 📌 Technical Definition

> A component is a **JavaScript function or class** that **returns JSX**.

---

## ✅ Example (Functional Component)

```jsx
function Hello() {
  return <h1>Hello React</h1>;
}
```

### ▶ Usage:

```jsx
<Hello />
```

---

## 🎯 Why Components?

* ♻️ Reusability
* 🧱 Modular structure
* 🛠 Easy maintenance
* 🚀 Faster development
* 📖 Cleaner code organization

---

# 3️⃣ Types of Components in React

React mainly has **two types of components**:

---

## 3.1 🟢 Functional Components (Modern & Recommended)

A **functional component** is a normal **JavaScript function** that returns JSX.

### Example:

```jsx
function Welcome() {
  return <h2>Welcome User</h2>;
}
```

### Arrow Function Version:

```jsx
const Welcome = () => <h2>Welcome User</h2>;
```

### 🔎 Key Features

* ✨ Simple and readable syntax
* 🪝 Supports React Hooks
* 🏆 Preferred in modern React
* ❌ No `this` keyword needed

---

## 3.2 🔵 Class Components (Legacy)

A **class component** is created using a JavaScript class.

### Example:

```jsx
class Welcome extends React.Component {
  render() {
    return <h2>Welcome User</h2>;
  }
}
```

### 🔎 Key Features

* Uses `render()` method
* Uses `this`
* Older pattern
* Mostly replaced by functional components

---

# 4️⃣ JSX (JavaScript XML)

**JSX** is a syntax extension for JavaScript that looks similar to HTML.

### Example:

```jsx
const element = <h1>Hello World</h1>;
```

### 📌 Important Notes

* ❌ JSX is NOT HTML
* ❌ Browsers do NOT understand JSX directly
* ✅ JSX improves readability
* ✅ Allows embedding JavaScript using `{ }`

Example:

```jsx
const name = "Aman";
<h1>Hello {name}</h1>;
```

---

# 5️⃣ Why Components Use JSX?

Components use JSX because:

* 🏗 UI structure becomes easier to write
* 🔗 Logic and UI stay together
* 📚 Code becomes more readable
* 🧠 Easier to understand complex layouts

### Example:

```jsx
function Greeting() {
  const name = "Aman";
  return <h1>Hello {name}</h1>;
}
```

---

# 6️⃣ Browser Cannot Understand JSX ❌

Browsers understand only:

* 🌐 HTML
* 🎨 CSS
* 📜 JavaScript

They **do not understand JSX**.

👉 Therefore, JSX must be converted into normal JavaScript before execution.

---

# 7️⃣ Babel (JSX Compiler) 🔄

**Babel** is a **JavaScript compiler (transpiler)**.

### 🎯 Role of Babel

* Converts JSX into normal JavaScript
* Ensures browser compatibility
* Converts modern JS into backward-compatible JS

---

### 🔁 Conversion Example

#### JSX Code:

```jsx
<h1>Hello</h1>
```

#### Converted by Babel:

```js
React.createElement("h1", null, "Hello");
```

---

# 8️⃣ Complete React Flow (Very Important) 🧠

```
Component
   ↓
JSX
   ↓
Babel
   ↓
React.createElement()
   ↓
Virtual DOM
   ↓
Real DOM (Browser)
```

---

# 9️⃣ Do We Install Babel Manually?

❌ No (in modern React setups)

Tools like:

* ⚙️ Create React App (CRA)
* ⚡ Vite
* 🌍 Next.js

already configure **Babel internally**.

---

# 🔟 Important Rules of Components

* 🔠 Component names must start with a **Capital Letter**
* 📤 Components must return **JSX**
* 🧱 JSX must return **one parent element**

### ✅ Correct Example:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

---

# 📝 One-Line Summary

> ⚛️ **React components use JSX, and Babel converts JSX into browser-understandable JavaScript.**

---

# 1️⃣1️⃣ 📦 Props (Properties) – Complete Detailed Guide

## 🔹 What Are Props?

**Props (short for Properties)** are a mechanism in React used to **pass data from a parent component to a child component**.

### 📌 Technical Definition

> Props are **read-only inputs** passed to components to make them dynamic and reusable.

Think of props like **function parameters** in JavaScript.

---

## 🧠 Why Props Are Important?

* ♻️ Make components reusable
* 🔄 Allow dynamic data rendering
* 🧩 Enable parent → child communication
* 🏗 Help build scalable UI architecture

---

## ✅ Basic Example of Props

### 👨‍👩‍👧 Parent Component

```jsx
function App() {
  return <Greeting name="Aman" />;
}
```

### 👶 Child Component

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

📌 Here:

* `name` is a prop
* `props` is an object
* `props.name` accesses the passed value

---

## 🔹 Multiple Props Example

```jsx
<UserCard name="Priya" age={22} city="Delhi" />
```

Child:

```jsx
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}
```

📌 Props can contain:

* Strings
* Numbers
* Booleans
* Arrays
* Objects
* Functions

---

## 🔹 Props Are Read-Only ⚠️

Props **cannot be modified inside the child component**.

❌ Wrong:

```jsx
props.name = "Changed";
```

If data needs to change → use **State**, not props.

---

## 🔹 Destructuring Props (Best Practice)

Instead of:

```jsx
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

Use:

```jsx
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}
```

✔ Cleaner
✔ More readable
✔ Widely used in modern React

---

## 🔹 Passing Functions as Props

Props can also pass **functions**.
This allows child components to trigger parent logic.

### Parent:

```jsx
function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <Button onAction={handleClick} />;
}
```

### Child:

```jsx
function Button({ onAction }) {
  return <button onClick={onAction}>Click Me</button>;
}
```

📌 This is called **Callback Props Pattern**.

---

## 🔹 Props vs State (Basic Difference)

| Feature     | Props         | State                    |
| ----------- | ------------- | ------------------------ |
| Mutability  | Read-only     | Can change               |
| Passed From | Parent        | Managed inside component |
| Purpose     | Configuration | Dynamic data             |

---

## 🔹 Props Flow Direction

React follows **One-Way Data Flow**:

```
Parent Component
      ↓
   Child Component
```

Data flows **downward only**.

---

# 📝 Updated One-Line Summary

> ⚛️ React components use JSX, Babel converts JSX into JavaScript, and Props allow parent components to pass read-only data to child components.

---

# 📌 Next Topics to Add

* 🔄 State
* 🪝 Hooks (`useState`, `useEffect`)
* 🖱 Event Handling
* 🔀 Conditional Rendering
* 📋 Lists & Keys
* 🔁 Component Lifecycle
* 🛣 Routing
* 🌐 API Integration

---



