function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>ShopEasy</h2>
      </div>

      <div className="nav-links">

        <a href="/">Home</a>

        <a href="/products">Products</a>

        <a href="/cart">Cart</a>

        <a href="/login">Login</a>

      </div>

    </nav>
  )
}

export default Navbar