import { useParams, useNavigate } from 'react-router-dom'
import useCountry from '../hooks/useCountry'

function CountryPage() {
  const { code } = useParams()
  const navigate = useNavigate()
  const { country, loading, error } = useCountry(code)

  if (loading) {
    return <p className="page-status">Loading country details...</p>
  }

  if (error) {
    return <p className="page-status page-status--error">{error}</p>
  }

  if (!country) {
    return <p className="page-status">Country data not available.</p>
  }

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    borders,
  } = country

  const languageNames = languages ? Object.values(languages) : []
  const currencyNames = currencies
    ? Object.values(currencies).map((cur) => cur.name)
    : []

  return (
    <div className="country-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      <div className="country-page__layout">
        <img
          className="country-page__flag"
          src={flags?.svg}
          alt={flags?.alt || `Flag of ${name?.common}`}
        />

        <div className="country-page__info">
          <h2 className="country-page__name">{name?.common ?? 'Unknown'}</h2>
          <p className="country-page__official">{name?.official ?? 'No official name'}</p>

          <div className="country-page__details">
            <div>
              <p>
                <strong>Population:</strong> {population?.toLocaleString() ?? 'N/A'}
              </p>
              <p>
                <strong>Region:</strong> {region ?? 'N/A'}
              </p>
              <p>
                <strong>Subregion:</strong> {subregion ?? 'N/A'}
              </p>
              <p>
                <strong>Capital:</strong> {capital?.[0] ?? 'N/A'}
              </p>
            </div>

            <div>
              <p>
                <strong>Languages:</strong> {languageNames.length ? languageNames.join(', ') : 'N/A'}
              </p>
              <p>
                <strong>Currencies:</strong> {currencyNames.length ? currencyNames.join(', ') : 'N/A'}
              </p>
            </div>
          </div>

          {borders && borders.length > 0 && (
            <div className="border-region">
              <h4>Bordering Countries</h4>
              <div className="border-list">
                {borders.map((borderCode) => (
                  <span key={borderCode} className="border-badge">
                    {borderCode}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountryPage
