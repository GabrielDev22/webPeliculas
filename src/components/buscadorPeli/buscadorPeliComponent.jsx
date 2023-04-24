import "./buscadorPeliComponent.css";

export const BuscadorPeliComponent = () => {

   /*  const [actualizar, setActualizar] = useState(false); */

    const buscadorDePeliculas = (event) => {
        event.preventDefault();
        /* const { value } = event.target.peliculas; */
        //https://api.themoviedb.org/3/movie/550?api_key=70d53d972c4138881fc5dbb727664306`)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=70d53d972c4138881fc5dbb727664306&language=en-US&page=1&include_adult=false`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    } 



















    return(
        <div>
            <h1>Hola es el buscador de la pelicula</h1>

            <form action="" onSubmit={event => buscadorDePeliculas(event)}>
                <input type="text" name="peliculas" placeholder="Buscar una pelicula" className="inputBuscadorDePelicula"></input>
                <button className="botonDeReinicio">Buscar Pelicula</button>
            </form>
        </div>
    )
}