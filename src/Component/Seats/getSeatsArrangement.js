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
        for(let i=0; i<seat.max; i++) {

            const row = [];
            for(let j=0; j<arr.length; j++) {

                let window, asile, middle, all=[] ;
                if(arr[j][1]>i) {

                    if(j==0 || j==arr.length-1) {
                        if(arr[j][0]>2) {
                           window =  <div className='window'>
                                        {Ws.max?'-':checkPessengers(seat.pessengers,Ws)?'-':++(Ws.count)}
                                    </div>
                           asile = <div className='asile' >
                               
                                {As.max?'-':checkPessengers(seat.pessengers,As)?'-':++(As.count)}
                               </div>
                           middle = getMiddleSeats(arr[j][0]-2, Ms, seat)
                            
                        }else if(arr[j][0]==2) {
                            window =  <div className='window'>
                                {Ws.max?'-':checkPessengers(seat.pessengers,Ws)?'-':++(Ws.count)}
                                </div>
                            asile = <div className='asile ' >
                                {As.max?'-':checkPessengers(seat.pessengers,As)?'-':++(As.count)}
                                </div>
                        }else {
                            window =  <div className='window'>
                                {Ws.max?'-':checkPessengers(seat.pessengers,Ws)?'-':++(Ws.count)}
                                </div>
                        }
                        all.push((j==0)?
                                <><>{window}</><>{middle}</><>{asile}</></>:
                                <><>{asile}</><>{middle}</><>{window}</></>)
                        
                    } else {
                        if(arr[j][0]>2) {
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
                                all.push(<div className='asile' >
                                    {As.max?'-':checkPessengers(seat.pessengers,As)?'-':++(As.count)}
                                    </div>) 
                                all.push(<div className='asile' >
                                    {As.max?'-':checkPessengers(seat.pessengers,As)?'-':++(As.count)}
                                    </div>) 
                            }else{
                                all.push(<div className='asile' >
                                    {As.max?'-':checkPessengers(seat.pessengers,As)?'-':++(As.count)}
                                    </div>) 
                            }
                        }
                    }
    
                }else {
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