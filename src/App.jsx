import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Wishlist from "./pages/Wishlist"
import Checkout from "./pages/Checkout"
import OrderConfirmation from "./pages/OrderConfirmation"
import Register from "./pages/Register"
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
        <Route
  path="/wishlist"
  element={<Wishlist />}
/>
    <Route
  path="/checkout"
  element={<Checkout />}
/>
    <Route
  path="/order-confirmation"
  element={<OrderConfirmation />}
/>
    <Route
  path="/register"
  element={<Register />}
/>
      </Routes>

    </BrowserRouter>
  )
}

export default App