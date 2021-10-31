
const calculateSeatsNum = (Arr, pessengersSize) => {

    let seat = {
        WS : 0,
        MS : 0,
        AS : 0,
        max : 0,
        pessengers : pessengersSize
    }

    for(let i=0; i<Arr.length; i++) {

        seat.max = (seat.max>Arr[i][1])?seat.max:Arr[i][1];
        if( !Array.isArray(Arr[i]) ){
            return false
        }

        if(i==0 || i==Arr.length-1) {
            if(Arr[i][0]>=2) {
                seat.AS = seat.AS + Arr[i][1];
                seat.WS = seat.WS + Arr[i][1];
                if(Arr[i][0]>2){
                    seat.MS = seat.MS + ((Arr[i][0]-2) * Arr[i][1]);
                }
            }else{
                seat.WS = seat.WS + Arr[i][1];
            }
        }else{
            if(Arr[i][0]>2) {
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