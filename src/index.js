import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(props){
  console.log(props);
  return (
    <div>
      <h1>Welcome to {props.library}!</h1>
      <p>{props.message}</p>
      <p>props total = {props.number}</p>
    </div>
  );
}
ReactDOM.render(
  <Hello 
  library="React" 
  message="Have fun!"
  number = {5}
  />,
  document.getElementById('root')
);

