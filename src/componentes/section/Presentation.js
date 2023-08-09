import ButtonA from '../elements/ButtonA'
import styles from './Presentation.module.css'
import { useEffect, useState } from 'react'

function Presentation() {

    const [text, setText] = useState('')
    const toRotate = ['Daniele Benfica', 'QA', 'Desenvolvedora Front-End']
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const period = 100
    const [delta, setDelta] = useState(100)

    useEffect(()=> {
        let ticker = setInterval(()=> {
            toType()
        }, delta)
        return()=>{clearInterval(ticker)}
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText)

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setDelta(period)
            setLoop(loop+1)
        }
    }

    return(
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
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