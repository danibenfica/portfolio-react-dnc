import { FaInstagram, FaLinkedin, FaGithub   } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer () {
    return(
        <div  className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/harunsb/'><FaInstagram size={30}/></a></li>
                <li><a href='https://br.linkedin.com/in/danibenfica'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/danibenfica'><FaGithub size={30}/></a></li>
            </ul>
            <p>daniele.benfica0@gmail.com</p>
            <p>Daniele Benfica 2023</p>
        </div>
    )
}

export default Footer