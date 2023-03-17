import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import cls from "classname";
import { getcoffeestores } from "../../../lib/coffee-store.js";
import { StoreContext } from "../../../context/store-context.js";
import useSWR from 'swr';
import styles from "../../styles/coffee-store.module.css";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  const coffeeStores = await getcoffeestores('cafes','23.253402844446168,77.4019759419206',6);
  const findCoffeeStoreById = coffeeStores.find((coffeeStore) => {
    return coffeeStore.fsq_id.toString() === params.id; 
  });
  return {
    props: {
      coffeeStore: findCoffeeStoreById ? findCoffeeStoreById : {},
    },
  };
}

export async function getStaticPaths() {
  const coffeeStores = await getcoffeestores('cafes','23.253402844446168,77.4019759419206',6);
  const paths = coffeeStores.map((coffeeStore) => {
    return {
      params: { id: coffeeStore.fsq_id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();

  const id = router.query.id;

  const [coffeeStore, setCoffeeStore] = useState(props.coffeeStore || {});

  const { FetchedcoffeeStores,setCoffeeStores } = useContext(StoreContext);

  const handleCreateCoffeeStore = async (coffeeStore) => {
    try{
      const {name,imgUrl , fsq_id} = await coffeeStore;
      const address = await coffeeStore.location.formatted_address;
      const neighbourhood = await coffeeStore.location.cross_street;
      const response = await fetch("/api/createCoffeeStore",{
        method : "POST",
        headers : {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          fsq_id : `${fsq_id}`,
          name,
          address : address || "",
          neighbourhood : neighbourhood || "",
          imgUrl : imgUrl || "",
          voting : 0
        })
        }
      ) 

      const dbcoffeeStore = await response.json();
    }catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
      if (FetchedcoffeeStores.length > 0) {
        const findCoffeeStoreFromContext = FetchedcoffeeStores.find((coffeeStore) => {
          return coffeeStore.fsq_id.toString() === id;
        });
        if (findCoffeeStoreFromContext) {
          setCoffeeStore(findCoffeeStoreFromContext);
          handleCreateCoffeeStore(findCoffeeStoreFromContext);
          }
      }
      else{
        handleCreateCoffeeStore(props.coffeeStore);
      }

  }, [id, props, props.coffeeStore]);
  const [votingCount, setVotingCount] = useState(0);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error} = useSWR(`/api/getCoffeeStoreById?fsq_id=${id}` , fetcher);
  
  
  const onClickHandler = async () => {
    let newcount = votingCount +1;
    try{
      const response = await fetch("/api/upvoteCoffeeStoreById",{
        method : "PUT",
        headers : {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          fsq_id : `${id}`,
        })
      }
      )
      const dbcoffeeStore = await response.json();
      if(dbcoffeeStore && dbcoffeeStore.length > 0){  
        setVotingCount(newcount);
      }
  }catch(err){
    console.error("Error update coffee Store" , err)
  }

  };

  useEffect(() =>{
    if(data && data.length > 0){
      setVotingCount(data[0].voting);
      const location = { 'formatted_address' : data[0].address ,
                          'cross_street' : data[0].neighbourhood                          
                        }
      data[0]['location'] = location;
      setCoffeeStore(data[0]);
    }
  },[data])

  if (router.isFallback) {
    return <div>Loading....</div>;
  }

  const {name , imgUrl} = coffeeStore || "";
  const {formatted_address , cross_street} = coffeeStore.location || "";

  return (<div className={styles.layout}>
    <Head>
        <title>{name}</title>    
    </Head>
    <div className={styles.container}>
    <div className={styles.col1}>
    <div className={styles.linkwrapper}>
    <Link href="/"><br />
         <h2 className={styles.back}>← Back to Home</h2>
    </Link>
    </div>
        <div className={styles.nameWrapper}>
        <h1 className={styles.name}>{name} </h1> 
        </div>
        <Image src={imgUrl || "/static/push_pin_FILL0_wght400_GRAD0_opsz48.svg"}  width="600" height = "360" className={styles.imgWrapper} alt={name}></Image> 
    </div>
    <div className={cls("glass" ,styles.col2)}>
        <div className={styles.iconWrapper}>
            <Image src="/static/push_pin_FILL0_wght400_GRAD0_opsz48.svg" width={24} height={24} alt="address pin image"></Image>
            <p className={styles.text}>{formatted_address}</p>
        </div>
      {cross_street != "" && (<><div className={styles.iconWrapper}>
            <Image src="/static/location_on_FILL0_wght400_GRAD0_opsz48.svg" width={24} height={24} alt="address pin image"></Image>
            <p className={styles.text}>{cross_street}</p>
        </div></>)}  
        <div className={styles.iconWrapper}>
            <Image src="/static/star_FILL0_wght400_GRAD0_opsz48.svg" width={24} height={24} alt="star image"></Image>
            <p className={styles.text}>{votingCount}</p>
        </div>

        <button className={styles.upvotebutton} onClick={onClickHandler}>Upvote!</button>

    </div>
    </div>
    </div>
)
};

export default CoffeeStore;