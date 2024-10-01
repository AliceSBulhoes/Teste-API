import React from 'react'
import { useForm } from 'react-hook-form'

const Cliente = () => {

  
  //Declarando variáveis para usar o Hook - useForm
  const {register, handleSubmit, setValue, setFocus} = useForm({}); 
  
  // Criando a função buscarCep
  
  const buscarCep = (e) => {
    const cep = e.target.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((dados) => {
        setValue('rua', dados.logradouro);
        setValue('bairro', dados.bairro);
        setFocus('numero')
    })
  }

  return (
    <>
    <section className='container-cliente'>
        <form onSubmit={handleSubmit} className='form'>
            <h1 className='title-form'>Endereço</h1>
            <div className="input-container">
                <p className='input-p'>Cep: </p>
                <input
                    type='text'
                    className='input'
                    {...register('cep')}
                    onBlur={buscarCep}
                ></input>
            </div>
            <div className="input-container">
                <p className='input-p'>Rua: </p>
                <input
                    type='text'
                    className='input'
                    {...register('rua')}
                ></input>
            </div>
            <div className="input-container">
                <p className='input-p'>Bairro: </p>
                <input
                    type='text'
                    className='input'
                    {...register('bairro')}
                ></input>
            </div>
            <div className="input-container">
                <p className='input-p'>Número: </p>
                <input
                    type='text'
                    className='input'
                    {...register('numero')}
                ></input>
            </div>
        </form>
    </section>
    </>
  )
}

export default Cliente