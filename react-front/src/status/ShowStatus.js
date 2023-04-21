import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI2 = "http://localhost:8000/status";

const CompShowStatus = () => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = async () => {
    const res = await axios.get(URI2);
    setStatus(res.data);
  };

  //procedimiento para eliminar un status
  /*   const deleteStatus = async (id) => {
    await axios.delete(`${URI2}/${id}`);
    getStatus();
  }; */

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Status</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {status
                ? status.map((status) => (
                    <tr key={status.id}>
                      <td> {status.status}</td>

                      <td>
                        <Link
                          to={`/editStatus/${status.id}`}
                          className="btn btn-info"
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                        {/* <button
                          onClick={() => deleteStatus(status.id)}
                          className="btn btn-danger"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button> */}
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
          <Link to="/createStatus" className="btn btn-primary mt-2 mb-2">
            <button type="submit" className="btn btn-primary">
              Nuevo Status
            </button>
          </Link>
          <Link to="/" className="btn btn-danger mt-2 mb-2">
            <button className="btn btn-danger">Cancelar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompShowStatus;
