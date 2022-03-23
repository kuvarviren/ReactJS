import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
  const [val,setval] = useState("");
  const [val2,setval2] = useState("");
  //To print the value of checked state
  useEffect(()=>{
    console.log(`field1: ${val}`);
  },[val]);
  useEffect(()=>{
    console.log(`field2: ${val2}`);
  },[val2]);
  return (
    <>
      <label>
        favorite phrase:
        <input value={val} onChange={e=>setval(e.target.value)}/>
      </label>
      <br />
      <label>
        other favorite phrase:
        <input value={val2} onChange={e=>setval2(e.target.value)}/>
      </label>
    </>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);


