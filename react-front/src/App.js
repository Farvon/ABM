import "./App.css";

//importamos los componentes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompCreateClient from "./cliente/CreateClient.js";
import CompShowClients from "./cliente/ShowClients.js";
import CompEditClient from "./cliente/EditClient.js";
import CompCreateStatus from "./status/CreateStatus";
import CompShowStatus from "./status/ShowStatus";
import CompEditStatus from "./status/EditStatus";

function App() {
  return (
    <div className="App">
      <header className="App-header mb-2">
        <h1>ABM de Clientes</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowClients />} />
          <Route path="/create" element={<CompCreateClient />} />
          <Route path="/edit/:id" element={<CompEditClient />} />

          <Route path="/showStatus" element={<CompShowStatus />} />
          <Route path="/createStatus" element={<CompCreateStatus />} />
          <Route path="/editStatus/:id" element={<CompEditStatus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
