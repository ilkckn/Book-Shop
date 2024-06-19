import { useState } from 'react'
import { popularBooks } from '../../../data/booksPopular.js'
import "./Filters.css"

function Filters() {
  const [filter, setFilter] = useState('all')
  const [activeButton, setActiveButton] = useState('all')

  const handleFilterChange = (category) => {
    setFilter(category)
    setActiveButton(category)
  }

  const filteredBooks = filter === 'all' ? popularBooks : popularBooks.filter(book => book.typeof === filter)

  return (
    <div className='filtersContainer'>
      <div className="filters">
        <button className={`filter-button ${activeButton === 'all' ? 'active' : ''}`}  onClick={() => handleFilterChange('all')}>All</button>
        <button className={`filter-button ${activeButton === 'romantic' ? 'active' : ''}`} onClick={() => handleFilterChange('romantic')}>Romantic</button>
        <button className={`filter-button ${activeButton === 'kids' ? 'active' : ''}`}  onClick={() => handleFilterChange('kids')}>Kids</button>
        <button className={`filter-button ${activeButton === 'fantasy' ? 'active' : ''}`}  onClick={() => handleFilterChange('fantasy')}>Fantasy</button>
        <button className={`filter-button ${activeButton === 'self-help' ? 'active' : ''}`}  onClick={() => handleFilterChange('self-help')}>Self-Help</button>
        <button  className={`filter-button ${activeButton === 'mystery' ? 'active' : ''}`}  onClick={() => handleFilterChange('mystery')}>Mystery</button>
        <button className={`filter-button ${activeButton === 'horror' ? 'active' : ''}`}  onClick={() => handleFilterChange('horror')}>Horror</button>
        <button  className={`filter-button ${activeButton === 'drama' ? 'active' : ''}`}  onClick={() => handleFilterChange('drama')}>Drama</button>
        <button  className={`filter-button ${activeButton === 'historical fiction' ? 'active' : ''}`}  onClick={() => handleFilterChange('historical fiction')}>Historical Fiction</button>
        <button  className={`filter-button ${activeButton === 'classic' ? 'active' : ''}`}  onClick={() => handleFilterChange('classic')}>Classic</button>
      </div>
      <div className="booksList">
        {filteredBooks.map(book => (
          <div key={book.title} className="book">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p className='price'>{book.price.toFixed(2)}€</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filters
