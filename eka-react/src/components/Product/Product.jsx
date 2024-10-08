// export default function Product(props) {
//   // shift+alt+f
//   return (
//     <li>
//       <img src={props.img} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// deconstructuring

// Komponentti kohtaiset tyylittelyt
// styles-objektista jaetaan luokkia komponentin elementeille
// esim className={styles.productImage}
import styles from './Product.module.css'

export default function Product({img, title, description}) {

    console.log("Product EXECUTING ", title)

    return (
        <li className={styles.product}>
            <img className={styles.productImage} src={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}
