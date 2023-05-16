import './Form.css'

function Form({travel,EnvioFormulario,setTravel,id}) {

    if(id){
       console.log(id)
    }
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
    <button type='submit'>Cadastrar viagem</button>
    </form>
    </div>
    )
}

export default Form