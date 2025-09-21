import ComponentB from "./mycomponentb";
import React,{useState,createContext} from "react";

export const NameContext = createContext();

const ComponentA = () => {

   const [name,setName] = useState("ITComplex");
   
    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${name}`}</h2>
            <NameContext.Provider value={{name,setName}}>
            <ComponentB/>
            </NameContext.Provider>
        </div>
    );
}

export default ComponentA