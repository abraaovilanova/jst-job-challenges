import React, {useState, useEffect} from 'react'
import './App.css'
import { commerce } from './lib/commerce'
import Dropdown from './Components/Dropdown/Dropdown'
import logo from './assets/logo_justa.png'

function App() {

  const [products, setProducts] = useState([])
  const [value, setValue] = useState(null)

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

useEffect(() => {
  fetchProducts()                                     
  },[])

  return (
      <>
         <header>
              <img src={logo} alt="Justa Pagamentos" height="50px" />
              <h1> Bem vindo a Justa</h1>
        </header>
        
        <main>
            <div className="boxContainer">
              <Dropdown
              opcoes={products} 
              prompt="Escolha um produto..."
              value={value}
              onChange={val => setValue(val)}
              />
          </div>
        </main>
    </>  
  )
}

export default App;
