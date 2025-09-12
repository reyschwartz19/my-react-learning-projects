import React, {useState} from "react";

const ColorPicker = () =>{

  const [color, setColor] =  useState("#ffffff");
  const handleColorChange = (e) => setColor(e.target.value);

  return(
    <div className="color-picker-container">
       <h1>Color Picker</h1>
       <div className="color-display" style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
       </div>
        <label>Select a color</label>
        <input type="color" value={color} onChange={handleColorChange}></input>
       
    </div>
  );
}

export default ColorPicker