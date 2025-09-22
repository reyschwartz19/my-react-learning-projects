import { useState, useRef, useEffect } from "react";

const MyComponent = () => {
    
   const inputRef1 = useRef(null);
   const inputRef2 = useRef(null);
   const inputRef3 = useRef(null);
   
   const[inputValue, setInputValue] = useState(true);

   useEffect(() => {
    console.log("Component Rendered");
    
   },[]);

   const handleClick1 = () => {
      inputRef1.current.focus();
      inputRef1.current.style.backgroundColor = "yellow";
   }
    const handleClick2 = () => {
      inputRef2.current.focus();
      inputRef2.current.style.backgroundColor = "yellow";
   }
    const handleClick3 = () => {
      inputRef3.current.focus();
      setInputValue(!inputValue);
      inputValue ? (inputRef3.current.style.backgroundColor = "white") : (inputRef3.current.style.backgroundColor = "lightgreen");
        
   }

    return (
        <div>
            <button onClick={handleClick1 }>Click Me1</button>
            <input ref={inputRef1}/>
             <button onClick={handleClick2 }>Click Me2</button>
            <input ref={inputRef2}/>
             <button onClick={handleClick3 }>Click Me3</button>
            <input ref={inputRef3}/>
            
        </div>
    );
}

export default MyComponent