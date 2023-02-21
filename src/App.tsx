import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CardAuction } from "./components/CardAuction";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <CardAuction />
    </div>
  );
}

export default App;
