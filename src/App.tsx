import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CardVehicle } from "./components/CardVehicles";
import GlobalStyle from "./style/GlobalStyle";
import car from "../src/assets/car1.png";
import CriarAnuncio from "./components/ModalCriarAnuncio";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <CriarAnuncio/>
    </div>
  );
}

export default App;
