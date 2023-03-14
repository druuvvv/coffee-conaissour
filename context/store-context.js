import {createContext} from 'react'
import {useState} from 'react';

export const StoreContext = createContext();
export const LLContext = createContext();

export const LLProvider = ({children}) =>{
  const [latlong , setlatlong] = useState();

  return(<LLContext.Provider value={{latlong , setlatlong}}>
    {children}
  </LLContext.Provider>)
}
export const StoreProvider = ({children}) => {
  const [ FetchedcoffeeStores, setCoffeeStores ] = useState({});

  return (
    <StoreContext.Provider value={{ FetchedcoffeeStores , setCoffeeStores}}>
      {children}
    </StoreContext.Provider>
  );
}


