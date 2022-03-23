import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Checkbox(){
  const [checked,setCheck] = useState(false);
  //To print the value of checked state
  useEffect = alert(`The value of checked: ${checked.toString()}`);
  return (
    <>
     <input type="checkbox" value={checked} onChange={()=>setCheck(checked=>!checked)}/> {checked ? "Agree" : "Disagree"}
    </>
  );
}
ReactDOM.render(
  <Checkbox />,
  document.getElementById('root')
);


