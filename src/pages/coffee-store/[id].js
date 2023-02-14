import {useRouter} from "next/router"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import cls from "classname"
import styles from "../../styles/coffee-store.module.css"
import {getcoffeestores} from "../../../lib/coffee-store.js"

export async function getStaticProps(staticProps){
    const coffeeStoresdata = await getcoffeestores('cafes',85.32648638053675,23.347789158106185,6);
    const params = staticProps.params;
    console.log(coffeeStoresdata)
    return {
        props :{
            coffeeStore : coffeeStoresdata.find((coffeeStore) => {
                return coffeeStore.fsq_id.toString() == params.id;
        }),

    }
}}

export async function getStaticPaths(){
    const coffeeStoresdata = await getcoffeestores('cafes','23.347789158106185,85.32648638053675',6);
    const paths = coffeeStoresdata.map((coffeeStore)=>{
        return{
            params : {
                id :coffeeStore.fsq_id.toString(),
            }
        }
    })
    return {
        paths,
        fallback : true
    }
}
var counter = 0;
const Coffeestore = (props) => {
    const onClickHandler =( ) =>{
            counter +=1;
            return counter;
    }

    const router = useRouter();
    
    if(router.isFallback){
        console.log("Loading");
       return(<div> Loading..... </div>) 
       
    }
    const {name , imgUrl} = props.coffeeStore;
    const {formatted_address , cross_street} = props.coffeeStore.location;
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
            <Image src={imgUrl} width="600" height = "360" className={styles.imgWrapper} alt={name}></Image> 
        </div>
        <div className={cls("glass" ,styles.col2)}>
            <div className={styles.iconWrapper}>
                <Image src="/static/push_pin_FILL0_wght400_GRAD0_opsz48.svg" width={24} height={24}></Image>
                <p className={styles.text}>{formatted_address}</p>
            </div>
          {cross_street != "" && (<><div className={styles.iconWrapper}>
                <Image src="/static/location_on_FILL0_wght400_GRAD0_opsz48.svg" width={24} height={24}></Image>
                <p className={styles.text}>{cross_street}</p>
            </div></>)}  
            <div className={styles.iconWrapper}>
                <Image src="/static/star_FILL0_wght400_GRAD0_opsz48.svg" width={24} height={24}></Image>
                <p className={styles.text}>1</p>
            </div>

            <button className={styles.upvotebutton} onClick={onClickHandler}>Upvote!</button>

        </div>
        </div>
        </div>
    )
}

export default Coffeestore;