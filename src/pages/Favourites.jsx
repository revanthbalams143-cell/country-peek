import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import CountryCard from '../components/CountryCard'

function Favourites() {
  const { favourites } = useFavourites()

  if (!favourites.length) {
    return (
      <div className="favourites-page">
        <h2>No favourites yet</h2>
        <p>You haven’t saved any countries. Go back and save your first one.</p>
        <Link to="/" className="theme-toggle">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="favourites-page">
      <h2>Your Favourites</h2>
      <div className="cards-grid">
        {favourites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )
}

export default Favourites
