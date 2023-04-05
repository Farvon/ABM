import logo from "./logo.svg";
import "./App.css";

//importamos los componentes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompCreateClient from "./cliente/CreateClient.js";
import CompShowClients from "./cliente/ShowClients.js";
import CompEditClient from "./cliente/EditClient.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Clientes</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowClients />} />
          <Route path="/create" element={<CompCreateClient />} />
          <Route path="/edit/:id" element={<CompEditClient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
