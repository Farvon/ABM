import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/clientes/";
const URI2 = "http://localhost:8000/status/";

const CompEditClient = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [clientStatus, setClientStatus] = useState();
  const [bandera, setBandera] = useState(true);

  const [status, setStatus] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  //procedimiento para actualizar
  const update = async (e) => {
    if (name && address && email && phone && clientStatus) {
      e.preventDefault();
      await axios.put(URI + id, {
        name: name,
        address: address,
        email: email,
        phone: phone,
        status: clientStatus,
      });
      navigate("/");
    } else {
      setBandera(false);
      e.preventDefault();
      console.log("No hay nombre");
    }
  };

  const getStatus = async () => {
    const res = await axios.get(URI2);
    setStatus(res.data);
  };

  const getClientById = async () => {
    const res = await axios.get(URI + id);
    setName(res.data.name);
    setAddress(res.data.address);
    setEmail(res.data.email);
    setPhone(res.data.phone);
    setClientStatus(res.data.status);
  };

  useEffect(() => {
    getClientById();
    getStatus();
  }, []);

  return (
    <div>
      <h3>Editar Cliente</h3>
      {status ? (
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
            <select
              required
              onChange={(e) => {
                setClientStatus(e.target.value);
              }}
            >
              <option value="" selected>
                Status
              </option>
              {status.map((el) => {
                return (
                  <option value={el.id} key={el.id}>
                    {el.status}
                  </option>
                );
              })}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Actualizar
          </button>
          <button className="btn btn-danger ">
            <a className="text-decoration-none text-reset" href="/">
              Cancelar
            </a>
          </button>

          {bandera === false ? <h2>Debe agregar todos los campos</h2> : <></>}
        </form>
      ) : null}
    </div>
  );
};

export default CompEditClient;
