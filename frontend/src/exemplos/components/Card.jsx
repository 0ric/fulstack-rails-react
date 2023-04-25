import "./Card.css"

function Card(props) {
return (
    <div className="card">
        <h1>{props.nome}</h1>
    </div>
)
}

export default Card