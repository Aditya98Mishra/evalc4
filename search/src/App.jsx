import React  from 'react';
import './App.css';
import {Routes , Route} from "react-router-dom";
import {Home} from "./components/Home";
import {Result} from "./components/Result"
import {Navbar} from "./components/Navbar"
import {useState,useEffect} from "react";


function App() {

  const [data,setData] = useState([]);

  const getData = ()=>{
    fetch("https://fast-reef-22226.herokuapp.com/data").then((res)=>{
      res.json().then((data)=>{
        setData([data])
      })
    })
  }


  return (
    <div className="App">    
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/result' element={<Result/>}></Route>
      </Routes>


      <button onClick={()=>{getData()}}>search</button>
      {data.length >= 1 ? <p style={{color:"teal"}}>{data.title}</p>:"NO"}
     <div>
     
     </div>


      
    </div>
  );
}

export default App;
