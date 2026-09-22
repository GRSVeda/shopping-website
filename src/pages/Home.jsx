import ProductCard from "../components/ProductCard"
import products from "../data/products"

function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <main>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Shop Everything You Love</h1>

          <p>
            Discover quality products at great prices.
          </p>

          <button className="shop-button">
            Shop Now
          </button>
        </div>
      </section>


      {/* Categories Section */}
      <section className="categories-section">

        <h2>Shop by Category</h2>

        <div className="categories">

          <div className="category-card">
            <h3>Electronics</h3>
            <p>Latest gadgets and devices</p>
          </div>

          <div className="category-card">
            <h3>Fashion</h3>
            <p>Trendy styles for everyone</p>
          </div>

          <div className="category-card">
            <h3>Home</h3>
            <p>Products for your home</p>
          </div>

        </div>

      </section>


      {/* Featured Products */}
      <section className="products-section">

        <h2>Featured Products</h2>

        <div className="products-grid">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

    </main>
  )
}

export default Home