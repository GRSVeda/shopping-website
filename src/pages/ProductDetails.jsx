import { useParams } from "react-router-dom"
import { useState } from "react"
import products from "../data/products"

function ProductDetails() {
  const { id } = useParams()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  const [quantity, setQuantity] = useState(1)

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

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <main className="product-details-page">

      <div className="product-details">

        {/* Product Image */}

        <div className="product-details-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>


        {/* Product Information */}

        <div className="product-details-info">

          <p className="product-details-category">
            {product.category}
          </p>

          <h1>
            {product.name}
          </h1>

          <p className="product-details-price">
            ₹{product.price}
          </p>

          <p className="product-description">
            This is a high-quality {product.name.toLowerCase()}
            designed to provide excellent value and a great
            shopping experience.
          </p>


          {/* Quantity */}

          <div className="quantity-section">

            <h3>Quantity</h3>

            <div className="quantity-controls">

              <button onClick={decreaseQuantity}>
                -
              </button>

              <span>
                {quantity}
              </span>

              <button onClick={increaseQuantity}>
                +
              </button>

            </div>

          </div>


          {/* Add To Cart */}

          <button className="add-to-cart-button">
            Add to Cart
          </button>

        </div>

      </div>

    </main>
  )
}

export default ProductDetails