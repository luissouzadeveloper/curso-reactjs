// CSS
import styles from './ShowCars.module.css'

const ShowCars = ({name, brand, year}) => {
    return (
        <>
            <div className={styles.container}>
                <ul className={styles.container_ul}>
                    <li className={styles.list_li}>Nome: {name}</li>
                    <li className={styles.list_li}>Marca: {brand}</li>
                    <li className={styles.list_li}>Ano: {year}</li>
                </ul>
            </div>
        </>
    )
}

export default ShowCars