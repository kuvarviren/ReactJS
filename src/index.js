import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({name}){
  return (
    <h1>It is {name} Lake</h1>
  );
}
function App(){
  return (
    <div>
      <Lake name="Virthur" />
      <Lake  name="BTM" />
      <Lake  name="Thippasandra" />
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

