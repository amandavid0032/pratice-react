import './App.css';
import HooksCounterArray from './hooks/HooksCounterArray';
// import HookCounter from './hooks/HooksCounter';
// import ClassCounter from './hooks/ClassCounter';
// import HookCounterTwo from './hooks/HookCounterTwo';
// import HookCounterObject from './hooks/HookCounterObject';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounterObject/> */}
        <HooksCounterArray/>
      </header>
    </div>
  );
}

export default App;