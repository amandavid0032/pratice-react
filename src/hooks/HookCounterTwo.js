import React,{useState} from "react";

function HookCounterTwo (){
const initialcount=0;
const[count,setCount]=useState(initialcount);
const   incrementFive=()=>{
    for(let i=0;i<5;i++){
        setCount(prevCount=>prevCount+1)
    }
}
return(
    <div>
        count:{count}
        <button onClick={()=>setCount(initialcount)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>add</button>
        <button onClick={()=>setCount(count-1)}>sub</button>
        <button onClick={incrementFive}>incrementFive</button>

 
    </div>
)
}

export default HookCounterTwo;