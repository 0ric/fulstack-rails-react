import "./Card.css"
import {TbTrashX} from 'react-icons/tb'
function Card(props) {
    const {id,data,desc,price} = props
return (
    <div className="card">
        <h1>{props.nome}</h1>
            <div >
                <p>{desc}</p>
                <p>{data}</p>
                <p>{price}</p>
                <button onClick={()=>props.deletarViagem(id)}>
            <TbTrashX size={32}/>
                </button>
            </div>
    </div>
)
}

export default Card