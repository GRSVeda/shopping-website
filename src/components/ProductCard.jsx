import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  } = useWishlist()

  const handleAddToCart = () => {
    addToCart(product, 1)
    alert("Product added to cart!")
  }

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const wishlistActive = isInWishlist(product.id)

  return (
    <div className="product-card">

      {/* Product Image */}
      <div className="product-image-container">

        <Link
          to={`/products/${product.id}`}
          className="product-image-link"
        >
          <img
            src={product.image}
            alt={product.name}
          />
        </Link>

        {/* Wishlist Button */}
        <button
          className={
            wishlistActive
              ? "wishlist-button active"
              : "wishlist-button"
          }
          onClick={handleWishlist}
        >
          {wishlistActive ? "♥" : "♡"}
        </button>

      </div>

      <div className="product-info">

        {/* Category */}
        <p className="product-category">
          {product.category}
        </p>

        {/* Product Name */}
        <Link
          to={`/products/${product.id}`}
          className="product-name-link"
        >
          <h3>{product.name}</h3>
        </Link>

        {/* Rating */}
        <div className="product-rating">
          <span>
            ⭐ {product.rating}
          </span>

          <span>
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
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

        {/* Stock */}
        <p
          className={
            product.stock > 0
              ? "in-stock"
              : "out-of-stock"
          }
        >
          {product.stock > 0
            ? `${product.stock} in stock`
            : "Out of stock"}
        </p>

        {/* Add to Cart */}
        <button
          className="add-to-cart-button"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          {product.stock > 0
            ? "Add to Cart"
            : "Out of Stock"}
        </button>

      </div>
    </div>
  )
}

export default ProductCard