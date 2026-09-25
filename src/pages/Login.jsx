import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  })

  const [error, setError] = useState("")

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setError("")

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.")
      return
    }

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    )

    if (!savedUser) {
      setError(
        "No account found. Please register first."
      )
      return
    }

    if (
      savedUser.email !== formData.email ||
      savedUser.password !== formData.password
    ) {
      setError("Invalid email or password.")
      return
    }

    login({
  name: savedUser.name,
  email: savedUser.email,
  phone: savedUser.phone
})

    navigate("/")
  }

  return (
    <main className="auth-page">

      <div className="auth-container">

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to your account
        </p>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

          </div>

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />

          </div>

          <label className="remember-me">

            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />

            Remember Me

          </label>

          {error && (
            <p className="auth-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="auth-button"
          >
            Login
          </button>

        </form>

        <p className="auth-link">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>

    </main>
  )
}

export default Login