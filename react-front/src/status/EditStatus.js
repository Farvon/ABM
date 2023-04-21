import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI2 = "http://localhost:8000/status/";

const CompEditStatus = () => {
  const [status, setStatus] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  //procedimiento para actualizar
  const updateStatus = async (e) => {
    if (status) {
      e.preventDefault();
      await axios.put(URI2 + id, {
        status: status,
      });
      navigate("/");
    } else {
      e.preventDefault();
      console.log("No hay nombre");
    }
  };

  const getStatusById = async () => {
    const res = await axios.get(URI2 + id);
    setStatus(res.data.status);
  };
  useEffect(() => {
    getStatusById();
  }, []);

  return (
    <div>
      <h3>Editar Status</h3>
      <form onSubmit={updateStatus}>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <input
            required
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>
        <button className="btn btn-danger ">
          <a className="text-decoration-none text-reset" href="/">
            Cancelar
          </a>
        </button>
      </form>
    </div>
  );
};

export default CompEditStatus;
