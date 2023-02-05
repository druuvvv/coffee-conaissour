import Link from "next/link";
import Image from "next/image";
import styles from "./card.module.css";
import cls from "classname";
const card = (props) =>{
    return (
           <Link legacyBehavior href = {props.url}>
           <a className={styles.cardLink}>
            <div className={cls("glass" , styles.container)}>
            <p className={styles.headwrapper}><b>{props.name}</b></p>
            <Image className={styles.imgwrapper} src={props.imageurl} width="260" height="160" />
            </div>
            </a>
            </Link>
    )
}

export default card;