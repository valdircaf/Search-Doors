/* eslint-disable */
import { createContext, useContext, useState } from 'react';
import axios from 'axios';

export const NewContext = createContext();




export const NewContextProvider = ({children})=>{
  const [getInputValue, setInputValue] = useState('');
  const [reqResponse, setResponse] = useState([]);
  const [counter, setCounter] = useState(1);
  const [isAvailable, setIsAvailable] = useState(true);
  const handleInputValue = (e)=> {
    setInputValue(e.target.value);
  }
  const submit = ()=>{
    requisition();
    setCounter(counter + 1);
  }

  const dragScreen = ()=>{
    if( isAvailable ){
      window.scrollTo({
        top: 900,
        behavior: 'smooth'
      })
    };
  }


  const requisition = ()=>{
    dragScreen();
    if(getInputValue.toUpperCase() === 'PORTA' || getInputValue.toUpperCase() === 'PORTAS'){
      const data = axios.get('https://my-json-server.typicode.com/valdircaf/forProject/doors').then(response => setResponse(response.data));
      setIsAvailable(true);
    } else if(getInputValue.toUpperCase() === 'FECHADURA' || getInputValue.toUpperCase() === 'FECHADURAS'){
      const data = axios.get('https://my-json-server.typicode.com/valdircaf/forProject/door_locks').then(response => setResponse(response.data));
      setIsAvailable(true);
    // } else if(getInputValue.toUpperCase() === 'TORNEIRA' || getInputValue.toUpperCase() === 'TORNEIRAS'){
    //   const data = axios.get('https://my-json-server.typicode.com/valdircaf/forProject/faucets').then(response => setResponse(response.data));
    //   setIsAvailable(true);
    } else{
      setIsAvailable(false);
    }

  }
  return(
    <NewContext.Provider value={{ handleInputValue, reqResponse, submit, counter, isAvailable, dragScreen}}>
      {children}
    </NewContext.Provider>
  )
}
