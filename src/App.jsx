import './App.css'
import AvaliableProducts from './components/AvaliableProducts'
import Bannar from './components/Bannar'
import Navbar from './components/Navbar'
import Rating from './components/Rating'
import Cart from './components/Cart'
import { Suspense, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Ready from './components/Ready'
import Footer from './components/Footer'


const fetchProducts = async () => {
  const res = await fetch('/products.json')
  return res.json()
}
const productsPromise = fetchProducts()

function App() {
  const [toggle, setToggle] = useState(true)
  const [purchasedProduct, setPurchasedProduct] = useState([])

  const handleSelectProducts = () => {
    setToggle(true)
  }

  const handleSelectCart = () => {
    setToggle(false)
  }

  const removeProduct = (p) => {
    const filteredData = purchasedProduct.filter(pro => pro.id !== p.id)
    toast('Delete Successfull')
    setPurchasedProduct(filteredData)
  }


  return (
    <>
      <Navbar purchasedProduct={purchasedProduct}></Navbar>
      <Bannar></Bannar>
      <Rating></Rating>

      <div className='py-10'>
        <div className='flex flex-col items-center space-y-1'>
          <h2 className='text-3xl font-bold'>Premium Digital Tools</h2>
          <p className='text-center text-xs text-gray-400'>Choose from our curated collection of premium digital products designedto <br /> boost your productivity and creativity.</p>
        </div>

        <div className='flex justify-center pt-5'>
          <button onClick={handleSelectProducts} className={`${toggle === true ? 'bg-blue-800 text-white' : 'border border-gray-400 '} px-5 py-2 rounded-l-3xl text-blue-800 border border-gray-200 border-r-0 cursor-pointer`}>Products</button>

          <button onClick={handleSelectCart} className={`${toggle === false ? 'bg-blue-700 text-white' : ''} px-5 py-2 rounded-r-3xl text-blue-800 border border-gray-200 border-l-0 cursor-pointer`}>Cart ({purchasedProduct.length})</button>
        </div>
      </div>



      {
        toggle === true ? <Suspense fallback={<h1 className='text-center text-8xl text-blue-700'>Loading...</h1>}>
          <AvaliableProducts setPurchasedProduct={setPurchasedProduct} purchasedProduct={purchasedProduct} productsPromise={productsPromise}></AvaliableProducts>
        </Suspense> : <Cart setPurchasedProduct = {setPurchasedProduct} removeProduct={removeProduct} purchasedProduct={purchasedProduct}></Cart>
      }

      <Steps></Steps>

      <Pricing></Pricing>

      <Ready></Ready>

      <Footer></Footer>

      <ToastContainer></ToastContainer>

    </>
  )
}

export default App
