import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setError("")
    setSuccess("")

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill all fields.")
      return
    }

    if (formData.password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      )
      return
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError("Passwords do not match.")
      return
    }

    const existingUser =
      JSON.parse(
        localStorage.getItem("user")
      )

    if (
      existingUser &&
      existingUser.email === formData.email
    ) {
      setError(
        "An account with this email already exists."
      )
      return
    }

    const user = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password
    }

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    )

    setSuccess(
      "Registration successful! Redirecting to login..."
    )

    setTimeout(() => {
      navigate("/login")
    }, 1000)
  }

  return (
    <main className="auth-page">

      <div className="auth-container">

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Register to start shopping
        </p>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

          </div>

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

            <label>Mobile Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your mobile number"
            />

          </div>

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />

          </div>

          <div className="form-group">

            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
            />

          </div>

          {error && (
            <p className="auth-error">
              {error}
            </p>
          )}

          {success && (
            <p className="auth-success">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="auth-button"
          >
            Create Account
          </button>

        </form>

        <p className="auth-link">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </main>
  )
}

export default Register