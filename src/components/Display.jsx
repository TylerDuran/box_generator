import React from 'react'





const Display = (props) => {

    return (
        <div>
        {
            props.boxes.map((box, index) => {
                return <div key={index} style={{backgroundColor: box, height: 150, width: 150, margin: 20}}>
                    {box}
                </div>
            })
        }
        </div>
    )
}

export default Display