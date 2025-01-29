//Filmens data-mall
interface MoviesProp {
    id: number,
    title: string,
    genre: string,
    duration: number,
    watched: boolean
}

const MoviesComponent = ({title, genre, duration, watched} : MoviesProp) => { //Tar emoit film property
  return (
    // Skriver ut film propery object till HTML taggar
    <div style={{border: '1px solid #ddd', borderRadius: '8px', padding: '16px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '220px', margin: '10px', backgroundColor: '#fff' }}>
      <h2 style={{ marginBottom: '8px' }}>{title}</h2>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Längd:</strong> {duration}</p>
      <p><strong>Sedd:</strong> {watched ? "Ja" : "Inte än"}</p>
    </div>
  )
}

export default MoviesComponent