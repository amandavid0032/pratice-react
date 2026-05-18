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

## 7. useState with Object

When you use `useState` with an object, the entire object is replaced on update.

👉 React does NOT merge object state automatically in functional components.

Because of this, we use the **spread operator (`...`)** to copy existing properties before updating a specific value.

### ✅ Example:

```jsx
import { useState } from "react"

function HookCounterObject(){
    const[name,setName]=useState({firstname:'',lastname:''})

    return (
        <form>
            <input 
                type="text" 
                value={name.firstname} 
                onChange={e=>setName({...name,firstname:e.target.value})}
            />

            <input 
                type="text" 
                value={name.lastname} 
                onChange={e=>setName({...name,lastname:e.target.value})}
            />

           <h2>Your First name is {name.firstname}</h2>
           <h2>Your Last name is {name.lastname}</h2>

        </form>
    )
}

export default HookCounterObject;
```

---

## 📖 Explanation of useState with Object

### 🔹 `useState({})`

```jsx
const [name, setName] = useState({
  firstname: '',
  lastname: ''
})
```

* `name` → Current state object
* `setName` → Function used to update state

---

### 🔹 Why Use the Spread Operator?

Suppose you write:

```jsx
setName({ firstname: 'Aman' })
```

❌ Problem:

This replaces the whole object.

Result:

```jsx
{
  firstname: 'Aman'
}
```

👉 `lastname` gets removed.

---

### ✅ Correct Way

```jsx
setName({
  ...name,
  firstname: e.target.value
})
```

### 📖 What Happens Here?

* `...name` copies old properties
* `firstname` gets updated
* Other values remain unchanged

---

## 8. useState with Array

The `useState` hook can also store arrays.

When updating arrays, always create a new array using the spread operator.

### ✅ Example:

```jsx
import React,{Component, useState} from "react";

function HooksCounterArray (){  

const[iteams,setIteam]=useState([]);

const addIteam=()=>{
    setIteam([...iteams,{
        id:iteams.length,
        value:Math.floor(Math.random()*10+1)
    }])
}

return (
    <>
    <button onClick={addIteam}>Add a number</button>

    <ul>
        {
            iteams.map(iteam=>(
                <li key={iteam.id}>{iteam.value}</li>
            ))
        }
    </ul>
    </>
)
}

export default HooksCounterArray;
```

---

## 📖 Explanation of useState with Array

### 🔹 Initial State

```jsx
const [iteams, setIteam] = useState([])
```

* `iteams` → current array state
* `setIteam` → updates the array
* Initial value is an empty array `[]`

---

### 🔹 Adding New Items

```jsx
setIteam([...iteams, newItem])
```

### 📖 What Happens?

* `...iteams` copies existing items
* `newItem` gets added to the end
* React receives a brand new array

---

### 🔹 Random Number Logic

```jsx
Math.floor(Math.random()*10+1)
```

Generates a random number between:

```jsx
1 to 10
```

---

# 🚨 MUST-REMEMBER useState Points (Very Important for Interviews)

> 🔥 These points are extremely important for React interviews and real-world projects.
>
> 👉 Most beginners make mistakes in these concepts, especially while working with objects and arrays in state.
>
> ✅ Remember these carefully because they explain the core working of the `useState` Hook.

# 🌟 Most Important Points About useState (Interview Notes)

> ⚠️ These are some of the **most important concepts** in React Hooks and are frequently asked in interviews.

## 🧠 Important Notes About useState

```jsx
// the useState hook lets you add state to functional Components
// in class the state is always an Object
// with the useState hook, the state doesn't have to be an object
// the useState hook returns an array with 2 elements
// the first element is the current value of the state
// the second element is a state setter function
// if new state value depends on the previous state value,
// you can pass a function to the setter function
// when dealing with object or array always make sure
// to spread your state variable and then call the setter function
```

---

## ⚡ Functional Updates in useState

Sometimes the new state depends on the previous state.

In that case, pass a function inside the setter function.

### ✅ Example:

```jsx
const [count, setCount] = useState(0)

const increment = () => {
  setCount(prevCount => prevCount + 1)
}
```

### 📖 Explanation:

* `prevCount` contains previous state value
* React safely updates the latest state
* Best practice when state depends on old state

---

# 📌 Final Summary

* Hooks were introduced in React 16.8
* Hooks allow React features inside functional components
* Hooks remove the need for class components
* Hooks make code cleaner and reusable
* Functional components + Hooks are the modern React approach
* Hooks simplify state and lifecycle management
* `useState` can manage strings, numbers, objects, and arrays
* Objects and arrays must be updated immutably
* Always use the spread operator while updating objects or arrays
* Functional updates are useful when state depends on previous state
