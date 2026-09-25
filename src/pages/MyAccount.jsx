import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function MyAccount() {
  const { user, logout, isLoggedIn } = useAuth()
  const navigate = useNavigate()

  if (!isLoggedIn) {
    return (
      <div className="account-page">
        <div className="account-container">
          <h1>My Account</h1>

          <p>
            Please login to view your account.
          </p>

          <Link
            to="/login"
            className="account-button"
          >
            Login
          </Link>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <div className="account-page">

      <div className="account-container">

        <h1>My Account</h1>

        <p className="account-welcome">
          Welcome, {user.name}!
        </p>

        {/* Profile */}
        <div className="account-section">

          <h2>Profile</h2>

          <div className="profile-details">

            <p>
              <strong>Name:</strong> {user.name}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Phone:</strong> {user.phone}
            </p>

          </div>

        </div>

        {/* Account Options */}
        <div className="account-options">

          <Link
            to="/orders"
            className="account-option"
          >
            <h3>My Orders</h3>
            <p>View your orders and order status.</p>
          </Link>

          <Link
            to="/wishlist"
            className="account-option"
          >
            <h3>Wishlist</h3>
            <p>View your saved products.</p>
          </Link>

          <Link
            to="/addresses"
            className="account-option"
          >
            <h3>Saved Addresses</h3>
            <p>Manage your delivery addresses.</p>
          </Link>

          <Link
            to="/change-password"
            className="account-option"
          >
            <h3>Change Password</h3>
            <p>Update your account password.</p>
          </Link>

        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="account-logout"
        >
          Logout
        </button>

      </div>

    </div>
  )
}

export default MyAccount