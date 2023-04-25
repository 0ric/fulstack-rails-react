import "./Card.css"
import {TbTrashX} from 'react-icons/tb'
function Card(props) {
return (
    <div className="card">
        <h1>{props.nome}</h1>
            <div >
            <TbTrashX size={32}/>
            
            </div>
    </div>
)
}

export default Card