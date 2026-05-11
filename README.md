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

---

# 🪝 React Hooks

## 📌 What are Hooks?

Hooks are **special functions** that let you use React features like:

* State management
* Lifecycle methods
* Side effects
* Context API

inside **functional components** without writing class components.

👉 Hooks were introduced in **React 16.8**.

---

## 🤔 Why Were Hooks Introduced?

Before Hooks, developers mainly used **class components** for state and lifecycle methods.

But class components created many problems.

---

## ❌ Problems with Class Components

### 1. `this` Keyword Confusion

In class components:

* You must use `this` everywhere
* Event handlers often need `bind(this)`
* Forgetting to bind causes errors

#### Example:

```jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
  }

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
```

👉 This makes the code more complex and harder to understand.

---

### 2. Reusing Stateful Logic Was Difficult

Before Hooks, React used:

* Higher Order Components (HOC)
* Render Props

for sharing logic between components.

But this created:

* Nested components
* Hard-to-read code
* Complex structures

#### Example Problem:

If two components need the same logic (like mouse tracking or API fetching), the logic cannot be reused easily.

---

### 3. Lifecycle Methods Were Hard to Manage

Related logic was often spread across multiple lifecycle methods.

#### Example:

Data fetching:

```jsx
componentDidMount()
componentDidUpdate()
```

Event listeners:

```jsx
componentDidMount()
componentWillUnmount()
```

👉 Code became difficult to organize and maintain.

---

## ✅ Advantages of Hooks

Hooks solve these problems.

### ✨ Benefits of Hooks

* No need for class components
* No `this` keyword confusion
* Cleaner and shorter code
* Better code reusability
* Easier state management
* Better organization of logic
* Easier to understand and maintain

---

# 🔥 Important Points About Hooks

* Hooks were introduced in **React 16.8**
* Hooks are completely optional
* Hooks are backward compatible
* Class components are still supported
* Hooks do not work inside class components
* Hooks do not replace React concepts
* Hooks provide a simpler API for React features

---

# ⚙️ Common React Hooks

## 1. useState Hook

Used to manage state inside functional components.

### ✅ Example:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### 📖 Explanation:

* `count` → current state value
* `setCount` → function to update state
* `useState(0)` → initial value is `0`

---

## 2. useEffect Hook

Used for:

* API calls
* Side effects
* Event listeners
* Timers
* Updating the DOM

### ✅ Example:

```jsx
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('Component Mounted');
  }, []);

  return <h1>Hello React</h1>;
}
```

### 📖 Explanation:

* `useEffect()` runs after rendering
* Empty dependency array `[]` means it runs only once

---

## 3. useContext Hook

Used to access data globally without prop drilling.

### Example Use Cases:

* Theme management
* Authentication
* Language settings

---

## 4. useRef Hook

Used to:

* Access DOM elements directly
* Store mutable values

---

## 5. useMemo Hook

Used for performance optimization by memoizing values.

---

## 6. useCallback Hook

Used to memoize functions and prevent unnecessary re-renders.

---

# 📏 Rules of Hooks

## ✅ Rule 1: Only Call Hooks at the Top Level

❌ Do NOT call hooks:

* Inside loops
* Inside conditions
* Inside nested functions

### ✅ Correct:

```jsx
function App() {
  const [count, setCount] = useState(0);
}
```

### ❌ Wrong:

```jsx
if (true) {
  useState();
}
```

---

## ✅ Rule 2: Only Call Hooks from React Functions

Hooks can only be used:

* Inside React functional components
* Inside custom hooks

❌ Do NOT use hooks inside:

* Normal JavaScript functions
* Class components

---

# 🧠 Functional Components + Hooks

Hooks made functional components very powerful.

Now functional components can:

* Manage state
* Handle lifecycle methods
* Perform API calls
* Reuse logic
* Handle side effects

👉 Because of Hooks, functional components became the modern standard in React.

---

# 📌 Final Summary

* Hooks were introduced in React 16.8
* Hooks allow React features inside functional components
* Hooks remove the need for class components
* Hooks make code cleaner and reusable
* Functional components + Hooks are the modern React approach
* Hooks simplify state and lifecycle management
