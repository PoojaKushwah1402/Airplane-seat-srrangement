import React from 'react';

import resultSeat from './SeatCalculation'
import getTheSeatsArrangment from './getSeatsArrangement';
import DataDisplay from './UserDataDisplay';
import ErrorPage from '../Error/ErrorPage'
import './Seat.css'


const ConstructSeats = ({planeSize, passengers}) => {

    const seat = resultSeat(planeSize, passengers)

    //As, Ws, Ms are objects where Object.count is the current number of seats accured by the asile,window or 
    //middle seats. Object.max will be true when either all the (asile,window,middle) seats are occupied or 
    //all the passengers got the seat.
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
            {/* for displayong the current user input */}
            <DataDisplay 
                planeSize={planeSize} 
                passengers={passengers}
            />
            {/* checking if the given input array is correct, if it is correct then displaying the seat arrangement 
            or if not correct then displayong the error */}
            {
                seat?   <div className='main-container' >
                            {/* this method will desplay the seats */}
                         {getTheSeatsArrangment(As, Ws, Ms, seat, planeSize)} 
                        </div> :
                        <ErrorPage/>
            }

        </>
    )
}

export default ConstructSeats;