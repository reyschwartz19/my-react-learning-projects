import { useState, useEffect} from "react";


const  MyComponent = () => {
   
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
   

     const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    
    useEffect(() => {
     
    window.addEventListener('resize', handleResize);
    console.log('Component Rendered');

    return () => {
        window.removeEventListener('resize', handleResize);
        console.log('Component Unmounted');
    }
        },[]);

    useEffect(() => {
        document.title = `Width: ${width}, Height: ${height}`;
    },[width,height]);
   
    return(
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    );
}

export default MyComponent;