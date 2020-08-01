import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(objetoDoVideo){
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo),
    })
    .then(async (resposta) => {
        if(resposta.ok){
            const resp = await resposta.json();
            return resp;
        }

        throw new Error('Não foi possível cadastrar os dados');
    });
}

export default {
    create,
};