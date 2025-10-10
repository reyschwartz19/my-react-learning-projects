import React, {useEffect, useState} from "react"
import { supabase } from "./supabse-clients";

const Mycomponent = () => {


    const [cars, setCars] = useState([]);
    const [year, setYear] = useState('');
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    
    const handleAddCar = async () => {
      const newCar = {carYear : year, make : carMake, model : carModel };
      

      const {error,data} =   await supabase.from('cars').insert(newCar).single();

      if (error){
        console.error('Erro adding car', error.message);
        return;
      }else{
         setCars(prevCars => [...prevCars, data]);
      }
      
        setYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
    };

    const fetchCars = async () =>{
        const {error,data} = await supabase.from('cars')
                                      .select('*')
                                      .order('created_at',{ascending: true});
        if(error){
            console.error('Erro reading car', error.message)
            return;
        }

        setCars(data);
    };

    const deleteCar = async (id) =>{
        const {error} = await supabase.from('cars').delete().eq('id', id);
                                    
        if(error){
            console.error('Error deleting car', error.message)
            return;
        }

          setCars(prevCars => prevCars.filter(car => car.id !== id));
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

    useEffect(()=>{
        fetchCars()
    },[])

     

    return(
        <div>
         <h2>List of car objects</h2>
         <uL>
          {cars.map((car,index) => <div key={car.id}>
              <li>{car.carYear} {car.make} {car.model}</li>
              <button onClick={()=>deleteCar(car.id)}>Delete</button>
          </div> )}
         </uL>
         <input type="number" value={year} onChange={handleYearChange} /><br/>
         <input type="text" value={carMake} onChange={handleMakeChange} placeholder="enter car make" /><br/>
         <input type="text" value={carModel} onChange={handleModelChange} placeholder="enter car model" /><br/>
         <button onClick={handleAddCar}>Add car</button>
        </div>
    );

}

export default Mycomponent