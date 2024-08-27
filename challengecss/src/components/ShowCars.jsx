// CSS
import styles from './ShowCars.module.css'

const ShowCars = ({name, brand, year}) => {
    return (
        <>
            <ul>
                <li className={styles.list_li}>Nome: {name}</li>
                <li className={styles.list_li}>Marca: {brand}</li>
                <li className={styles.list_li}>Ano: {year}</li>
            </ul>
        </>
    )
}

export default ShowCars