import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const MoviesList =['charlie','krack','96','premam','ustad hotel']
  const nayoks = ['alamgir','rajjak','amit hasan','anwar','arfin sovu']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MoviesCounter></MoviesCounter>
         {/* <Movies movies="Pk"></Movies> */}
        <Movies name={MoviesList[0]} times="02"></Movies>
       {/* <Movies name={MoviesList[2]} times="03"></Movies> */}
        {/* <Movies name={MoviesList[1]} times="02"></Movies>
        <Movies name={MoviesList[3]} times="05"></Movies> */}
       {/* {
         MoviesList.map(Movies=> <Movies name={MoviesList[1]} times="02"></Movies>)
       } */}
     { 
     nayoks.map(nayok => <Nayok nayok={nayoks[1]}></Nayok>) /// this is array function, by that which is showing the data of nayoks/////
     }
      </header>
    </div>
  );
}
/////show nayoks data////
function Nayok (props){
  const nayoksStyle={
    border:'1px solid gray',
    borderRadius:'10px',
    backgroundColor:'lightblue',
    height:'100px',
    margin:'5px',
    color:'blue',
    width:'200px'
  }
  console.log(Nayok);
  return (
    <div style={nayoksStyle}>
      <h4>my name is:{props.nayok} </h4>
    </div>
  )
}

function MoviesCounter () {
  const boxStyle={
    border:'2px solid purple',
    margin:'30px',
    padding:'20px',
    width:'500px'
  }
  const btnStyle ={
   
    color:'red',
    textTransform:'bold'

  }
  // const count = 0;
  // const [count,setCount] = ['abc','def']
  const [count,setCount] = useState(5)
  // console.log(count,setCount)
  const displayCount = ()=> {(setCount(count+1))}
  const displayRmvCount = ()=> {(setCount(count-1))}
  return (
    <div style={boxStyle}>
      <button onClick={displayCount} style={btnStyle}>add movies</button>
      <button onClick={displayRmvCount} style={btnStyle}>remove movies</button>
      <AddNumber movie={count+2}></AddNumber>
      <h3>number of movie: {count}</h3>
    </div>
  )
}

function AddNumber (props){
  return (
    <div>
      <h4>i have acted on this:{props.movie}</h4>
    </div>
  )
}
function Movies (props){
  // console.log(props)
  const moviesStyle = {
    border:'2px solid gold',
    margin:'20px',
    // padding:'30px',
    color:'whiteSmoke',

  }
  return <div style={moviesStyle}>
    <h2>name of watched movies:- {props.name}</h2>
    <h4>i have watched this movie {props.times} times</h4>
  </div>
}
export default App;
