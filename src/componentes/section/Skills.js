import styles from './Skills.module.css'
import JavaScript from '../../Image/Skills/JavaScript.svg'
import HTML from '../../Image/Skills/HTML.svg'
import CSS from '../../Image/Skills/CSS.svg'
import REACT from '../../Image/Skills/React.svg'

function Skills () {
    return(
        <div className={styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={JavaScript}/>
                <img src={HTML}/>
                <img src={CSS}/>
                <img src={REACT}/>
            </div>
</div>



      
    )
}

export default Skills