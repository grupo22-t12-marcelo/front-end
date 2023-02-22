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
      <ModaL
        titleModal="Cadastrar anuncios"
        bodyModal={
          <form>
            <Label>Alguma coisa</Label>
            <Input />
            <Label>Alguma coisa</Label>
            <Input />
            <Label>Alguma coisa</Label>
            <Input />
            <Label>Alguma coisa</Label>
            <Input />
            <Label>Alguma coisa</Label>
            <Input />
            <Label>Alguma coisa</Label>
            <Input />
            <Label>Alguma coisa</Label>
            <Input />
            <Label>Alguma coisa</Label>
            <Input />
            <Label>Alguma coisa</Label>
            <Input />
          </form>
        }
        footerModal={<Button>Cadastrar</Button>}
      />
    </div>
  );
}

export default App;
