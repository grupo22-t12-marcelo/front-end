import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Input, Label } from "reactstrap";
import "./App.css";
import { ModaL } from "./components/Modal";
import RoutesMain from "./routes/RoutesMain";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesMain />
    </div>
  );
}

export default App;
