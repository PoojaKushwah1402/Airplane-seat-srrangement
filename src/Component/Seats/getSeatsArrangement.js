   const checkPessengers = (Tpassengers, cs) => {
        if(!cs.max && (cs.count >= Tpassengers)) {
            cs.max = true;
        }
        return cs.max
    }

    const getMiddleSeats = (number, Ms, seat) => {
        const middleSeats = []
        for(let i=0; i<number; i++) {
            middleSeats.push(
                <div className='middle' >
                    {Ms.max?'-':checkPessengers(seat.pessengers,Ms)?'-':++(Ms.count)}
                </div>
                )
        }
        return middleSeats;
    }

    const getTheSeatsArrangment = (As, Ws, Ms, seat, arr) => {

        const main = []

        for(let i=0; i<seat.max; i++) { // looping with max column

            const row = [];
            for(let j=0; j<arr.length; j++) { //inside loop will run for each row

                let window, asile, middle, all=[] ;

                //if current matris's column is less then the loop's count then their will be no seat
                if(arr[j][1]>i) { 

                    //only for first and last row their will be window seats
                    if(j==0 || j==arr.length-1) { 

                        if(arr[j][0]>2) {
                            //if coulmns are greater then 2 then all seat will come (window, middle, asile)
                           window =  <div className='window'>
                                        {Ws.max?'-':checkPessengers(seat.pessengers,Ws)?'-':++(Ws.count)}
                                    </div>
                           asile = <div className='asile' >
                               
                                {As.max?'-':checkPessengers(seat.pessengers,As)?'-':++(As.count)}
                               </div>
                           middle = getMiddleSeats(arr[j][0]-2, Ms, seat)
                            
                        }else if(arr[j][0]==2) {
                            //if their is only 2 column then only window and asile seat will come
                            window =  <div className='window'>
                                {Ws.max?'-':checkPessengers(seat.pessengers,Ws)?'-':++(Ws.count)}
                                </div>
                            asile = <div className='asile ' >
                                {As.max?'-':checkPessengers(seat.pessengers,As)?'-':++(As.count)}
                                </div>
                        }else {
                            //if only one seat then only window seat will be there
                            window =  <div className='window'>
                                {Ws.max?'-':checkPessengers(seat.pessengers,Ws)?'-':++(Ws.count)}
                                </div>
                        }
                        all.push((j==0)?
                                <><>{window}</><>{middle}</><>{asile}</></>: //if first row
                                <><>{asile}</><>{middle}</><>{window}</></>) //if last row
                        
                    } else {
                        if(arr[j][0]>2) {
                            // middle seat will only appear it it coulms are grater then 2
                           middle = getMiddleSeats(arr[j][0]-2, Ms, seat)
                           all.push(<div className='asile' >
                               {As.max?'-':checkPessengers(seat.pessengers,As)?'-':++(As.count)}
                               </div>);
                           all.push(middle);
                           all.push(<div className='asile' >
                               {As.max?'-':checkPessengers(seat.pessengers,As)?'-':++(As.count)}
                           </div>);
                        }else {
                            if(arr[j][0]==2) {
                                // if the columns are two then only asile seat will come
                                all.push(<div className='asile' >
                                    {As.max?'-':checkPessengers(seat.pessengers,As)?'-':++(As.count)}
                                    </div>) 
                                all.push(<div className='asile' >
                                    {As.max?'-':checkPessengers(seat.pessengers,As)?'-':++(As.count)}
                                    </div>) 
                            }else{
                                // if the columns are 1 then only asile seat will come
                                all.push(<div className='asile' >
                                    {As.max?'-':checkPessengers(seat.pessengers,As)?'-':++(As.count)}
                                    </div>) 
                            }
                        }
                    }
    
                }else {
                    //if no seat is their then their will be blank sppace
                    let wid = 50*arr[j][0];
                    all = <div style={{width : `${wid}px`}} className='no-seat'></div>
                }
                const cellDiv = <div className='main-flexdiv' >{all}</div>
                row.push(cellDiv)

            }
    
            const rowDiv = <div className='row-div' >{row}</div>
            main.push(rowDiv);

        }

        return main
    }


    export default getTheSeatsArrangment;