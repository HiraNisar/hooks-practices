import React, { useEffect, useState } from "react";
const UseEffectCleanUpFunction=()=>{
    const[width,setWidth]=useState(window.screen.width);

    const actualWidth=()=>{
          setWidth(window.innerWidth);
    }
    useEffect(()=>{
    window.addEventListener("resize",actualWidth);

    return()=>{
        window.removeEventListener("resize",actualWidth);
    }
    });
    return(
<>
<p>Size Of Window</p>
<h1>{width}</h1>
</>
    );
};
export default UseEffectCleanUpFunction;