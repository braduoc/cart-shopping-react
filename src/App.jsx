import { Navigate, Route, Routes } from "react-router"
import { Cart } from "./views/Cart"
import { ContactUs } from "./views/ContactUs"
import { MyOrders } from "./views/MyOrders"
import { Home } from "./views/Home"
import { Navbar } from "./components/Navbar"
import { ProductsProvider } from "./context/ProductsProvider"
import { CartProvider } from "./context/CartProvider"
import { CartPayProvider } from "./context/CartPayProvider"



function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <CartPayProvider>
            <Navbar></Navbar>
            <Routes>
              <Route path="/carrito" element={<Cart></Cart>}></Route>
              <Route path="/contactanos" element={<ContactUs></ContactUs>}></Route>
              <Route path="/miscompras" element={<MyOrders></MyOrders>}></Route>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
            </Routes>
          </CartPayProvider>
        </CartProvider>
      </ProductsProvider>
    </>
  )
}

export default App
