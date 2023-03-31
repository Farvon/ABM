import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/clientes/'


const CompEditClient = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [status, setStatus] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            name: name,
            address: address,
            email: email,
            phone: phone,
            status: status
        })
        navigate ('/') 
    }

    const getClientById = async () => {
        const res = await axios.get(URI+id)
        setName(res.data.name)
        setAddress(res.data.address)
        setEmail(res.data.email)
        setPhone(res.data.phone)
        setStatus(res.data.status)
    }

    useEffect( ()=>{
        getClientById()
    },[])



    return (
        <div>
            <h3>Edit POST</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input 
                        value={name}
                        onChange={ (e) => setName(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Dirección</label>
                        <input 
                            value={address}
                            onChange={ (e) => setAddress(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>E-mail</label>
                        <input 
                            value={email}
                            onChange={ (e) => setEmail(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Teléfono</label>
                        <input 
                            value={phone}
                            onChange={ (e) => setPhone(e.target.value)}
                            type='int'
                            className='form-control'
                        />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Status</label>
                        <input 
                            value={status}
                            onChange={ (e) => setStatus(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                </div>
                <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div>
    )

}

export default CompEditClient