import FormTareas from "./components/FormTareas";
//importar la hoja de estilo de bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
    <Container>
    <h1 className="display-4 text-center my-4">Lista de tareas a realizar</h1>
    <hr />
    <FormTareas></FormTareas>
    </Container>
    </>
    );
}

export default App;
