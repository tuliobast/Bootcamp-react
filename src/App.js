import './App.css';
import Mensaje  from './Mensaje.js' 

function Descripcion() {  
return <>Esto es una practica del bootcamp de react</>
}

function App() {
  let a = 5
  let b = 10 
  return (
    <div className="App">
      <h1>Titulo de la App</h1> 
      <strong>Estoy trabajando en ello</strong>
      <div>
        <p> el resultado de la operacion</p>
      {a+b}  
      </div> 
      <Mensaje color = 'red' message = 'esto es un curso'/> 
      <Mensaje color = 'Blue' message = 'con React.js'/> 
       <br />
      <Descripcion/>
    </div>
  );
}

export default App;
