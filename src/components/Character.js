// Write your Character component here
import React, {useState, useEffect} from 'react';
// import axios from 'axios';


export default function Char(props) {
    const [char, setChar] = useState([]);
    // const {chars} = props;

    return(
        <div className= 'char-container'>
            <div className= 'char-info'>
                {/* <h3>{char[0].name}</h3> 
                <p>{char[0].gender}</p> 
                <p>{char[0].height}</p>
                <p>{char[0].mass}</p>
                <p>{char[0].birth_year}</p>
                <p>{char[0].eye_color}</p>
                <p>{char[0].hair_color}</p>
                <p>{char[0].skin_color}</p> */}
            </div>

        </div>
    )
}

