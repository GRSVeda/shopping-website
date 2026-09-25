import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || []

    setOrders(savedOrders.reverse())
  }, [])

  if (orders.length === 0) {
    return (
      <div className="orders-page">
        <div className="orders-container">

          <h1>My Orders</h1>

          <div className="empty-orders">
            <h2>No orders yet</h2>

            <p>
              You haven't placed any orders yet.
            </p>

            <Link
              to="/products"
              className="orders-shop-button"
            >
              Start Shopping
            </Link>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div className="orders-page">

      <div className="orders-container">

        <h1>My Orders</h1>

        <div className="orders-list">

          {orders.map((order) => (

            <div
              className="order-card"
              key={order.orderId}
            >

              {/* Order Header */}
              <div className="order-header">

                <div>
                  <p>
                    <strong>Order ID:</strong>{" "}
                    {order.orderId}
                  </p>

                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(
                      order.orderDate
                    ).toLocaleDateString("en-IN")}
                  </p>
                </div>

                <div className="order-status">
                  {order.status}
                </div>

              </div>

              {/* Products */}
              <div className="order-products">

                {order.products.map((product) => (

                  <div
                    className="order-product"
                    key={product.id}
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <div className="order-product-info">

                      <h3>{product.name}</h3>

                      <p>
                        Quantity: {product.quantity}
                      </p>

                      <p>
                        Price: ₹{product.salePrice}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

              {/* Order Summary */}
              <div className="order-summary">

                <p>
                  <strong>Subtotal:</strong>{" "}
                  ₹{order.subtotal}
                </p>

                <p>
                  <strong>Shipping:</strong>{" "}
                  ₹{order.shipping}
                </p>

                <p>
                  <strong>Tax:</strong>{" "}
                  ₹{order.tax.toFixed(2)}
                </p>

                <p>
                  <strong>Total:</strong>{" "}
                  ₹{order.total.toFixed(2)}
                </p>

                <p>
                  <strong>Payment:</strong>{" "}
                  {order.paymentMethod}
                </p>

                <p>
                  <strong>Payment Status:</strong>{" "}
                  {order.paymentStatus}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Orders