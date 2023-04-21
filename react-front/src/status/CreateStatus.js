import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const URI2 = "http://localhost:8000/status/";

//Lo que mostrará tras apretar en agregar +
const CompCreateStatus = () => {
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  const [bandera, setBandera] = useState(true);

  //procedimiento guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI2, {
      status: status,
    }); //para enviar los datos al backend
    navigate("/");
  };
  return (
    <div>
      <h3>Creat Cliente</h3>

      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <input
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setBandera(true);
            }}
            type="text"
            className="form-control"
          />
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
    </div>
  );
};

export default CompCreateStatus;
