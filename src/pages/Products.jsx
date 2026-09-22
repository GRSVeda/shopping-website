import ProductCard from "../components/ProductCard"
import products from "../data/products"

function Products() {
  return (
    <main className="products-page">

      <div className="products-page-header">
        <h1>All Products</h1>
        <p>Explore our collection of products</p>
      </div>

      <div className="products-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </main>
  )
}

export default Products