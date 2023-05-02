import "./Card.css"
import {TbTrashX} from 'react-icons/tb'
import { FormatarData } from "../fn-helpers/data";
function Card(props) {
    const {id,data,desc,price} = props
    const dataFormatada =FormatarData(data);
return (
    <div className="card">
        <h1>{props.nome}</h1>
            <div >
                <p>{desc}</p>
                <p>{dataFormatada}</p>
                <p>R${price},00</p>
                <div onClick={()=>props.deletarViagem(id)}>
            <TbTrashX size={32}/>
                </div>
            </div>
    </div>
)
}

export default Card