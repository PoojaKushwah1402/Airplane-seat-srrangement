
// this file will give how much passengers will accuire window seat, middle seat and asile seat and will also 
// calculate the maximum rows among all the columns, which will help further while displaying the seats

const calculateSeatsNum = (Arr, pessengersSize) => {

    let seat = {
        WS : 0, //count of window seat
        MS : 0, //count of middle seat
        AS : 0, // count of asile seat
        max : 0, //max row among all the columns
        pessengers : pessengersSize //count of passengers
    }

    for(let i=0; i<Arr.length; i++) {

        seat.max = (seat.max>Arr[i][1])?seat.max:Arr[i][1]; //setting max row
        let ifNegative = ( Arr[i][0]<0 || Arr[i][1]<0 )

        //if the inside elemnets are not array or given input is less than 0 then return false
        if( !Array.isArray(Arr[i]) || ifNegative){ 
            return false
        }

        if(i==0 || i==Arr.length-1) { 
            //checking if it is either first row or last row as window seat will be only there

            if(Arr[i][0]>=2) { 

                seat.AS = seat.AS + Arr[i][1];
                seat.WS = seat.WS + Arr[i][1];

                if(Arr[i][0]>2){ //if columns are greater then 2 then only middle seat will come

                    seat.MS = seat.MS + ((Arr[i][0]-2) * Arr[i][1]);
                    //middle seat will be 
                    //total columns - 2(as one would be asile and one would be window) * number of rows in that matrix
                }
            }else{
                //if columns are less then one i.e 1, then it will be only window seat
                seat.WS = seat.WS + Arr[i][1];
            }

        }else{//if it is not first and last row

            if(Arr[i][0]>2) { // middle seat will only appear it it coulms are grater then 2

                seat.AS = seat.AS + Arr[i][1]*2
                seat.MS = seat.MS +  ((Arr[i][0]-2) * Arr[i][1]);

            }else {

                seat.AS = seat.AS + ( Arr[i][1]*Arr[i][0] )
            }
        }

    }

    return seat;
}

export default calculateSeatsNum;