import { useState } from 'react';

const useTrackLocation = () => {

    const [latlong , setlatlong] = useState(1);
    const [locationErrorMsg , setLocationErrorMsg] = useState(1);

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setlatlong(`${latitude},${longitude}`);
        setLocationErrorMsg(1);
        
    }

    const error = () => {
        setLocationErrorMsg("Unable to retrieve your location");
    }
    
    const handleTrackLocation = () => {
        
        if(!navigator.geolocation){
            setLocationErrorMsg("Geolocation is not supported by your browser");
        }
        else{
            navigator.gelocation.getCurrentPostion(success , error);
        }
    }


return{
    latlong,
    handleTrackLocation,
    locationErrorMsg
}

}

export default useTrackLocation();