import React from 'react';

import './App.css';
import axios from "axios"

import Pickup from "./components/Pickup"


// axios("http://pebble-pickup.herokuapp.com/tweets/random")
// .then(res=>{
//   console.log(res.data.tweet)
//   const pickUpLine = res.data.tweet
// })

function App() {
  return (
    <div className="App">
      <Pickup/>
      

    </div>
  );
}



export default App;
