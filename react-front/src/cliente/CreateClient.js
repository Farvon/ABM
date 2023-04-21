import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/clientes/";
const URI2 = "http://localhost:8000/status/";

//Lo que mostrará tras apretar en agregar +
const CompCreateClient = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [clientStatus, setClientStatus] = useState(1);

  const [status, setStatus] = useState([]);
  const navigate = useNavigate();

  const [bandera, setBandera] = useState(true);

  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = async () => {
    const res = await axios.get(URI2);

    setStatus(res.data);
  };

  //procedimiento guardar
  const store = async (e) => {
    if (name && address && email && phone && clientStatus) {
      e.preventDefault();
      await axios.post(URI, {
        name: name,
        address: address,
        email: email,
        phone: phone,
        status: clientStatus,
      }); //para enviar los datos al backend
      navigate("/");
    } else {
      setBandera(false);
      e.preventDefault();
    }
  };
  return (
    <div>
      <h3>Creat Cliente</h3>
      {status ? (
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
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setBandera(true);
              }}
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

            <select required onChange={(e) => setClientStatus(e.target.value)}>
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
            Agregar
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

export default CompCreateClient;
