
import React, { useState } from 'react'


const ColorForm = (props) => {
    const [color, setColor] = useState("");
    // const [size, setSize] = useState("")


    const formHandler = (e) => {
        e.preventDefault();
        props.addBox(color);
        setColor("");
        console.log("New Box. Nice!") 
    }

    
    return (
        <div>
            <form onSubmit={ formHandler }>
                <label>Color: </label>
                <input onChange={(e) => setColor(e.target.value)} value={color} />
                {/* <label>Size: </label>
                <input onChange={(e) => setSize(e.target.value)} value={size}  /> */}
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default ColorForm