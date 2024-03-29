import Head from 'next/head'
import Card from "../../components/card.js"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from "../../components/banner.js"
import { getcoffeestores } from "../../lib/coffee-store"
import { useState} from 'react';
import { useEffect} from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/store-context.js'
import { LLContext } from '../../context/store-context.js'
const inter = Inter({ subsets: ['latin'] })


export async function getStaticProps(context){
  
  const coffeeStores = await getcoffeestores('cafes' , '23.253402844446168,77.4019759419206' , 6);
  
  return {
    props: {
        coffeeStores : coffeeStores, 
    },
  };
}
const getLatLong = () => {
  const {latlong , setlatlong } = useContext(LLContext)
  const [locationErrorMsg , setLocationErrorMsg] = useState("");
  const [isLocating , setIsLocating] = useState(false);
  const [hasFetched , setHasFetched] = useState(false);

  const success = async (position) => {
      const latitude = await position.coords.latitude;
      const longitude =  await position.coords.longitude;
    setIsLocating(false)
    setHasFetched(true)
     setlatlong(`${latitude},${longitude}`);
     setLocationErrorMsg("");
  }

  const error = () => {
    setIsLocating(false)
    setlatlong("")
      setLocationErrorMsg("Unable to retrieve your location");
  }
  
  const handleTrackLocation = () => {
      setIsLocating(true)
      if(!navigator.geolocation){
        setlatlong("")
          setLocationErrorMsg("Geolocation is not supported by your browser");
      }
      else{
          navigator.geolocation.getCurrentPosition(success , error);
      }
  }

  return {
      handleTrackLocation,
      latlong,
      locationErrorMsg,
      isLocating,
      hasFetched
  }

}

export default function Home(props) {
const { FetchedcoffeeStores,setCoffeeStores } = useContext(StoreContext);
const fetchStores = async (latlong) => {    
const response = await fetch(`/api/getCoffeeStoreByLocation?latlong=${latlong}&limit=30`)
  const fetchedStores = await response.json()
  setCoffeeStores(fetchedStores)
}
const {handleTrackLocation , latlong , locationErrorMsg, isLocating ,hasFetched} = getLatLong();

useEffect(() => {
  if(latlong){
    fetchStores(latlong);
  }
},[latlong])

  const buttonClickHandler = async () =>{
     handleTrackLocation();
  }
  if(locationErrorMsg != ''){
    alert(`Something went wrong : ${locationErrorMsg}`);
  }
  return (
    
    <>
      <Head>
        <title>Coffee shops</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className={styles.main}>
        
        <Banner 
        className={styles.banner} 
        buttonText= {isLocating ? "Locating..." :"View Nearby Stores"}
        HandleOnClick={buttonClickHandler} />

        { FetchedcoffeeStores.length == null && props.coffeeStores.length >0 && (<div> <h2 className={styles.heading2}>Bhopal Stores</h2>
          <div className={styles.cardLayout}>
            {props.coffeeStores.map(coffeeStore =>{ 
              return(<Card 
                className={styles.card}
                key = {coffeeStore.fsq_id}
                name= {coffeeStore.name } 
                imageurl= {coffeeStore.imgUrl || "/static/mesh-gradient.jpeg"} 
                url={`/coffee-store/${coffeeStore.fsq_id}`} />);
              })}  
           </div>
           </div>)}
           
          { FetchedcoffeeStores.length>0 && (<div> <h2 className={styles.heading2}>Stores Nearby You</h2>
          <div className={styles.cardLayout}>
            { FetchedcoffeeStores.map(fetchedCoffeeStore =>{ 
              return(<Card 
                className={styles.card}
                key = {fetchedCoffeeStore.fsq_id}
                name= {fetchedCoffeeStore.name } 
                imageurl= {fetchedCoffeeStore.imgUrl || "/static/mesh-gradient.jpeg"} 
                url={`/coffee-store/${fetchedCoffeeStore.fsq_id}`} />);
              })}  
           </div>
           </div>)
           }

      </main>
    </>
  )
}
