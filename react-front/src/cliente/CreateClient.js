import axios from 'axios';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const URI = 'http://localhost:8000/clientes/'


//Lo que mostrará tras apretar en agregar +
const CompCreateClient = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [status, setStatus] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {name: name, address: address, email: email, phone: phone, status: status}) //para enviar los datos al backend
        navigate('/')
    }
    return (
        <div>
            <h3>Creat POST</h3>
            <form onSubmit={store}>
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
                <button type='submit' className='btn btn-primary'>Agregar</button>
            </form>
        </div>
    )
}


export default CompCreateClient