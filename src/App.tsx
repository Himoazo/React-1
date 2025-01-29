import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import HeroComponent from './components/HeroComponent';
import MoviesComponent from './components/MoviesComponent'

function App() {
  const movies = [ //Film array
    {
      id: 0,
      title: "Inception",
      genre: "Sci-Fi",
      duration: 148,
      watched: true
    },
    {
      id: 1,
      title: "The Dark Knight",
      genre: "Action",
      duration: 152,
      watched: false
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Sci-Fi",
      duration: 169,
      watched: true
    },
    {
      id: 3,
      title: "Parasite",
      genre: "Thriller",
      duration: 132,
      watched: false
    }
  ];


  return (
    <>
      <header>
        <HeaderComponent siteTitle={"Film listan"} />
      </header>
      <main>
        <HeroComponent />
        <section className='cardGrid'>
          {movies.map((film, id) => ( // Loopar genom filmarray 
            <MoviesComponent id={film.id} title={film.title} genre={film.genre}
              duration={film.duration} watched={film.watched} key={id} />
          ))}
        </section>
      </main>
    
      <footer>
        <FooterComponent />
      </footer>
      
    </>
  )
}

export default App
