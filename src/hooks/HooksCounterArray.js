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
            iteams.map(iteam=>(<li key={iteam.id}>{iteam.value}
            </li>))
        }
    </ul>
    </>
)
}

export default HooksCounterArray;




// the useState hook lets you add state to functional Components
// in class the state is always an Object
// with the usestate hook,the state doesn't have to be an object 
// the usestate hook returns an array with 2 Element
// the first element is the current value of  the state and the second element is a state setter  function 
// new state value depends on the previous state value ? you can  pass a function to the setter function 
// when dealing with object or array alwyas make sure to spread  your state variable  and then call the setter function    