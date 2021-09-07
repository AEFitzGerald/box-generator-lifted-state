import React from 'react';


const Box = (props) => {
    return (
        <div className = "d-flex flex-wrap justify-content-around">
            {
                props.currentBoxes.map((box, idx )=>{
                    return <div key = { idx } className ="mt-3" style = {{ backgroundColor: box.color, height: `${box.height}px`, width: `${box.width }px`}}>
                        </div>
                        
                    })
                }
            </div>
    );
};


export default Box;