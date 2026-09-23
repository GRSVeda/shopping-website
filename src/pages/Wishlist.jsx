import { Link } from "react-router-dom"
import { useWishlist } from "../context/WishlistContext"
import { useCart } from "../context/CartContext"

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist
  } = useWishlist()

  const { addToCart } = useCart()

  const handleAddToCart = (product) => {
    if (product.stock > 0) {
      addToCart(product, 1)
      alert("Product added to cart!")
    }
  }

  if (wishlist.length === 0) {
    return (
      <main className="empty-wishlist">

        <h1>Your Wishlist is Empty</h1>

        <p>
          Save products you love and find them here later.
        </p>

        <Link
          to="/products"
          className="continue-shopping"
        >
          Explore Products
        </Link>

      </main>
    )
  }

  return (
    <main className="wishlist-page">

      <div className="wishlist-header">
        <h1>My Wishlist</h1>

        <p>
          {wishlist.length}{" "}
          {wishlist.length === 1
            ? "product"
            : "products"}{" "}
          saved
        </p>
      </div>

      <div className="wishlist-grid">

        {wishlist.map((product) => (
          <div
            className="wishlist-card"
            key={product.id}
          >

            {/* Product Image */}

            <Link
              to={`/products/${product.id}`}
              className="wishlist-image"
            >
              <img
                src={product.image}
                alt={product.name}
              />
            </Link>

            {/* Product Information */}

            <div className="wishlist-info">

              <p className="product-category">
                {product.category}
              </p>

              <Link
                to={`/products/${product.id}`}
                className="product-name-link"
              >
                <h2>{product.name}</h2>
              </Link>

              <div className="product-rating">
                <span>
                  ⭐ {product.rating}
                </span>

                <span>
                  ({product.reviews} reviews)
                </span>
              </div>

              <div className="product-price-section">

                <span className="sale-price">
                  ₹{product.salePrice}
                </span>

                <span className="original-price">
                  ₹{product.originalPrice}
                </span>

                <span className="discount">
                  {product.discount}% OFF
                </span>

              </div>

              {/* Buttons */}

              <div className="wishlist-actions">

                <button
                  className="add-to-cart-button"
                  onClick={() =>
                    handleAddToCart(product)
                  }
                  disabled={product.stock === 0}
                >
                  {product.stock > 0
                    ? "Add to Cart"
                    : "Out of Stock"}
                </button>

                <button
                  className="remove-button"
                  onClick={() =>
                    removeFromWishlist(product.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </main>
  )
}

export default Wishlist