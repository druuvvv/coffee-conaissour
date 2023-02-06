import Head from 'next/head'
import Card from "../../components/card.js"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from "../../components/banner.js"
import {getcoffeestores} from "../../lib/coffee-store"

import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
const apikey = "fsq3xWaJbZnuZ5gJAYIldNBdKN9Bi5a83qeLUjdV4rxfHFA=";

export async function getStaticProps(context){
  
  const coffeeStores = await getcoffeestores();
  
  return {
    props: {
        coffeeStores : coffeeStores, 
    },
  };
}



export default function Home(props) {
  const [latlong , setlatlong] = useState(1);

  const [locationErrorMsg , setLocationErrorMsg] = useState(1);
  
  const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setlatlong(`${latitude},${longitude}`);
        console.log(`Set Location as ${latitude},${longitude}`);
        setLocationErrorMsg(1);
    }

  const error = () => {
        setLocationErrorMsg("Unable to retrieve your location");
    }
    
  const handleTrackLocation = () => {
        
        if(!navigator.geolocation){
            setLocationErrorMsg("Geolocation is not supported by your browser");
        }
        else{
            navigator.geolocation.getCurrentPosition(success , error);
        }
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
        
        <Banner className={styles.banner} buttonText="View nearby Shops" HandleOnClick={handleTrackLocation} />
        
        {props.coffeeStores.length >0 && (<div> <h2 className={styles.heading2}>Ranchi Stores</h2>
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

        
        
      
      </main>
    </>
  )
}
