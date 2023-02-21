import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RoutesMain from "./routes/RoutesMain";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesMain/>
    </div>
  );
}

export default App;
