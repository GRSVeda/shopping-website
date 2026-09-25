import { useState } from "react"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const [message, setMessage] = useState("")

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
      !formData.subject ||
      !formData.message
    ) {
      setMessage("Please fill in all fields.")
      return
    }

    setMessage(
      "Thank you! Your message has been submitted successfully."
    )

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    })
  }

  return (
    <main className="contact-page">

      <div className="contact-container">

        <h1>Contact Us</h1>

        <p className="contact-subtitle">
          Have a question? We'd love to hear from you.
        </p>

        <div className="contact-content">

          <div className="contact-info">

            <h2>Get In Touch</h2>

            <div className="contact-item">
              <h3>Email</h3>
              <p>support@shopeasy.com</p>
            </div>

            <div className="contact-item">
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="contact-item">
              <h3>Address</h3>
              <p>
                ShopEasy, Visakhapatnam,
                Andhra Pradesh, India
              </p>
            </div>

            <div className="contact-item">
              <h3>Social Media</h3>
              <p>Instagram | Facebook | Twitter</p>
            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="contact-submit-button"
            >
              Submit Message
            </button>

            {message && (
              <p className="contact-form-message">
                {message}
              </p>
            )}

          </form>

        </div>

      </div>

    </main>
  )
}

export default Contact