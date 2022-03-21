import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  "Virthur",
  "BTM",
  "Thippasandra"
];

function App({lakes}){
  return (
    <div>
      <ul>
      {
        lakes.map(lake=>(
          <li>{lake}</li>
        ))
      }
      </ul>
    </div>
  );
}
ReactDOM.render(
  <App lakes = {lakeList} />,
  document.getElementById('root')
);

