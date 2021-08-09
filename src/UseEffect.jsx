import React, { useEffect, useState } from "react";
const UseEffect=()=>{
const[count,setCount]=useState(0);
//We can use multiple useEffects in your project with different functionalities
    useEffect(()=>{
        if(count>=1){
        document.title=`Chats (${count})`;
        }
        else{
            document.title=`Chats`;
        }
    },[count]);

    //counter
    // const IncreaseValue=()=>{
        
    // };
    return(

<>
<h1>{count}</h1>
<button type="button" onClick={()=>setCount(count + 1)}>CLICK</button>
</>
    );
};
export default UseEffect;