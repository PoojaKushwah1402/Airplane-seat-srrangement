import React from 'react';

import resultSeat from './SeatCalculation'
import getTheSeatsArrangment from './getSeatsArrangement';
import DataDisplay from './UserDataDisplay';
import ErrorPage from '../Error/ErrorPage'
import './Seat.css'


const ConstructSeats = ({planeSize, passengers}) => {

    const seat = resultSeat(planeSize, passengers)
    console.log(seat,'seat')

    let As = {
        count :  0,
        max : false
    }
    let Ws = {
        count :  seat.AS,
        max : false
    }
    let Ms = {
        count :  seat.WS + seat.AS,
        max : false
    }

    return(
        <>
            <DataDisplay 
                planeSize={planeSize} 
                passengers={passengers}
            />

            {
                seat?   <div className='main-container' >
                         {getTheSeatsArrangment(As, Ws, Ms, seat, planeSize)}
                        </div> :
                        <ErrorPage/>
            }

        </>
    )
}

export default ConstructSeats;