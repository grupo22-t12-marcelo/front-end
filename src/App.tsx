import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import RoutesMain from "./routes/RoutesMain";
import GlobalStyle from "./style/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
