import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">
          <h2>ShopEasy</h2>
        </Link>
      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/cart">
          Cart
        </Link>

        <Link to="/login">
          Login
        </Link>

      </div>

    </nav>
  )
}

export default Navbar