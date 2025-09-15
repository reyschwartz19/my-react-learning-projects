import React, {useState} from "react";

const MyComponent = () =>{

    const[food, setFood] = useState(["apple","orange", "banana"])
    
    const handleAddFood = () =>  {
        const newFood  = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = "";

        setFood(f => [...f, newFood]);
    };
    const handleRemoveFood = (index) => {

        setFood(food.filter((_, i) => i !== index))
          
    };
    
    return(
        <div>
         <h2>List of food</h2>
         <uL>
            {food.map((food,index) => <li key={index} onClick={() =>handleRemoveFood(index)}>{food}</li>)}
         </uL>

         <input type="text" id= "foodInput" placeholder="enter food name" />
         <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent