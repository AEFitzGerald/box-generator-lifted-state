import React, { useState } from 'react';


const Form = ( props ) => {
    const[boxInputs, setBoxInputs] = useState({
        color:"", 
        width:"",
        height:""
    })

    //lifted state array of box objects to parent App.js
    // const[allBoxes, setAllBoxes] = useState([])

    //onChange Handler
    const changeBoxStyle = e => {
        console.log("See the changes with inputs -->", e.target.name,e.target.value)
        setBoxInputs({
            ...boxInputs,
            [e.target.name]:e.target.value
        })
    }
    //onSubmit Handler
    const newBoxAdd = e => {
        e.preventDefault();
        console.log("The box inputs were submitted");
        console.log(boxInputs);

        //this array is lifted to state and as new boxes are added other components can access if they need to 
        props.setCurrentBoxes([...props.currentBoxes, boxInputs])

        //the input fields are cleared after form submission
        setBoxInputs({
            color:"", 
            width:"",
            height:""
        })

        // e.target.reset();
    }

    return (
        <div className = "container-sm mt-5">
            <h4>Add a box</h4>
            <form onSubmit = {(e) => newBoxAdd(e) } className ="row g-3">
                <div className="col-auto"> 
                    <label htmlFor="color">Color: </label>
                    <input onChange = { (e) => changeBoxStyle(e) } type="text" value = { boxInputs.color } name = "color" className ="form-control" />
                </div>
                
                <div className="col-auto"> 
                    <label htmlFor="width">Width: </label>
                    <input onChange = { (e) => changeBoxStyle(e) } type="int" value = { boxInputs.width } name = "width" className ="form-control" />
                </div>
                
                <div className="col-auto"> 
                    <label htmlFor="height">Height: </label>
                    <input onChange = { (e) => changeBoxStyle(e) } type="int" value = { boxInputs.height } name = "height" className ="form-control" />
                </div>

                <div className="form-group">
                    <input type="submit" value = "Add Box" className= "btn btn-primary form-control"/>
                </div>
            </form> 

        </div>
    );
};

export default Form;