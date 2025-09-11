import Header from './header/header.jsx'
import StudentCard from './StudentCard/StudentCard.jsx';
import React, {useState} from 'react';

  const App = ()=>{

   const [toggleFilter, setToggleFilter] = useState("All");   
      
      const filter = () =>{
         setToggleFilter((prev) => (prev =="All" ? "Enrolled" : "All"));
      }
  

   return (
     <>
    <Header filter={filter} toggleFilter={toggleFilter}/>

    {toggleFilter === "All" ? <StudentCard age={10} name = {1} isEnrolled/> : null}
    <StudentCard age={12} name ="anne" isEnrolled = {false}/>
    </>
   );
  }

export default App
