import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
  const [status,setState] = useState("Open");
  return (
    <div>
      <h1>status: {status}</h1>
      <button onClick={()=>setState("Closed")}>Closed</button>
      <button onClick={()=>setState("Open")}>Open</button>
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);


