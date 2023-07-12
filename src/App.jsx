import { Container } from 'react-bootstrap';
import './App.css'
import Titulos from './components/Titulos'
import "bootstrap/dist/css/bootstrap.min.css";
import Contador from './components/Contador';

function App() {
  const estadoNuevo = true;

  return (
    <Container>
      <Titulos subtituloNuevo='Este subtitulo fue creado con Props' estadoNuevo={estadoNuevo}></Titulos>
      <Contador></Contador>
    </Container>
  )
}

export default App
