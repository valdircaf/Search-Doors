/* eslint-disable */
import { createContext, useContext, useState } from 'react';
import axios from 'axios';

export const NewContext = createContext();




export const NewContextProvider = ({children})=>{
  const [closePage, setClosePage] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const [requisition, setRequisition] = useState([]);
  const [load, setLoad] = useState(false);
  const submit = async ()=>{
    if(valueInput.toUpperCase() === "PORTA" || valueInput.toUpperCase() === "PORTAS"){
      const data = await axios.get('https://my-json-server.typicode.com/valdircaf/forProject/doors');
      setRequisition(data.data);
    }
    else if(valueInput.toUpperCase() === "FECHADURA" || valueInput.toUpperCase() === "FECHADURAS"){
      const data = await axios.get('https://my-json-server.typicode.com/valdircaf/forProject/door_locks');
      setRequisition(data.data);
    }
  }


  return(
    <NewContext.Provider value={{setValueInput, submit, requisition, setClosePage, closePage, load, setLoad}}>
      {children}
    </NewContext.Provider>
  )
}
