import axios from 'axios'
import {useState,useEffect} from 'react'
import Form from './components/Form';
import Card from './components/Card';
import Popup from './components/Popup';
import Logo from './imagens/cover.png'



function App() {
    const [Viagens,setViagens] = useState([]);
    const [travel,setTravel] = useState({ 
        nome: '',
        data: '',
        desc: '',
        price: 0,
        image:null
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

    const cadastrarViagem=(formData)=>{
        axios.post("http://localhost:8080/api/v2/travels",formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
            .then(res=>{
                console.log(res);
                setViagens([...Viagens,res.data])
                setTravel({
                    nome: '',
                    data: '',
                    desc: '',
                    price: 0,
                    image: null
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
        const formData = new FormData();
        formData.append('travel[image]',travel.image);
        formData.append('travel[nome]',travel.nome);
        formData.append('travel[desc]',travel.desc);
        formData.append('travel[price]',travel.price);
        formData.append('travel[data]',travel.data);
        cadastrarViagem(formData)
       
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
                
                <nav class="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                    <div class="container-fluid">                      
                        <a class="navbar-brand" href="#"></a>
                        <img src= {Logo} alt="Logo" width="350" height="120" class="d-inline-block align-text-top"/>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link disabled"></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
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
                image_url={v.image_url}
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