import react, { useState } from "react";
const UseStateObject=()=>{
  const[myObj,setMyObj]=useState({
      myname:'Hira Nisar',
      degree:'Software Engineering',
      rollno:18251598035,
      age:21,
  });

  const ChangeObject=()=>{
      setMyObj({...myObj, myname:'HIRA NISAR'});
  }

    return(
<>
<h1 align="center">
{`My name is ${myObj.myname}. I'm doing ${myObj.degree}. RollNo is ${myObj.rollno}. My age is ${myObj.age}.`}
</h1>
<button style={{marginLeft:'48%'}} type="button" onClick={ChangeObject}>CLICK ME</button>



</>
    );
}
export default UseStateObject;