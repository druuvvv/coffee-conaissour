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
  const [FetchedCoffeeStores, setCoffeeStores ] = useState({});

  return (
    <StoreContext.Provider value={{FetchedCoffeeStores , setCoffeeStores}}>
      {children}
    </StoreContext.Provider>
  );
}


