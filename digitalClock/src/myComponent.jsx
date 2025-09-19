import { useState,useEffect } from "react";

const MyComponent = () => {

     const[time,setTime] = useState(new Date());
     useEffect(() => {
           const intervalId = setInterval(() => {
             setTime(new Date());
           }, 1000);

           return () => {
            clearInterval(intervalId);
           }
     },[]);

     const formatTime = () => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        return `${leadingZero(hours % 12 || 12)}:${leadingZero(minutes)}:${leadingZero(seconds)} ${meridiem}`;
     }

     function leadingZero(num) {
        return num < 10 ? `0${num}` : num;
     }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
          
        </div>
    );
} 

export default MyComponent;