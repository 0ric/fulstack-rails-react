import Ex1 from "./exemplos/function";
import EX2 from "./exemplos/ArrowFunction"
import Props from "./exemplos/props/Props";
import PropsAbistrato from "./exemplos/props/PropsAbistrato";
function App(){

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
    <h1>Opa</h1>

    <Ex1/>

    <EX2/>

    <Props numero="3" nome="ricardo" idade='21' />
    <Props numero="5" nome="marcos" idade='17' />
  <PropsAbistrato num1= {10} num2= {7} />
  </>
)
}

export default App;