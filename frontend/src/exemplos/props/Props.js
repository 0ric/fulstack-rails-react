function Props(props) {
    const nome =props.nome;
    const {idade} = props;
    const {numero} = props
    return (
        <div>
            <h1>Bem vindo {nome}</h1>
            <h2>Seu pedido é o {props.numero}</h2>
            <h3>tu tem {idade} anos? </h3>
            <h4>sua senha é a {numero} </h4>
          
        </div>
    )
}

export default Props