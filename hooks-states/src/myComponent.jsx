  import React, {useState} from "react";


const MyComponent = () =>{
          
     const [name, setName] = useState("Guest");
     const [age, setAge] = useState(0);
     const [isEmployed, setIsEmployed] = useState(false);

     const updateName = () => {
        setName("spongbob")
     }

     const addAge = () =>{
        setAge(age + 2);
     }

     const toggleEmployed =() =>{
        setIsEmployed(!isEmployed);
     }

     return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>age: {age}</p>
            <button onClick={addAge}>add age</button>

            <p>Is Employed: {isEmployed? "yes":"no"}</p>
            <button onClick={toggleEmployed}>toggle status</button>
        </div>
     );

}
export default MyComponent