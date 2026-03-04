import './App.css'
import Card from './Card'

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", date: "March 10", description: "A mind-bending thriller about dreams within dreams.", link: "https://www.imdb.com/title/tt1375666/" },
  { id: 2, title: "The Dark Knight", genre: "Action", date: "March 17", description: "Batman faces his greatest enemy, the Joker.", link: "https://www.imdb.com/title/tt0468569/" },
  { id: 3, title: "Interstellar", genre: "Sci-Fi", date: "March 24", description: "Astronauts travel through a wormhole to save humanity.", link: "https://www.imdb.com/title/tt0816692/" },
  { id: 4, title: "Get Out", genre: "Horror", date: "March 31", description: "A chilling social thriller with a huge twist.", link: "https://www.imdb.com/title/tt5052448/" },
  { id: 5, title: "Spider-Man: Into the Spider-Verse", genre: "Animation", date: "April 7", description: "Miles Morales becomes the ultimate Spider-Man.", link: "https://www.imdb.com/title/tt4633694/" },
  { id: 6, title: "The Shawshank Redemption", genre: "Drama", date: "April 14", description: "Two imprisoned men bond over years in prison.", link: "https://www.imdb.com/title/tt0111161/" },
  { id: 7, title: "Parasite", genre: "Thriller", date: "April 21", description: "A poor family schemes to become employed by a wealthy family.", link: "https://www.imdb.com/title/tt6751668/" },
  { id: 8, title: "The Lion King", genre: "Animation", date: "April 28", description: "A young lion prince flees his kingdom after his father's death.", link: "https://www.imdb.com/title/tt0110357/" },
  { id: 9, title: "Knives Out", genre: "Mystery", date: "May 5", description: "A detective investigates the death of a wealthy novelist.", link: "https://www.imdb.com/title/tt8946378/" },
  { id: 10, title: "Everything Everywhere All at Once", genre: "Sci-Fi", date: "May 12", description: "A woman discovers she can access parallel universes.", link: "https://www.imdb.com/title/tt6710474/" },
]

function App() {
  return (
    <div>
      <h1>Movie Nights 🎬</h1>
      <div className="card-grid">
        {movies.map(movie => (
          <Card
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            date={movie.date}
            description={movie.description}
            link={movie.link}
          />
        ))}
      </div>
    </div>
  )
}

export default App