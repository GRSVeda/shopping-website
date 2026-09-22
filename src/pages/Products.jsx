import { useState } from "react"
import ProductCard from "../components/ProductCard"
import products from "../data/products"

function Products() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  const categories = ["All", "Electronics", "Fashion", "Home"]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === "All" || product.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <main className="products-page">

      <div className="products-page-header">
        <h1>All Products</h1>

        <p>
          Explore our collection of products
        </p>
      </div>


      {/* Search */}

      <div className="search-container">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

      </div>


      {/* Categories */}

      <div className="category-filters">

        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active-category" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}

      </div>


      {/* Products */}

      {filteredProducts.length > 0 ? (

        <div className="products-grid">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      ) : (

        <div className="no-products">
          <h2>No products found</h2>

          <p>
            Try a different search or category.
          </p>
        </div>

      )}

    </main>
  )
}

export default Products