import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api'

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {

const history = useHistory();

const [id, setId] = useState('');

async function handleLogin(e) {
    e.preventDefault();

    try {

        const response = await api.post('sessions', {id});

        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', response.data.name);

        // rota usando js
        history.push('/profile');
        
    } catch (err) {
        console.log(err);

        alert('Falha no login! Tente novamente');
        
    }
}

    return (
        <div className="logon-container">

            <section className="form">
                <img src={logoImg} alt="Be The Hero" ></img>

                <form>
                    <h1>Faça seu logon</h1>
                    <input
                        type="text"
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        />
                    <button onClick={handleLogin} className="button" type="submit">Entrar</button>
                    
                    
                    
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"></FiLogIn>
                        Não tenho cadastro
                    </Link>
                    </form>
            </section>

            

        <img src={heroesImg} alt="Heroes" ></img>
        </div>

    );
}