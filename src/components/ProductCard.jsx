import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <Link
        to={`/products/${product.id}`}
        className="product-image-link"
      >
        <img
          src={product.image}
          alt={product.name}
        />
      </Link>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="product-name-link"
        >
          <h3>{product.name}</h3>
        </Link>

        <p className="product-price">
          ₹{product.price}
        </p>

        <button>
          Add to Cart
        </button>

      </div>

    </div>
  )
}

export default ProductCard