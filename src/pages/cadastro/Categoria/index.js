import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

export default function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: 'red'
    };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value){
        setValues({
            ...values,
            [key]: value
        });
    }

    function handleChange(e){
        setValue(e.target.getAttribute('name'), e.target.value)
    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(e){
                e.preventDefault();
                setCategorias([
                    ...categorias, 
                    values
                ]);
                setValues(valoresIniciais);
            }}>
                <FormField
                    label='Nome da categoria:'
                    type='text' 
                    name='nome'
                    value={values.nome}
                    onChange={handleChange}
                />

                <div>
                    <label>Descrição:
                        <textarea
                        type='text'
                        name='descricao'
                        value={values.descricao}
                        onChange={handleChange}
                        />
                    </label>
                </div>

                <FormField
                    label='Cor:'
                    type='cor' 
                    name='cor'
                    value={values.cor}
                    onChange={handleChange}
                />
                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return(
                        <li key={index}>{categoria.nome}</li>
                    )
                })}
            </ul>

            <Link to='/'>
                Ir para Home
            </Link>
        </PageDefault>
    )
}