import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Char from './components/Character';


const App = () => {
  const [charList, setCharList] = useState([]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharList(res.data)
        console.log(res);
      }).catch(err => {
        console.error(err);
      })
    
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {charList.map(item => {
        return <Char char={charList} />
      })}
       {/* <Char char={charList} /> */}
    </div>
   
  );
}

export default App;
