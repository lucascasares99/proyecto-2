import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Products } from './components/Products'
import { Carrito } from './components/Carrito'

function App() {
  const [products, setProducts] = useState([])
  const [shop, setShop] = useState([])
  const [shopPage, setShopPage] = useState(false)

  const getProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const buyProduct = (idProduct) => {
    setShop([...shop, idProduct])
  }

  if (products.length == 0) {
    return <>
      <h1>Cargando...</h1>
    </>
  }
  if (shopPage == false) {
    return (
      <>
        <h1>Fake Store</h1>
        <button disabled={shop.length == 0} onClick={() => {setShopPage(true)}}>Carrito {shop.length}</button >

          <Products products={products} buyProduct={buyProduct} />
</>
)
  } else {
    return <>
      <Carrito shop={shop} setShopPage={setShopPage} setShop={setShop} />
    </>
  }
}

export default App
