import React from 'react';

import './DataDisplay.css'

const DataDisplay = props => {

    const { planeSize, passengers} = props

    return(
        <div className='banner' >
            <div className='banner-item'> 
                <label>Airplane Size (in matrix) : </label>
                 {JSON.stringify(planeSize)}
            </div>

            <div className='banner-item'> 
                <label>Total passengers : </label>
                {passengers}
            </div>
            <div className='banner-item'> <div className='window-s'></div> - Window Seat </div>
            <div className='banner-item'> <div className='middle-s'></div> - Middle Seat </div>
            <div className='banner-item'> <div className='asile-s'></div> - Asile Seat</div>

        </div>
    )
}

export default DataDisplay;