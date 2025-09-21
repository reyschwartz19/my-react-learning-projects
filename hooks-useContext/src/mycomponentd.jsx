import { useContext } from "react";
import { NameContext } from "./mycomponenta.jsx";

const ComponentD = () => {
    const {name,setName} = useContext(NameContext);

    return(
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Hello ${name}`}</h2>
        </div>
    );
}

export default ComponentD