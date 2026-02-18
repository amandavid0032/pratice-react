import { useState } from "react";

function Counter(){
const [count,setcount]=useState(0);
const inc=()=>{
    setcount(count+1)
}
return<>
<h2>count:{count}</h2>
<button onClick={inc}> 
    Incress
</button>
</>

}

export default Counter;