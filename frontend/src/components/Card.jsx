import "./Card.css"
import {TbTrashX} from 'react-icons/tb'
import {FaEdit} from 'react-icons/fa'
import { FormatarData } from "../fn-helpers/data";
function Card(props) {
    const {id,data,desc,price} = props
    const dataFormatada =FormatarData(data);
    const setEditing = () =>{
        props.setTravel({
            nome: props.nome,
            data: data.slice(0, 16),
            desc: desc,
            price: price
        })
        props.setEditID(id)
    }
    const deleteMode= () =>{
        props.deletarViagem(id)
        props.setEditID(null)
    }
return (
    <div className="card">
        <h1>{props.nome}</h1>
            <div >
                <p>{desc}</p>
                <p>{dataFormatada}</p>
                <p>R${price},00</p>
                <div 
                    onClick={()=>deleteMode()} 
                >                
                    <TbTrashX size={32}/>
                </div>
                <div onClick={()=>setEditing(id)}>
                    <FaEdit size={32}/>
                </div>
            </div>
    </div>
)
}

export default Card