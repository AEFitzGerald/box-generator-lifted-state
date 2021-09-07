import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Box from './components/Box';

function App() {
    //state lifted => components can share data
    //list of all the boxes objects added by client inputs
    const[allBoxes, setAllBoxes] = useState([])

    return (
        <>  
            <Form currentBoxes = { allBoxes } setCurrentBoxes ={setAllBoxes}/>
            <Box currentBoxes = { allBoxes } setCurrentBoxes ={setAllBoxes} />
        </>
    );
}

export default App;
