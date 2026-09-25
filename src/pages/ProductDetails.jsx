import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"

import products from "../data/products"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"

function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  const [quantity, setQuantity] = useState(1)

  const [selectedImage, setSelectedImage] = useState(
    product?.image
  )

  const { addToCart } = useCart()

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  } = useWishlist()

  if (!product) {
    return (
      <main className="no-product-page">
        <h1>Product Not Found</h1>

        <p>
          The product you are looking for does not exist.
        </p>
      </main>
    )
  }

  const productImages =
    product.images || [product.image]

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    alert("Product added to cart!")
  }

  const handleBuyNow = () => {
    addToCart(product, quantity)
    navigate("/cart")
  }

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <main className="product-details-page">

      <div className="product-details">

        {/* Image Gallery */}
        <div className="product-gallery">

          {/* Main Image */}
          <div className="product-main-image">

            <img
              src={selectedImage}
              alt={product.name}
            />

          </div>

          {/* Thumbnails */}
          <div className="product-thumbnails">

            {productImages.map((image, index) => (

              <button
                key={index}
                className={
                  selectedImage === image
                    ? "thumbnail active-thumbnail"
                    : "thumbnail"
                }
                onClick={() =>
                  setSelectedImage(image)
                }
              >

                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                />

              </button>

            ))}

          </div>

        </div>

        {/* Product Information */}
        <div className="product-details-info">

          <p className="product-details-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          {/* Rating */}
          <div className="product-details-rating">

            <span>
              ⭐ {product.rating}
            </span>

            <span>
              ({product.reviews} reviews)
            </span>

          </div>

          {/* Price */}
          <div className="product-details-price-section">

            <span className="product-details-sale-price">
              ₹{product.salePrice}
            </span>

            <span className="product-details-original-price">
              ₹{product.originalPrice}
            </span>

            <span className="product-details-discount">
              {product.discount}% OFF
            </span>

          </div>

          {/* Description */}
          <p className="product-description">
            {product.description}
          </p>

          {/* Stock */}
          <div className="product-stock">

            {product.stock > 0 ? (
              <p className="in-stock">
                ✓ {product.stock} items in stock
              </p>
            ) : (
              <p className="out-of-stock">
                ✕ Out of stock
              </p>
            )}

          </div>

          {/* Quantity */}
          {product.stock > 0 && (

            <div className="quantity-section">

              <h3>Quantity</h3>

              <div className="quantity-controls">

                <button
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                >
                  -
                </button>

                <span>{quantity}</span>

                <button
                  onClick={increaseQuantity}
                  disabled={
                    quantity === product.stock
                  }
                >
                  +
                </button>

              </div>

            </div>

          )}

          {/* Action Buttons */}
          <div className="product-action-buttons">

            <button
              className="add-to-cart-button"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.stock > 0
                ? "Add to Cart"
                : "Out of Stock"}
            </button>

            <button
              className="buy-now-button"
              onClick={handleBuyNow}
              disabled={product.stock === 0}
            >
              Buy Now
            </button>

            <button
              className={
                isInWishlist(product.id)
                  ? "details-wishlist-button active"
                  : "details-wishlist-button"
              }
              onClick={handleWishlist}
            >
              {isInWishlist(product.id)
                ? "♥ Remove from Wishlist"
                : "♡ Add to Wishlist"}
            </button>

          </div>

        </div>

      </div>

    </main>
  )
}

export default ProductDetails