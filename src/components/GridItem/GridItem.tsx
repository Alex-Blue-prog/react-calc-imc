import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";
import { Level } from "../../helpers/imc";


type Props = {
  item: Level,
  // toShow?: Level | null // toShow is doing nothing !!!
}

const GridItem = ({item}:Props) => {
 

  return (
    <div className={styles.main} style={{backgroundColor: item.color}}>
      <div className={styles.gridIcon}>
        <img src={item.icon === "up" ? upImage : downImage} width={30} />
      </div>
      <div className={styles.gridTitle}>{item.title}</div>

      {item.yourImc &&
        <div className={styles.yourImc}>Seu IMC é de {item.yourImc.toFixed(2)} kg/m²</div>
      }

      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  )
}

export default GridItem;