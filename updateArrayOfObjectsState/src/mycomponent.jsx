import React, {useEffect, useState} from "react"
import { supabase } from "./supabse-clients";
import { useNavigate } from "react-router-dom";

const Mycomponent = () => {


    const [cars, setCars] = useState([]);
    const [year, setYear] = useState('');
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    const[session,setSession] = useState(null)
    const navigate = useNavigate();
    
    const fetchSession = async () =>{
       const currentSession = await supabase.auth.getSession()
       console.log(currentSession);
       setSession(currentSession.data.session);
    }

    useEffect(()=>{
      fetchSession()
    },[])
        
     
 const handleAddCar = async () => {
      const newCar = {carYear : year, make : carMake, model : carModel };
      

      const {error,data} =   await supabase.from('cars').insert(newCar).select().single();

      if (error){
        console.error('Error adding car', error.message);
        return;
      }else{
         setCars(prevCars => [...prevCars, data]);
      }
      
        setYear('');
    setCarMake("");
    setCarModel("");
    };

    const fetchCars = async () =>{
        const {error,data} = await supabase.from('cars')
                                      .select('*')
                                      .order('created_at',{ascending: true});
        if(error){
            console.error('Error reading car', error.message)
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

     const logOut = async () =>{
        await supabase.auth.signOut()
        navigate('/');
     }


    return(
       
       <div>
      { session ? ( <>
        <button onClick={logOut}>Logout</button>
         <h2>List of car objects</h2>
         <ul>
          {cars.map((car) => <div key={car.id}>
              <li>{car.carYear} {car.make} {car.model}</li>
              <button onClick={()=>deleteCar(car.id)}>Delete</button>
          </div> )}
         </ul>
         <input type="number" value={year} onChange={handleYearChange} /><br/>
         <input type="text" value={carMake} onChange={handleMakeChange} placeholder="enter car make" /><br/>
         <input type="text" value={carModel} onChange={handleModelChange} placeholder="enter car model" /><br/>
         <button onClick={handleAddCar}>Add car</button>
         </>):(
         <div>
            Log in to continue
            <button onClick={()=>navigate('/')}>Home</button>
         </div>)
         }
        </div>
    );


}

export default Mycomponent