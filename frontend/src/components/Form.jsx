import './Form.css'
import { useEffect } from 'react'
function Form({travel,EnvioFormulario,setTravel,id}) {

    useEffect(()=>{
        const fileInput = document.getElementById("image");
        const imageLabel = document.getElementById("imageLabel");
        fileInput.addEventListener("change",function(){
            if(fileInput.isDefaultNamespace.length >0 && fileInput.files[0].type.startsWith("image/")){
                const reader = new FileReader();
                reader.onload = function(event){
                    imageLabel.innerHTML=''
                    imageLabel.style.backgroundImage = `url(${event.target.result})`;
                }
                reader.readAsDataURL(fileInput.files[0])
            }else{
                imageLabel.style.backgroundImage = "";
                imageLabel.innerHTML = "Envie sua imagem"
            }
        })
    },[])

    return (
        <div className='divForm'>
        <form onSubmit={EnvioFormulario}>
        <label>Nome</label>
        <input
        id="nome"
        required
        onChange={(e)=>setTravel({...travel,nome: e.target.value})}
        value={travel.nome}
        placeholder="Digite o nome da viagem"
        />
        <label>Data:</label>
        <input
            id="data"
            required
            onChange={(e)=>setTravel({...travel,data: e.target.value})}
            value={travel.data}
            placeholder='Data'
            type='datetime-local'                
        />
        <label>Descrição:</label>
        <textarea
            required
            id='desc'
            onChange={(e)=>setTravel({...travel,desc: e.target.value})}
            value={travel.desc}
            placeholder='descrição da viagem'
        />
        <label>Price:</label>
         <input
            required
            id="price"
            onChange={(e)=>setTravel({...travel,price: e.target.value})}
            value={travel.price}
            placeholder='Preço'
            type='number'
        />
        <label htmlFor='image' id="imageLabel" className='imageLabel' >Envie sua imagem</label>
        <input
            type='file'
            id="image"
            required
            accept='image/*'
            onChange={(e)=>setTravel({...travel,image: e.target.files[0]})}
        />

    <button type='submit'>{id === -1 ?"Cadastrar" : "Editar"}</button>
    </form>
    </div>
    )
}

export default Form