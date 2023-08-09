import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import DNCKawaii from '../../Image/Projects/DNCKawaii.svg'
import ProjetoArquitetura from '../../Image/Projects/ProjetoArquitetura.svg'
import ToDo from '../../Image/Projects/ToDo.svg'

function Projects() {
    return(
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card
            img={DNCKawaii}
            title='DNC Kawaii'
            tech='HTML, CSS e JS'
            description='Desafio do quinto módulo do curso da DNC, uma representação de um eccomerce de artigos fofos '
            repo='https://github.com/danibenfica/dnc-kawaii-store'
            site='https://dnc-kawaii-store.vercel.app/'
            />
            <Card
            img={ProjetoArquitetura}
            title='Projeto Arquitetura'
            tech='HTML, CSS, e JS'
            description='Desafio do curso da DNC, um projeto de arquitetura  onde o usuário tem a possibilidade de entrar em contato para obter mais informações sobre a empresa por meio
            de um formulário '
            repo='https://github.com/danibenfica/Projeto-Arquitetura-DNC'
            site='https://projeto-arquitetura-dnc.netlify.app/'/>
            <Card
            img={ToDo}
            title='To Do'
            tech='HTML, SASS, JS e REACT'
            description='Consiste em uma aplicação simples de Lista de Tarefas, na qual os usuários podem adicionar, editar e excluir tarefas.'
            repo='https://github.com/danibenfica/desafio-to-do-em-React'
            site='https://react-vite-to-do-list.netlify.app/'/>
            <ButtonB text='Acesse meu repositório' link='https://github.com/danibenfica?tab=repositories'/>
        </div>
    )
}

export default Projects