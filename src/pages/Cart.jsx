import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal
  } = useCart()

  if (cart.length === 0) {
    return (
      <main className="empty-cart">
        <h1>Your Cart is Empty</h1>

        <p>
          Add some products to your cart to see them here.
        </p>

        <Link
          to="/products"
          className="continue-shopping"
        >
          Continue Shopping
        </Link>
      </main>
    )
  }

  const subtotal = getCartTotal()

  const shipping = subtotal >= 1000 ? 0 : 100

  const tax = subtotal * 0.05

  const total = subtotal + shipping + tax

  return (
    <main className="cart-page">

      <h1>Your Shopping Cart</h1>

      <div className="cart-container">

        {/* Cart Items */}

        <div className="cart-items">

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">

                <h2>{item.name}</h2>

                <p>{item.category}</p>

                <h3>
                  ₹{item.salePrice}
                </h3>

              </div>

              {/* Quantity */}

              <div className="cart-quantity">

                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity - 1
                    )
                  }
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity + 1
                    )
                  }
                >
                  +
                </button>

              </div>

              {/* Item Total */}

              <div className="cart-item-total">

                <h3>
                  ₹{item.salePrice * item.quantity}
                </h3>

                <button
                  className="remove-button"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          {/* Clear Cart */}

          <button
            className="clear-cart-button"
            onClick={clearCart}
          >
            Clear Cart
          </button>

        </div>

        {/* Order Summary */}

        <div className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">

            <span>Subtotal</span>

            <span>
              ₹{subtotal.toFixed(2)}
            </span>

          </div>

          <div className="summary-row">

            <span>Shipping</span>

            <span>
              {shipping === 0
                ? "Free"
                : `₹${shipping}`}
            </span>

          </div>

          <div className="summary-row">

            <span>Tax (5%)</span>

            <span>
              ₹{tax.toFixed(2)}
            </span>

          </div>

          <hr />

          <div className="summary-total">

            <span>Total</span>

            <span>
              ₹{total.toFixed(2)}
            </span>

          </div>

          <Link
            to="/checkout"
            className="checkout-button"
          >
            Proceed to Checkout
          </Link>

        </div>

      </div>

    </main>
  )
}

export default Cart