
import React, { useState } from 'react';
import "./App.css";
import Profile from './component/profile';

function App() {
  const [show,setshow]=useState(false);
  const [person,setperson]=useState(
    [{
      fullName:"wided",
      profession:"developper",
      level: "master degree",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTenQQEz7i_bZEWqTZ6mAOtgrWfvNrwap0w&usqp=CAU"
    },
    ]);
   return (
     <div style={{textAlign:"center"}}>
       <button onClick={()=>setshow(!show)}>Show profile</button>
        {show?<div className="App">
      {person.map((el) => (
        <Profile p={el} />
        ))}
    </div>:null}
    </div>
  );
}

export default App
