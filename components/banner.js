import styles from "./banner.module.css"

const banner =(prop)=> {
    return <div className={styles.banner}>
        <div><h1><b>
            <span className={styles.title1} >Coffee</span>
            <span className={styles.title2}> Shops</span></b>
        </h1></div>
        <p className={styles.subTitle} >
            <b>Discover local coffee shops</b>
        </p>
        <button  onClick={prop.HandleOnClick} className={styles.btn}>
            {prop.buttonText}
        </button>
        
    </div>
}

export default banner;