import axios from 'axios'
import {useState,useEffect} from 'react'
import Form from './components/Form';
import Card from './components/Card';
import Popup from './components/Popup';
function App() {
    const [Viagens,setViagens] = useState([]);
    const [travel,setTravel] = useState({ 
        nome: '',
        data: '',
        desc: '',
        price: 0
    })
    const [editID,setEditID] = useState(-1);
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

    const editTravel = (id,travel)=>{
        axios.put(`http://localhost:8080/api/v1/travels/${id}`,{travel})
        .then(res=>{
            let newListaDeViagens = Viagens.map( v =>{
                if(v.id === id){
                    return res.data
                }
                return v
            })
            setViagens(newListaDeViagens)
        })
        .catch(erro=>console.log("erro ao atualizar"))
    }
    function EnvioFormulario(e){
        e.preventDefault()
        if(editID !== -1){
            editTravel(editID,travel)
            setEditID(-1)
            setTravel({            
            nome: '',
            data: '',
            desc: '',
            price: 0
        })
            return
        }
        cadastrarViagem(travel)
       
     }

     function acharViagem(id){
        let ViagemAtual = Viagens.filter(v => v.id === id)[0]
        setTravel({
            nome: ViagemAtual.nome,
            data: ViagemAtual.travel,
            desc: ViagemAtual.desc,
            price: ViagemAtual.price
        })
     }
    return (
            <div>
        <Form
            id={editID}
        
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
                setTravel={setTravel}
                id={v.id}
                data={v.data} 
                desc={v.desc}
                price={v.price}
                setEditID={setEditID}
                
                />
                ) 
            }


            <Popup/>
            </div>
        </div>
    )
}



export default App