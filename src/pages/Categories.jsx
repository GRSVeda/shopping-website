import { Link } from "react-router-dom"

const categories = [
  {
    name: "All",
    description: "Browse all products",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
  },
  {
    name: "Electronics",
    description: "Phones, headphones and gadgets",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600"
  },
  {
    name: "Fashion Men",
    description: "Fashion and clothing for men",
    image:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600"
  },
  {
    name: "Fashion Women",
    description: "Fashion and clothing for women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
  },
  {
    name: "Footwear",
    description: "Shoes and footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
  },
  {
    name: "Home & Living",
    description: "Products for your home",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
  },
  {
    name: "Beauty",
    description: "Beauty and personal care",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
  },
  {
    name: "Accessories",
    description: "Complete your style",
    image:
      "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=600"
  }
]

function Categories() {
  return (
    <main className="categories-page">

      <div className="categories-container">

        <h1>Shop by Category</h1>

        <p className="categories-subtitle">
          Explore our collection by category
        </p>

        <div className="categories-grid">

          {categories.map((category) => (

            <Link
              key={category.name}
              to={
                category.name === "All"
                  ? "/products"
                  : `/products?category=${encodeURIComponent(
                      category.name
                    )}`
              }
              className="category-card"
            >

              <img
                src={category.image}
                alt={category.name}
              />

              <div className="category-card-content">

                <h2>{category.name}</h2>

                <p>
                  {category.description}
                </p>

                <span>
                  Shop Now →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>
  )
}

export default Categories