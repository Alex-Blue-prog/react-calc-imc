import { useState } from "react";
import styles from "./App.module.css";

//helpers
import {levels, calculateImc, Level} from "./helpers/imc";

//components
import GridItem from "./components/GridItem/GridItem";

//images
import poweredImage from "./assets/powered.png";
import leftArrow from "./assets/leftarrow.png";

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      setToShow(() => calculateImc(heightField, weightField));

    } else {
      alert("Digite todos os campos.");
    }
  }

  //reset
  const handleBackButton = () => {
    setHeightField(0);
    setWeightField(0);
    setToShow(null);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>
            IMC é a sigla Indice de Massa Compôrea. 
            Parâmetro adotado pela Organização Mundial de Saúde para calcular
            o peso ideal de cada pessoa.
          </p>
          <input 
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
            value={heightField > 0 ? heightField : ""}
            onChange={e => setHeightField(Number(e.target.value))}
            disabled={toShow == null ? false : true}
          />
          <input 
            type="number"
            placeholder="Digite o seu peso. Ex: 75.5 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={e => setWeightField(Number(e.target.value))}
            disabled={toShow == null ? false : true}
          />
          <button disabled={toShow == null ? false : true} onClick={handleCalculateButton} >Calcular</button>
        </div>

        {/* <div className={styles.rightSide}>
            <div className={styles.grid}>
              {levels.map((item, index) =>(
                <GridItem key={index} item={item} toShow={toShow}/>
              ))}
            </div>
        </div> */}

        <div className={styles.rightSide}>
          {!toShow ?
            <div className={styles.grid}>
              {levels.map((item, index) =>(
                <GridItem key={index} item={item} />
              ))}
            </div>
          :
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
              <img src={leftArrow} width={25}></img>
            </div>
            <GridItem item={toShow} />
          </div>
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
