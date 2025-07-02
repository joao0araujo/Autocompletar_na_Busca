import styles from './bottom.module.css'
import caixas from '../../assets/CaixasColoridas.png'


export default function bottom(){

    return(

        <div className={styles.container}>

            <div className={styles.caixas}>
                <img src={caixas} />
            </div>

        </div>

    )

}