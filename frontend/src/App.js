import Ex1 from "./exemplos/function";
import EX2 from "./exemplos/ArrowFunction"
import Props from "./exemplos/props/Props";
import PropsAbistrato from "./exemplos/props/PropsAbistrato";
import {useState,useEffect} from 'react';
import Botao from "./exemplos/Botao";

function App(){
  const [hide,setHide] = useState(false);

  const [valorInicial,FunctionParaMudarOValor] = useState("valor inicial")

  function MudarValor(){
    FunctionParaMudarOValor("mudei");
  }

  useEffect(()=>{
    console.log("funcionei");
  
},[valorInicial])
  const data=  {
		"id": 1,
		"nome": "Kuwait City",
		"data": "2023-03-27T10:10:40.000Z",
		"price": 60.18,
		"desc": "Baltimore/Washington International Airport",
		"created_at": "2023-03-28T21:55:46.158Z",
		"updated_at": "2023-03-28T21:55:46.158Z"
	}
return(
  <>
    <h1>Opa {valorInicial}</h1>

    <button onClick={MudarValor}> Clique aqui para mudar o valor </button>

    <br></br>
  <Botao
    cor='red'
    tarefa={()=>console.log("cliquei")}
    texto="clique para exibir no console"
    />


    {hide && "texto hide true"}<br/>
    {!hide && "texto hide não true"}<br/>
    {!hide ?"se o hide estiver true" : "se o hide não estiver true"}<br/>
    {!hide ?"se o hide estiver false" : "se o hide não estiver false"}<br/>
    <button onClick={()=>setHide(!hide)}> Inverter hide</button>   
    <Ex1/>

    <EX2/>

    <Props numero="3" nome="ricardo" idade='21' />
    <Props numero="5" nome="marcos" idade='17' />
  <PropsAbistrato num1= {10} num2= {7} />
  </>
)
}

export default App;