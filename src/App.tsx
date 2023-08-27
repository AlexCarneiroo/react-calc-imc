import styles from './App.module.css';
import { useState} from 'react';
import logoPower from './assetss/powered.png';
import './componetes/GridItem/GridIndex';
import logoVoltar from './assetss/leftarrow.png'


import { levels , calculateImc, Level } from './IMC';
import { GridItem } from './componetes/GridItem/GridIndex';

const App = ()=>{

  const [heightFild,setheight] = useState<number>(0);
  const [weightFild,setweight] = useState<number>(0);
  const [toShow,setToshow] = useState<Level | null>(null);

  const handleCalculeBtn = () =>{
    if(heightFild && weightFild){
      setToshow(calculateImc(heightFild,weightFild));
    }else{
      alert('Digite todos os Campos')
      
    }
  }

  const acaoVoltar = () =>{
    setToshow(null)
    setheight(0)
    setweight(0)
  }


  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logoPower} alt="" width='150px'/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h4>Calcule o seu IMC</h4>
          <p>IMC é a sigla para indice de massa corporea, parametro adotado pela Organização Mundial de Saude para calcular o peso ideal de cada pessoa.</p>

          <input type="number"
          placeholder='Digite a sua Altura Ex: 1.50 (Em metro)'
          value={heightFild > 0 ? heightFild : ''}
          onChange={e => setheight(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />
          <input type="number"
          placeholder='Digite o seu peso Ex: 50.5 (Em Kg)'
          value={weightFild > 0 ? weightFild : ''}
          onChange={e => setweight(parseFloat(e.target.value))}
          disabled={toShow ? true : false}

          />

          <button onClick={handleCalculeBtn} disabled={toShow ? true : false}>Calcular</button>
        </div>

        <div className={styles.rightSide}>
        {!toShow &&
          <div className={styles.grid}>
            {levels.map((item , index)=>(
              <GridItem key={index} item={item}></GridItem>
            ))}
          </div>
        }
        {toShow &&
          <div className={styles.big}>
            <div className={styles.BtnVoltar}>
              <img src={logoVoltar} alt="" width={30} onClick={acaoVoltar} />
            </div>

            <GridItem item={toShow}></GridItem>
          </div>
        
        }
        </div>
      </div>
    </div>
  )
}


export default App;