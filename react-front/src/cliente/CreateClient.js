import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/clientes/";

//Lo que mostrará tras apretar en agregar +
const CompCreateClient = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("Actual");
  const navigate = useNavigate();

  const [bandera, setBandera] = useState(true);

  //procedimiento guardar
  const store = async (e) => {
    if (name && address && email && phone && status) {
      e.preventDefault();
      await axios.post(URI, {
        name: name,
        address: address,
        email: email,
        phone: phone,
        status: status,
      }); //para enviar los datos al backend
      navigate("/");
    } else {
      setBandera(false);
      e.preventDefault();
      console.log("No hay nombre");
    }
  };
  return (
    <div>
      <h3>Creat POST</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setBandera(true);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setBandera(true);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setBandera(true);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setBandera(true);
            }}
            type="int"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <br />
          <select onChange={(e) => setStatus(e.target.value)}>
            <option value="Actual">Actual</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
            <option value="Potencial">Potencial</option>
            <option value="Probable">Probable</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
        {bandera == false ? <h2>Debe agregar todos los campos</h2> : <></>}
      </form>
    </div>
  );
};

export default CompCreateClient;
