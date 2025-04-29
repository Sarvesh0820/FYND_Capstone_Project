// @ts-nocheck
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Suspense } from "react"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import OrderPlace from "./pages/OrderPlace"
import Collections from "./pages/Collections"
import Product from "./pages/Product"
import Orders from "./pages/Orders"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import SearchBar from "./components/SearchBar"
import { ToastContainer } from 'react-toastify';

function App() {
  

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <ToastContainer/>
          <Header />
          <SearchBar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/collections" element={<Collections/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/product/:productId" element={<Product/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/place-order" element={<OrderPlace />}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
           
          </Routes>
          <ScrollToTop/>
          <Footer/>
      </div>
      </Suspense>
    </>
  )
}

export default App
