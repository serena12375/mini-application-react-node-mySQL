
import './App.css';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import React, { useState, useEffect } from "react";

import axios from 'axios'; 




import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





function App() {
  const [name, setName] = useState("");
  const [user, setUser]=useState([]); 

  const submitUser =() => {
    axios.post("http://localhost:3001/api/insert",{name:name})
    
    };

    useEffect(()=> { 
      axios.get("http://localhost:3001/api/get",).then((result)=> {
       setUser(result.data);
      });
      }, []);




  
  
      return (
    <div className="App">
     <h1> Hello Mini-App </h1> 
    
    <center> <div className ="form">
     
     <TextField id="filled-basic" label="Please type user-name here" size="large"variant="filled" onChange={(e)=>{setName(e.target.value);
        }}  />
     &nbsp;&nbsp; &nbsp;
          
    <pre></pre>
        <Button onClick={submitUser} variant="contained" size="large" color="primary" > ADD User </Button> 
        <pre> </pre>
        <pre> </pre>
<Grid item xs={6}>
  
   
    <TableContainer component={Paper}>
    
    <Paper elevation={0} />
      <Paper />
        
    
        <TableHead>
        <div caption>
         <p>  <b>Tableau des utilisateurs: </b> </p> </div> 
           <TableRow>
            <TableCell align="left" >ID </TableCell>
            <TableCell align="right">Nom</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          
        {user.map((row, index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" > {index+1}
                </TableCell>
              
              <TableCell align="right" >{row.name}</TableCell>
             
            </TableRow>
          ))}
      
        </TableBody>
        </TableContainer></Grid>
    
    </div>  </center>  </div> 
    
   
  );
}

export default App;