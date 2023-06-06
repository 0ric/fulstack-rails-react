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
    const[showPopup,setShowPopup] = useState(false);
    const [editID,setEditID] = useState(-1);
    const [popupContent,setPopupContent] = useState({message: '',color: ''})

    function showAndHidePopup(){
        setShowPopup(true);
        setTimeout(()=>{
            setShowPopup(false);
        },3500)
    }
    useEffect(()=>{
        axios.get("http://localhost:8080/api/v2/travels")
            .then(res=>setViagens(res.data))
            .catch(erro=> console.log("deu erro no getApi: ",erro))

    },[])

    const cadastrarViagem=(travel)=>{
        axios.post("http://localhost:8080/api/v2/travels",{travel})
            .then(res=>{
                console.log(res);
                setViagens([...Viagens,res.data])
                setTravel({
                    nome: '',
                    data: '',
                    desc: '',
                    price: 0
                  })
                  setPopupContent({
                    message: 'Card Cadastrado com Sucesso',
                    color: 'sucess'
                })
                showAndHidePopup()
            })            
        .catch (error=>{
            console.error("erro ao cadastrar")
            setPopupContent({
                message: 'Erro ao cadastrar viagem',
                color: 'Warning'
            })
            showAndHidePopup()

        })
    } 
    const deleteTravel = (id)=>{
        axios.delete(`http://localhost:8080/api/v2/travels/${id}`)
        .then(res=>{
            console.log(res.data)
            setViagens(Viagens.filter(v => v.id !==id))
            setPopupContent({
                message: 'Card Deletado com Sucesso',
                color: 'sucess'
            })
            showAndHidePopup()
        })
        .catch (error=>{
            console.error("erro ao deletar")
            setPopupContent({
                message: 'Não foi possivel deletar',
                color: 'warning'
            })
            showAndHidePopup()
         })
    }

    const editTravel = (id,travel)=>{
        axios.put(`http://localhost:8080/api/v2/travels/${id}`,{travel})
        .then(res=>{
            let newListaDeViagens = Viagens.map( v =>{
                if(v.id === id){
                    return res.data
                }
                return v
            })
            setViagens(newListaDeViagens)
            setPopupContent({
                message: 'Card Editada com Sucesso',
                color: 'sucess'
            })
            showAndHidePopup()
        })
        .catch(erro=>console.log("erro ao atualizar"))
        setPopupContent({
            message: 'Não foi possivel editar',
            color: 'warning'
        })
        showAndHidePopup()
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
                    {
                    showPopup?
                     <Popup
                         message={popupContent.message}
                         color={popupContent.color}
                    />: null
                    } 
            </div>
        </div>
    )
}



export default App