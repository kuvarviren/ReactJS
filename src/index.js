import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  {id:1,name:"Virthur", trailhead:"Echo"},
  {id:2,name:"BTM",trailhead:"BayView"},
  {id:3,name:"Thippasandra",trailhead:"OceanView"},
 ];

function App({lakes}){
  return (
    <div>
      {
        lakes.map(lake=>(
          <div key={lake.id}>
            <h1>{lake.name}</h1>
            <p>{lake.trailhead}</p>
          </div>))
      }
    </div>
  );
}
ReactDOM.render(
  <App lakes = {lakeList} />,
  document.getElementById('root')
);

