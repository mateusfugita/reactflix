import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

export default function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: 'red',
  };
  const [categorias, setCategorias] = useState([]);

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
      const URL = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://fugitaflix.herokuapp.com/categorias';
      fetch(URL).then(async (resposta) => {
          const resp = await resposta.json();
          setCategorias([
              ...resp
          ]);
      })
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}
      >
        <FormField
          label="Nome da categoria:"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
            Cadastrar
        </Button>
      </form>

      <ul style={{ marginBottom: '20px' }}>
        {categorias.map((categoria) => (
          <li key={categoria.titulo}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/admin">
        Ir para Home
      </Link>
    </PageDefault>
  );
}
