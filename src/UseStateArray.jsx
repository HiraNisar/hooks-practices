import React, { useState } from "react";
const UseStateArray=()=>{
const ArrayData=[
    {
        id:0,
        name:'Hira',
        rollno:35,
    },
    {
        id:1,
        name:'Amina',
        rollno:53,
    },
    {
        id:2,
        name:'IRSA',
        rollno:63,
    },
];
const[myarray,setarray]=useState(ArrayData);
//For Clear the Array 
const ClearArray=()=>{
setarray([]);
}

//Remove Array data individually
const RemoveId=(id)=>{
const mynewArray=myarray.filter((curentValue)=>{
    return curentValue.id !== id;

    
})
setarray(mynewArray);
}


    return(
<>
{
myarray.map((curentValue)=>{
    return(
        <>
<h1  key={curentValue.id}>Name:{curentValue.name}, rollno: {curentValue.rollno}</h1>
<button type="button"  onClick={()=>RemoveId(curentValue.id)}>REMOVE</button>
</>
    );
})
    
}
<br/>
<br/>

<button style={{marginLeft:'38%'}} type="button" onClick={ClearArray}>CLEAR</button>

</>
    );
};
export default UseStateArray;