import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

//exbindo dados do filme na tela
const listMovie = filme => {
    let title = document.getElementById('movie_title')
    let description = document.getElementById('movie_description')
    let image = document.getElementById('movie_image')

    //Exibir mensagem caso o filme não esteja disponível
    if (filme.original_title != undefined || filme.description != undefined) {
        title.innerHTML = filme.original_title
        description.innerHTML = filme.overview
        image.src = `${IMG_URL}/${filme.backdrop_path}`
    } else {
        title.innerHTML = 'Ops...'
        description.innerHTML = 'Esse filme não foi encontrado!'
        image.src = './assets/sad.png'
    }
}

//buscando dados do filme
const getMovie = async () => {
    let id = Math.floor(Math.random() * 1000 + 1)
    const dados = await fetch(`${BASE_URL}${id}?api_key=${API_KEY}`)
    const filme = await dados.json()

    listMovie(filme)
}

//monitorar o evento de clique no botão, e disparar a função ao clicar
let click = document
    .getElementById('btn-movie')
    .addEventListener('click', getMovie, true)
if (click) getMovie()
