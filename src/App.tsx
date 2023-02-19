import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CardVehicle } from "./components/CardVehicles";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <CardVehicle />
    </div>
  );
}

export default App;
