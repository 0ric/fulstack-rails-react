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