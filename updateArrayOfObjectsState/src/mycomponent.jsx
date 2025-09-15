import React, {useState} from "react"

const Mycomponent = () => {


    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    
    const handleAddCar = () => {
      const newCar = {carYear : year, make : carMake, model : carModel };
      setCars(c => [...c, newCar]);
      
        setYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
    };
    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_,i) => i !== index));
    };
    const handleYearChange = (e) => {
        setYear(e.target.value);
    };
    const handleMakeChange = (e) => {
        setCarMake(e.target.value);
    };
    const handleModelChange = (e) => {
        setCarModel(e.target.value);
       
    };


    return(
        <div>
         <h2>List of car objects</h2>
         <uL>
          {cars.map((car,index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.carYear} {car.make} {car.model}</li>)}
         </uL>
         <input type="number" value={year} onChange={handleYearChange} /><br/>
         <input type="text" value={carMake} onChange={handleMakeChange} placeholder="enter car make" /><br/>
         <input type="text" value={carModel} onChange={handleModelChange} placeholder="enter car model" /><br/>
         <button onClick={handleAddCar}>Add car</button>
        </div>
    );

}

export default Mycomponent