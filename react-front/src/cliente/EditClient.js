import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/clientes/";

const CompEditClient = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [bandera, setBandera] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  //procedimiento para actualizar
  const update = async (e) => {
    if (name && address && email && phone && status) {
      e.preventDefault();
      await axios.put(URI + id, {
        name: name,
        address: address,
        email: email,
        phone: phone,
        status: status,
      });
      navigate("/");
    } else {
      setBandera(false);
      e.preventDefault();
      console.log("No hay nombre");
    }
  };

  const getClientById = async () => {
    const res = await axios.get(URI + id);
    setName(res.data.name);
    setAddress(res.data.address);
    setEmail(res.data.email);
    setPhone(res.data.phone);
    setStatus(res.data.status);
  };

  useEffect(() => {
    getClientById();
  }, []);

  return (
    <div>
      <h3>Editar Cliente</h3>
      <form onSubmit={update}>
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
          {/* <input
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            type="text"
            className="form-control"
          /> */}

          <select onChange={(e) => setStatus(e.target.value)}>
            <option value="Actual">Actual</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
            <option value="Potencial">Potencial</option>
            <option value="Probable">Probable</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>

        {bandera === false ? <h2>Debe agregar todos los campos</h2> : <></>}
      </form>
    </div>
  );
};

export default CompEditClient;
