import React from 'react';
import './App.css';
import { useState } from 'react';

function Page() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");

    const handleNome = (e) => {
        setNome(e.target.value);
    }
    const handleCpf = (e) => {
        setCpf(e.target.value);
    }
    const handleEndreco = (e) => {
        setEndereco(e.target.value);
    }
    const handleTelefone = (e) => {
        setTelefone(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            nome,
            cpf,
            endereco,
            telefone,
            email,
        };

        localStorage.setItem("lead", JSON.stringify(data));
    };

    return(
        <div class="App-color">
            <div class="App-cliente">
                <h6>CADASTRE O CLIENTE</h6> 
                <form class="App-form" onSubmit={onSubmit}>
                <input value={nome} onChange={handleNome} placeholder="Nome"/>
                    <input value={cpf} onChange={handleCpf} placeholder="Cpf" />
                    <input value={endereco} onChange={handleEndreco} placeholder="Endereço" />
                    <input value={telefone} onChange={handleTelefone} placeholder="Telefone" />
                    <input value={email} onChange={handleEmail} placeholder="Email" />
                    <button>ENVIAR DADOS</button>
                </form>
            </div>
        </div>
    );
}


export default Page;