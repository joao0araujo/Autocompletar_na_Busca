import styles from './search.module.css'
import lupa from '../../assets/Lupa.png'


export default function Search(){
    return(
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input placeholder="Digite aqui para exibir as sugestões"/>
                <button > <img src={lupa} alt="Lupa" /> </button>
            </div>
        </div>
    )
}