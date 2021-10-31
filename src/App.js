import React from 'react'
import './App.css';

import ConstructSeats from './Component/Seats/Seats';
import Header from './Component/header/Header';
import Footer from './Component/footer/Footer'

let arr = [[3,2],[4,3],[2,3],[3,4]]

function App() {

  const [planeSize, setPlaneSize] = React.useState(arr);
  const [passengers, setPassengers] = React.useState(30);

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
