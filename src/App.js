import React from 'react'
import './App.css';

import ConstructSeats from './Component/Seats/Seats';
import Header from './Component/header/Header';
import Footer from './Component/footer/Footer'

//default value for the global state
const initial = {
  size : [[3,2],[4,3],[2,3],[3,4]],
  passengers : 30
}

function App() {

  //create global states for the airplane size and passengers count and initialinzing them with default values
  const [planeSize, setPlaneSize] = React.useState(initial.size);
  const [passengers, setPassengers] = React.useState(initial.passengers);

  return (
    <div className="App">
        <Header 
          setPlaneSize={setPlaneSize} 
          setPassengers={setPassengers}
        />
        <ConstructSeats 
          planeSize={planeSize}
          passengers={passengers} 
        />
        <Footer/>
    </div>
  );
}

export default App;
