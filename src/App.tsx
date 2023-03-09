import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import RoutesMain from "./routes/RoutesMain";
import GlobalStyle from "./style/GlobalStyle";

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
