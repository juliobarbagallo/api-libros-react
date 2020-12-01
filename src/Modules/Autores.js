import React, { useState,useEffect } from 'react';
import { Switch,Route,Link,useParams, Router, BrowserRouter } from 'react-router-dom'


const Libro = () => {
  const [libro, setLibro] = useState([])
  const libros = [];
  let params = useParams();
  const getLibro = () => {
    fetch('http://localhost:8181/api/'+params.isbn)
      .then(response => response.json())
      .then(libro => {libros.push(libro);setLibro(libros);})
      .catch(err => console.log(err.message))
  }

  useEffect(() => { getLibro();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
}, [])
      return (  
      <section>
          {libro.map((libro, i) =>
          <>
          <h1>{ libro.isbn } - {libro.title}</h1>
          <p>Cantidad de paginas: {libro.pageCount}</p> 
          <p>Pais: {libro.country}</p> 
          <p><Link to="/">Regresar a la home</Link></p>
          </>
        )} 
      </section>
    
  )
}

// Home de Autores
const PorAutores = () => {
    const [autores, setAutores] = useState( [])
  
    function getAutores() {
      fetch('http://localhost:8181/api')
        .then(response => response.json())
        .then(autores => setAutores(autores))
        .catch(err => console.log(err.message))
    }
  
    useEffect(() => {
      getAutores()
    }, [])
  
    

    return (  
        <ul>
          { autores.map( (autor, i) => <> {autor.map( aut, i ) => <li key={i}>{aut}</li>}</> }
        </ul>
    )
  }

  const Autores = () => (
        <div className="App">
          <header className="App-header">          
            <h1 className="App-title">Autores</h1>
          </header>
          <BrowserRouter>
          <Switch>
            <Route exact path="/autores"><PorAutores/></Route>
            <Route path="/autores:autor"><Libro/></Route>
          </Switch>        
          </BrowserRouter>
        </div>
      );
export default Autores;