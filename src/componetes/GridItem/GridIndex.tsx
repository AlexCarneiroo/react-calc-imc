import { Level } from "../../IMC";
import style from './GridItem.module.css';
import upImage from '../../assetss/up.png';
import downImage from '../../assetss/down.png';

type Props ={
    item: Level;
}

export const GridItem = ({item}:Props) =>{
     return(
        <div className={style.main} style={{backgroundColor: item.color}}>
            <div className={style.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30}/>
            </div>
            <div className={style.gridTitle}>
                {item.tittle}
            </div>

            {item.yourImc &&

                <div className={style.yourImc}>Seu IMC é de {item.yourImc} kg/m</div>

            }

            <div className={style.gridInfo}>
                <>
                    IMC estar entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}