import ComponentD from "./mycomponentd";
import { useContext } from "react";
import { NameContext } from "./mycomponenta.jsx";


const ComponentC = () => {
  const {name,setName} = useContext(NameContext);
    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello ${name}`}</h2>
            <ComponentD /> 
        </div>
    );
}

export default ComponentC