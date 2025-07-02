import styles from './header.module.css'
import Logo from '../../assets/Logo.png'
import SmallLogo from '../../assets/Logo2.png'
import Burger from '../../assets/Menu.png'


export default function Header(){

    return(

        <div className={styles.container}>
            <div className={styles.divLogo}>
                <img src={Logo} alt="Logo principal da Jusbrasil"></img>
            </div>

            <div className={styles.smallLogo}>
                <img src={SmallLogo} className='smallLogo' alt="Logo reduzido da Jusbrasil"></img>
            </div>

            <div className={styles.burger}>
                <img src={Burger} alt="Menu hamburger"></img>
            </div>
        </div>
    
    )
            
}
