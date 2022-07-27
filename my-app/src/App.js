import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Currency from './Currency';

function App() {
  const [type1,setType1]=useState("")
  const [type2,setType2]=useState("")
  const [curr,setCurr]=useState()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
        <input type="number" onChange={(e)=>{setCurr(e.target.value)}} placeholder='Enter currency'></input>
        <br></br>
        <select onChange={(e)=>{setType1(e.target.value)}}>
          <option value="None">None</option>
          <option value="UNDollar">UNDollar</option>
          <option value="RUB">RUB</option>  
          <option value="CNY">CNY</option>  
          <option value="CANADIANDOLLAR">CANADIANDOLLAR</option>  
          <option value="BajanDollar">BajanDollar</option>  
        </select>
        to
        <select onChange={(e)=>{setType2(e.target.value)}}>
          <option value="None">None</option>
          <option value="UNDollar">UNDollar</option>
          <option value="RUB">RUB</option>  
          <option value="CNY">CNY</option>  
          <option value="CANADIANDOLLAR">CANADIANDOLLAR</option>  
          <option value="BajanDollar">BajanDollar</option>  
        
        </select>
        <br></br>
        <Currency type1={type1} type2={type2} curr={curr}></Currency>
      </header>
    </div>
  );
}

export default App;
