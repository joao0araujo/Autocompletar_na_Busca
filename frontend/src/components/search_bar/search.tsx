import styles from './search.module.css'
import lupa from '../../assets/Lupa.png'
import { useState, useEffect, type JSX} from 'react';
import { gql, useLazyQuery } from '@apollo/client';


interface Assunto {
  id: number;
  termo: string;
}

interface RetornoTermos {
  sugestaoDeTermo: Assunto[];
}

interface TermoSugerido {
  termo: string;
}


const buscandoSugestão = gql`
  query sugestaoDeTermo($termo: String!) { 
    sugestaoDeTermo(termo: $termo) {
      termo
    }
  }
`;


export default function Search(){

    const [termoBusca, setTermoBusca] = useState<string>('');
    const [sugestoes, setSugestoes] = useState<Assunto[]>([]);
    const [valorInput, setValorInput] = useState<string>('');


    const [fetchSuggestions, { data }] = useLazyQuery< RetornoTermos, TermoSugerido >(buscandoSugestão);

    useEffect(() => {

        if (data && data.sugestaoDeTermo) { setSugestoes(data.sugestaoDeTermo);
        } else { setSugestoes([]); }

    }, [data]);


    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            fetchSuggestions({ variables: { termo: termoBusca } });
            }, 0);
            return () => clearTimeout(debounceTimer);
        }, [termoBusca, fetchSuggestions]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTermoBusca(e.target.value);
        setValorInput(e.target.value);
    };

    const handleSuggestionClick = (termo: string) => {
        setSugestoes([]);
        setValorInput(termo);
    };


    const TextoEmNegrito = (text: string, negrito: string): JSX.Element |string => {

        if (!negrito.trim()) {
            return text;
        }

        const startIndex = text.toLowerCase().indexOf(negrito.toLowerCase());

        if (startIndex === -1) {
            return text;
        }

        const antes = text.slice(0, startIndex);
        
        const depois = text.slice(startIndex + negrito.length);
        
        const bold = text.slice(startIndex, startIndex + negrito.length);

        return (
            <span className={styles.font}> {antes}<strong className={styles.font}>{bold}</strong>{depois} </span>
        );
    };



    return(
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input placeholder="Digite aqui para exibir as sugestões" onChange={handleInputChange} value={valorInput}/>
                <button > <img src={lupa} alt="Lupa" /> </button>
            </div>

            <ul className={styles.listaSugestao}>
                {sugestoes.length > 0 &&
                    sugestoes.map((item, index) => (
                        <li className={styles.itemSugestao} key={index}>
                            
                            <button onClick={() => handleSuggestionClick(item.termo)}>

                                <img src={lupa} alt='Lupa'/>
                                {TextoEmNegrito(item.termo, termoBusca)}
                                
                            </button>

                        </li>  
                    ))
                }
            </ul>

        </div>
    )
}