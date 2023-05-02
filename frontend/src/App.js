import axios from 'axios'
import {useState,useEffect} from 'react'
import Form from './components/Form';
import Card from './components/Card';
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
    const deleteTravel = (id)=>{
        axios.delete(`http://localhost:8080/api/v1/travels/${id}`)
        .then(res=>{
            console.log(res.data)
            setViagens(Viagens.filter(v => v.id !==id))
        })
        .catch (error=>console.error("erro ao deletar"))
        }

    
    function EnvioFormulario(e){
        e.preventDefault()
        cadastrarViagem(travel)
       
     }
    return (
            <div>
        <Form
            travel={travel}
            setTravel={setTravel}
            EnvioFormulario={EnvioFormulario}
        />
        <div className='cards'>
           {
            Viagens.map(v=>
                <Card
                key={v.id}
                deletarViagem = {deleteTravel}
                nome={v.nome}
                id={v.id}
                data={v.data} 
                desc={v.desc}
                price={v.price}
                />
                ) 
            }
            </div>
        </div>
    )
}



export default App