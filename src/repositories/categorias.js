import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAll(){
    return fetch(`${URL_CATEGORIES}`)
    .then(async (resposta) => {
        if(resposta.ok){
            const resp = await resposta.json();
            return resp;
        }

        throw new Error('Não foi possível pegar os dados');
    });
}

function getAllVideos(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (resposta) => {
        if(resposta.ok){
            const resp = await resposta.json();
            return resp;
        }

        throw new Error('Não foi possível pegar os dados');
    });
}

export default {
    getAll,
    getAllVideos,
};