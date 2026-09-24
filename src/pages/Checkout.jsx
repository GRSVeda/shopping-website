import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useCart } from "../context/CartContext"

function Checkout() {
  const navigate = useNavigate()

  const {
    cart,
    getCartTotal,
    clearCart
  } = useCart()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  })

  const [paymentMethod, setPaymentMethod] = useState("COD")

  const [error, setError] = useState("")

  if (cart.length === 0) {
    return (
      <main className="empty-cart">
        <h1>Your Cart is Empty</h1>

        <p>
          Add products before proceeding to checkout.
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

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pincode
    ) {
      setError("Please fill all required fields.")
      return
    }

    setError("")

    const order = {
      customer: formData,
      products: cart,
      subtotal: subtotal,
      shipping: shipping,
      tax: tax,
      total: total,
      paymentMethod: paymentMethod
    }

    localStorage.setItem(
      "latestOrder",
      JSON.stringify(order)
    )

    clearCart()

    navigate("/order-confirmation")
  }

  return (
    <main className="checkout-page">

      <div className="checkout-header">
        <h1>Checkout</h1>
        <p>Complete your order</p>
      </div>

      <div className="checkout-container">

        {/* Customer Information */}

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >

          <section className="checkout-section">

            <h2>Customer Information</h2>

            <div className="form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />

            </div>

            <div className="form-group">

              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

            </div>

            <div className="form-group">

              <label>
                Mobile Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your mobile number"
              />

            </div>

          </section>

          {/* Address */}

          <section className="checkout-section">

            <h2>Delivery Address</h2>

            <div className="form-group">

              <label>
                Address
              </label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your full address"
                rows="4"
              />

            </div>

            <div className="checkout-row">

              <div className="form-group">

                <label>City</label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                />

              </div>

              <div className="form-group">

                <label>State</label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                />

              </div>

            </div>

            <div className="form-group">

              <label>
                Pincode
              </label>

              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter pincode"
              />

            </div>

          </section>

          {/* Payment */}

          <section className="checkout-section">

            <h2>Payment Method</h2>

            <div className="payment-options">

              <label>
                <input
                  type="radio"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={(event) =>
                    setPaymentMethod(event.target.value)
                  }
                />

                Cash on Delivery
              </label>

              <label>
                <input
                  type="radio"
                  value="UPI"
                  checked={paymentMethod === "UPI"}
                  onChange={(event) =>
                    setPaymentMethod(event.target.value)
                  }
                />

                UPI
              </label>

              <label>
                <input
                  type="radio"
                  value="Card"
                  checked={paymentMethod === "Card"}
                  onChange={(event) =>
                    setPaymentMethod(event.target.value)
                  }
                />

                Card
              </label>

            </div>

            <p className="payment-note">
              Payment is simulated for this project.
              No real payment will be processed.
            </p>

          </section>

          {error && (
            <p className="checkout-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="place-order-button"
          >
            Place Order
          </button>

        </form>

        {/* Order Summary */}

        <div className="checkout-summary">

          <h2>Order Summary</h2>

          {cart.map((item) => (

            <div
              className="checkout-product"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div>
                <h3>{item.name}</h3>

                <p>
                  Quantity: {item.quantity}
                </p>

                <p>
                  ₹{item.salePrice * item.quantity}
                </p>
              </div>

            </div>

          ))}

          <hr />

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
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
            <span>₹{tax.toFixed(2)}</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

        </div>

      </div>

    </main>
  )
}

export default Checkout