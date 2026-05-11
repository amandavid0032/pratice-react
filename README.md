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



## what are hooks 

 hook are special functions that let you hook into react feature like state and life cycle from function components 

 hooks are a new feature addition in react version 16.8 which allow you to use react features without having. to write a class 
 ex. state of component 
 hooks don't work inside classes 


 why hoooks 

 resone 1 

 understand how this keyword works in javascript remember to bind event handlers in class components classes don't minify very well and make hot reloading very unreliable 

 resone set 2 
 there is no particular way to resuse statefull component logix hoc and render props patterns do address this problem makes the code harder to follow there is need a to share statefull logic in a better way 

 resone set 3 
 create components for complex scenarios such as data ftching and subscribing to even t related code is not organized in one placcr 
 ex data featching in componentdid mount and component did update 
 ex event listeners in componentdidmount and componentwull Unmount 
 because of statefull logic-- cannot break components into smaller ones 


 noteworthy points 
 react version 16.8 or hgher 
 completelt opt in 
 hooks don't conatian any breaking chanhes and the release is 100% backwards-compatible 
 classes won't be removed from react 
 cant't use hooks insider of a class component
 hooks don't replace your existing knowledge of react concepts 
 instead hooks provied a more direct api to the react concepts you already know 


 summary 
 hooks are a new feature addition in react version 16.8 
 they allow you to use react features without having to write a class
  
  avoid the whole confusion with this keyword allow you to resuse statefull logid 
  organize the logic inside a component into reusable isolated units 
  