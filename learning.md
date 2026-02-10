# React – Core Basics Notes

> This document contains **proper definitions and foundational concepts** of React.
> We will **keep extending this file later** with more topics (Props, State, Hooks, Routing, etc.).

---

## 1. What is React?

**React** is a **JavaScript library** used to build **user interfaces (UI)**, especially **single-page applications (SPA)**.

Key ideas of React:
- Component-based architecture
- Declarative UI
- Efficient updates using Virtual DOM

---

## 2. What is a Component in React?

A **component** is a **reusable, independent piece of UI**.

In technical terms:
> A component is a **JavaScript function or class** that **returns JSX**.

### Example (Functional Component):
```jsx
function Hello() {
  return <h1>Hello React</h1>;
}
```

Usage:
```jsx
<Hello />
```

### Why Components?
- Reusability
- Clean & modular code
- Easy maintenance
- Faster development

---

## 3. Types of Components in React

React mainly has **two types of components**.

---

### 3.1 Functional Components (Modern & Recommended)

A **functional component** is a **normal JavaScript function** that returns JSX.

Example:
```jsx
function Welcome() {
  return <h2>Welcome User</h2>;
}
```

Arrow function version:
```jsx
const Welcome = () => <h2>Welcome User</h2>;
```

Key Points:
- Simple and clean syntax
- Uses React Hooks
- Most widely used today

---

### 3.2 Class Components (Legacy)

A **class component** is created using a **JavaScript class**.

Example:
```jsx
class Welcome extends React.Component {
  render() {
    return <h2>Welcome User</h2>;
  }
}
```

Key Points:
- Uses `render()` method
- Uses `this`
- Older approach
- Mostly replaced by functional components

---

## 4. JSX (JavaScript XML)

**JSX** is a syntax extension for JavaScript that looks like HTML.

Example:
```jsx
const element = <h1>Hello World</h1>;
```

Important Notes:
- JSX is **NOT HTML**
- JSX is **NOT understood by browsers**
- JSX makes UI code readable and clean

---

## 5. Why Components Use JSX?

Components use JSX because:
- UI structure becomes easy to write
- Logic and UI stay together
- Code becomes readable and maintainable

Example:
```jsx
function Greeting() {
  const name = "Aman";
  return <h1>Hello {name}</h1>;
}
```

---

## 6. Browser Cannot Understand JSX ❌

Browsers understand only:
- HTML
- CSS
- JavaScript

They **do not understand JSX**.

So JSX must be converted into normal JavaScript before running in the browser.

---

## 7. Babel (JSX Compiler)

**Babel** is a **JavaScript compiler (transpiler)**.

Role of Babel:
- Converts JSX into normal JavaScript
- Makes React code browser-compatible

### JSX Code:
```jsx
<h1>Hello</h1>
```

### Converted by Babel to:
```js
React.createElement("h1", null, "Hello");
```

---

## 8. Complete Flow (Very Important)

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

## 9. Do We Install Babel Manually?

❌ No (in modern React setups)

Tools like:
- Create React App (CRA)
- Vite
- Next.js

already configure **Babel internally**.

---

## 10. Important Rules of Components

- Component names must start with **Capital Letter**
- Components must return **JSX**
- JSX must return **one parent element**

Correct:
```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

---

## 11. One-Line Summary

> **React components use JSX, and Babel converts JSX into browser-understandable JavaScript.**

---

## 12. Next Topics to Add (Later)

- Props
- State
- Hooks (`useState`, `useEffect`)
- Event Handling
- Conditional Rendering
- Lists & Keys
- Component Lifecycle
- Routing
- API Integration

---

✅ This file is intentionally structured to be **extended step-by-step** as your React knowledge grows.

