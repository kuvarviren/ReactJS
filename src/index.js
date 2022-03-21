import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake(){
  return <h1>Lake!</h1>;
}
function Ski(){
  return <h1>Ski!</h1>;
}
function App({lakes}){
  return (
    <React.Fragment>
      <Lake />
      <Ski />
    </React.Fragment>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

