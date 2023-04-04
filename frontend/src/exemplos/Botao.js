import './botao.css'


function Botao(props) {
    return (
        <button
        onClick={props.tarefa}
        className={props.cor}
        >
            {props.texto}
        </button>
    )
}

export default Botao