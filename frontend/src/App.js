import axios from 'axios'
import {useState,useEffect} from 'react'

function App() {
    const [Viagens,setViagens] = useState([]);
    const [travel,setTravel] = useState({ 
        nome: '',
        data: '',
        desc: '',
        price: 0
    })

    useEffect(()=>{
        axios.get("http://localhost:8080/api/v1/travels")
            .then(res=>setViagens(res.data))
            .catch(erro=> console.log("deu erro no getApi: ",erro))

    },[])

    const cadastrarViagem=(travel)=>{
        axios.post("http://localhost:8080/api/v1/travels",{travel})
            .then(res=>{
                console.log(res);
                setViagens([...Viagens,res.data])
                setTravel({
                    nome: '',
                    data: '',
                    desc: '',
                    price: 0
                  })
            })
        
    
    } 
    function EnvioFormulario(e){
        e.preventDefault()
        cadastrarViagem(travel)
       
     }
    return (
        <div>
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
           {
            Viagens.map(v=>
                <h1>{v.nome}</h1>
                ) 
            }
        </div>
    )
}



export default App