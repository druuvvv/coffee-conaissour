import '@/styles/globals.css'
import {createContext} from 'react'
import {useState} from 'react';


export const StoreContext = createContext();

const StoreProvider = ({children}) => {
  const [FetchedCoffeeStores, setCoffeeStores ] = useState({});

  return (
    <StoreContext.Provider value={{FetchedCoffeeStores , setCoffeeStores}}>
      {children}
    </StoreContext.Provider>
  );
}


export default function App({ Component, pageProps }) {
  return <StoreProvider><Component {...pageProps} /></StoreProvider>
}
