import { Link } from "react-router-dom"

import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"
import { useAuth } from "../context/AuthContext"

function Navbar() {
  const { getCartCount } = useCart()
  const { getWishlistCount } = useWishlist()
  const { logout, isLoggedIn } = useAuth()

  const cartCount = getCartCount()
  const wishlistCount = getWishlistCount()

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <h2>ShopEasy</h2>
        </Link>
      </div>

      {/* Navigation */}
      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/cart">
          Cart

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>

        <Link to="/wishlist">
          Wishlist

          {wishlistCount > 0 && (
            <span className="cart-count">
              {wishlistCount}
            </span>
          )}
        </Link>

        {/* Login/Register OR Account/Logout */}
        {isLoggedIn ? (
          <>
            <Link to="/account">
              Account
            </Link>

            <button
              onClick={logout}
              className="logout-button"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
            <Link to="/categories">
  Categories
</Link>
      <Link to="/about">
  About
</Link>

<Link to="/contact">
  Contact
</Link>
          </>
        )}

      </div>

    </nav>
  )
}

export default Navbar