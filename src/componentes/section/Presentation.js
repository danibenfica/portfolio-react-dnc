import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'
import styles from './Presentation.module.css'

function Presentation() {
    return(
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Daniele Benfica!</h1>
            <p>
                Trabalho como QA, realizando testes funcionais e de usabilidade para analisar a qualidade do software. <br/>
                Além disso, proponho melhorias com base nas minhas descobertas e identifico possíveis bugs. <br/>
                Acredito que meu trabalho pode ir além do que já faço, permitindo-me aprender constantemente. <br/>
                Estou sempre buscando aprimorar minhas habilidades profissionais. Sou uma profissional dedicada, <br/>
                apaixonada por aprender e ansiosa por novos desafios e oportunidades de crescimento. <br/>
                Além do meu trabalho como QA, também estou me aventurando no mundo do front-end, aprimorando <br/>
                minhas habilidades em tecnologias como JavaScript e React. Essas ferramentas têm me permitido  <br/>
                criar interfaces interativas e dinâmicas. <br/><br/>
                Como alguém que ama arte, trago minha criatividade para o mundo do front-end, explorando formas <br/>
                inovadoras de projetar interfaces atraentes. Adoro adicionar toques artísticos aos meus projetos, <br/>
                como ilustrações personalizadas e layouts únicos. A cor rosa, em particular, é uma das minhas favoritas, <br/>
                pois acredito que ela traz uma sensação de energia e vivacidade. Você pode esperar ver tons de rosa em muitos <br/>
                dos meus projetos, adicionando um toque de personalidade. <br/>
                Procuro expandir meus conhecimentos e habilidades a cada dia, não me limitando a apenas uma área.  <br/>
                Estou aberta a desafios e estou sempre em busca de novas oportunidades para me aperfeiçoar. Estou entusiasmada <br/>
                com o que o futuro reserva para minha carreira como QA e minha jornada no desenvolvimento front-end!
                </p>

                <ButtonA link='https://github.com/danibenfica' text='Conecte-se comigo!'/>
            

        </div>
    )
}

export default Presentation