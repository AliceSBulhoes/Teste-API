import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contato = () => {

  // Usando Hook de estado - useState
  const[user, setUser] = useState('');
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');

  const sendEmail = (e) => {
    if(user == '' || email == '' || message == ''){
        alert('Preencha todos os campost!');
        return;
    } 

    e.preventDefault()

    // Criando os templates
    const template = {
        from_user: user,
        from_email: email,
        from_message: message
    }

    emailjs.send("service_xdlymql","template_uv7xocl", template, "DBEYLntn1VNWCJtjo")
    .then((res) => {
        console.log(`Informações: ${res.status}`);
        setUser("");
        setEmail("");
        setMessage("");
    }, (error) => {
        console.log(`Erro: ${error}`);
    })

  }
  return (
    <>
    <section className="container-contato">
        <h1 className='contato-h1'></h1>
        <form onSubmit={sendEmail}>
            <div className="input">
                <h2>Nome</h2>
                <input type="text" placeholder='Nome' className='input-contato' onChange={(e) => setUser(e.target.value)}/>
            </div>
            <div className="input">
                <h2>Email</h2>
                <input type="text" placeholder='Email' className='input-contato' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input">
                <h2>Mensagem</h2>
                <input type="text" placeholder='Mensagem' className='input-contato' onChange={(e) => setMessage(e.target.value)}/>
            </div>
            <button type='submit' className='btn-submit'>Enviar</button>
        </form>
    </section>  
    </>
  )
}

export default Contato