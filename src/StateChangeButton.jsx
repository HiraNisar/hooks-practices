import react, { useState } from "react";
const StateChangeButton=()=>{
    // let val="Hira Nisar"
const [setText, updateText]=useState('Hira Nisar');


const ChangeText=()=>{
updateText('Hira Nisar From JPJ');

//now toggle the value by using if else
let val=setText;
if(val==='Hira Nisar'){
    updateText('Hira Nisar From JPJ');
}
else{
    updateText('Hira Nisar');
}
};

    return(
<>
<h1 align="center">
  {setText}
</h1>
<button style={{marginLeft:'48%'}} type="button" onClick={ChangeText}>CLICK ME</button>



</>
    );
}
export default StateChangeButton;