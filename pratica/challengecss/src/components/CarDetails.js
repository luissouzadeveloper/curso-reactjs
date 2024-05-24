import styles from './CarDetails.module.css'

const CarDetails = ({ name, year, color, brand }) => {

    return (
        <>
            <ul className={styles.ul}>
                <h2>{name}</h2>
                <li className={styles.li}>Ano: {year}</li>
                <li className={styles.li}>Cor: {color}</li>
                <li className={styles.li}>Marca: {brand}</li>
            </ul>
        </>
    )
}

export default CarDetails