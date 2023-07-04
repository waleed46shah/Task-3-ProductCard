import { useState } from 'react'
import cartIcon from './assets/icon-cart.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card-container">
        <section className="image">

        </section>
        <section className="content">
          <p className='content-subheading'>
            Perfume
          </p>
          <h1>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className='content-para'>
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of Chanel.
          </p>
          <div className="pricing">
            <h2>$149.99</h2>
            <p className="discount">$169.99</p>
          </div>
          <button className='btn'>
            <img src={cartIcon} alt="icon" />
            Add to Cart
          </button>
        </section>

      </div>
    </>
  )
}

export default App
