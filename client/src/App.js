import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios'; 

function App() {
const [name, setName] = useState("");

const [nameList, setNameList] = useState([]);

useEffect(()=> {
  axios.get("https://localhost:3001/api/get",).then((response)=> {
    setNameList(response.data);
  });
  }, []);

  
  
  const submitUser =() => {
axios.post("https://localhost:3001/api/insert",{name:name}).then(()=> {
  alert("successful insert");
});
};
  return (
    <div className="App">
     <h1> Hello </h1>
     
     <div className ="form">
       <label for="name" >Nom :</label>
        <input type="text" id="name" name="name" onChange={(e)=>{setName(e.target.value);
        }} />
    
       
    <button onClick={submitUser} > ADD </button>
    {nameList.map((val) => {
      return <h1> name: {val.name} </h1>
    })}
    </div>
    </div>
  );
}

export default App;
