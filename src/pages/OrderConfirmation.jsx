import { Link } from "react-router-dom"

function OrderConfirmation() {
  const savedOrder = localStorage.getItem("latestOrder")

  if (!savedOrder) {
    return (
      <main className="order-confirmation-page">
        <h1>No Recent Order Found</h1>

        <p>
          We could not find your recent order details.
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

  const order = JSON.parse(savedOrder)

  const orderId =
    "ORD" + Date.now().toString().slice(-6)

  const deliveryDate = new Date()

  deliveryDate.setDate(
    deliveryDate.getDate() + 5
  )

  const estimatedDelivery =
    deliveryDate.toLocaleDateString("en-IN")

  return (
    <main className="order-confirmation-page">

      <div className="confirmation-header">

        <div className="success-icon">
          ✓
        </div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with us.
        </p>

      </div>

      <div className="order-confirmation-container">

        {/* Order Details */}

        <section className="confirmation-section">

          <h2>Order Details</h2>

          <div className="confirmation-row">
            <span>Order ID</span>
            <strong>{orderId}</strong>
          </div>

          <div className="confirmation-row">
            <span>Customer Name</span>
            <span>{order.customer.name}</span>
          </div>

          <div className="confirmation-row">
            <span>Payment Method</span>
            <span>{order.paymentMethod}</span>
          </div>

          <div className="confirmation-row">
            <span>Total Amount</span>
            <strong>
              ₹{order.total.toFixed(2)}
            </strong>
          </div>

          <div className="confirmation-row">
            <span>Order Status</span>
            <span className="order-status">
              Order Placed
            </span>
          </div>

          <div className="confirmation-row">
            <span>Estimated Delivery</span>
            <span>{estimatedDelivery}</span>
          </div>

        </section>

        {/* Delivery Address */}

        <section className="confirmation-section">

          <h2>Delivery Address</h2>

          <p>{order.customer.name}</p>

          <p>{order.customer.address}</p>

          <p>
            {order.customer.city},{" "}
            {order.customer.state}
          </p>

          <p>
            Pincode: {order.customer.pincode}
          </p>

          <p>
            Phone: {order.customer.phone}
          </p>

        </section>

        {/* Products */}

        <section className="confirmation-section">

          <h2>Ordered Products</h2>

          {order.products.map((item) => (

            <div
              className="confirmation-product"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="confirmation-product-info">

                <h3>{item.name}</h3>

                <p>
                  Quantity: {item.quantity}
                </p>

                <p>
                  ₹{item.salePrice} ×{" "}
                  {item.quantity}
                </p>

              </div>

              <strong>
                ₹
                {(
                  item.salePrice *
                  item.quantity
                ).toFixed(2)}
              </strong>

            </div>

          ))}

        </section>

        {/* Price Summary */}

        <section className="confirmation-section">

          <h2>Price Summary</h2>

          <div className="confirmation-row">
            <span>Subtotal</span>
            <span>
              ₹{order.subtotal.toFixed(2)}
            </span>
          </div>

          <div className="confirmation-row">
            <span>Shipping</span>
            <span>
              {order.shipping === 0
                ? "Free"
                : `₹${order.shipping}`}
            </span>
          </div>

          <div className="confirmation-row">
            <span>Tax</span>
            <span>
              ₹{order.tax.toFixed(2)}
            </span>
          </div>

          <hr />

          <div className="confirmation-total">
            <span>Total</span>

            <strong>
              ₹{order.total.toFixed(2)}
            </strong>
          </div>

        </section>

        <div className="confirmation-actions">

          <Link
            to="/products"
            className="continue-shopping"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="home-button"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </main>
  )
}

export default OrderConfirmation