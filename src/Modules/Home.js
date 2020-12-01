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

// Home de Libros
const Libros = () => {
    const [libros, setLibros] = useState( [])
  
    function getLibros() {
      fetch('http://localhost:8181/api')
        .then(response => response.json())
        .then(libros => setLibros(libros))
        .catch(err => console.log(err.message))
    }
  
    useEffect(() => {
      getLibros()
    }, [])
  
    

    return (  
        <ul>
          {libros.map((libro, i) => <li key={libro.isbn}><Link to={"/"+libro.isbn}>{libro.title}</Link></li>)}        
        </ul>
      
    )
  }

  const Home = () => (
        <div className="App">
          <header className="App-header">          
            <h1 className="App-title">Libros</h1>
          </header>
          <BrowserRouter>
          <Switch>
            <Route exact path="/"><Libros/></Route>
            <Route path="/:isbn"><Libro/></Route>
          </Switch>        
          </BrowserRouter>
        </div>
      );
export default Home;