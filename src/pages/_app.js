import '@/styles/globals.css'
import {createContext} from 'react'
import {useState} from 'react';


const StoreContext = createContext();

const StoreProvider = ({children}) => {
  const [fetchedStores, setfetchedStores] = useState({'two':2});

  return (
    <StoreContext.Provider value={{fetchedStores , setfetchedStores}}>
      {children}
    </StoreContext.Provider>
  );
}


export default function App({ Component, pageProps }) {
  return <StoreProvider><Component {...pageProps} /></StoreProvider>
}
