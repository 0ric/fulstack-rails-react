import axios from 'axios'
import {useState,useEffect} from 'react'

function App() {
    const [Viagens,setViagens] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/api/v1/travels")
            .then(res=>setViagens(res.data))
            .catch(erro=> console.log("deu erro no getApi: ",erro))

    },[])

    return (
        <div>App</div>
    )
}



export default App