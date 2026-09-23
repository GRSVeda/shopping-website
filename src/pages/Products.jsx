import { useState } from "react"
import ProductCard from "../components/ProductCard"
import products from "../data/products"

function Products() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [priceRange, setPriceRange] = useState("All")
  const [rating, setRating] = useState("All")
  const [availability, setAvailability] = useState("All")
  const [sort, setSort] = useState("Featured")

  const categories = [
    "All",
    "Electronics",
    "Fashion Men",
    "Fashion Women",
    "Footwear",
    "Home & Living",
    "Beauty",
    "Accessories"
  ]

  const filteredProducts = products
    .filter((product) => {
      // Search filter
      const searchText = search.toLowerCase()

      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText)

      // Category filter
      const matchesCategory =
        category === "All" ||
        product.category === category

      // Price filter
      let matchesPrice = true

      if (priceRange === "0-1000") {
        matchesPrice =
          product.salePrice >= 0 &&
          product.salePrice <= 1000
      }

      if (priceRange === "1000-5000") {
        matchesPrice =
          product.salePrice > 1000 &&
          product.salePrice <= 5000
      }

      if (priceRange === "5000-10000") {
        matchesPrice =
          product.salePrice > 5000 &&
          product.salePrice <= 10000
      }

      if (priceRange === "10000+") {
        matchesPrice = product.salePrice > 10000
      }

      // Rating filter
      let matchesRating = true

      if (rating === "5") {
        matchesRating = product.rating === 5
      }

      if (rating === "4") {
        matchesRating = product.rating >= 4
      }

      if (rating === "3") {
        matchesRating = product.rating >= 3
      }

      // Availability filter
      let matchesAvailability = true

      if (availability === "In Stock") {
        matchesAvailability = product.stock > 0
      }

      if (availability === "Out of Stock") {
        matchesAvailability = product.stock === 0
      }

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesRating &&
        matchesAvailability
      )
    })
    .sort((a, b) => {
      // Sorting
      if (sort === "Price Low to High") {
        return a.salePrice - b.salePrice
      }

      if (sort === "Price High to Low") {
        return b.salePrice - a.salePrice
      }

      if (sort === "Newest") {
        return (
          new Date(b.createdAt) -
          new Date(a.createdAt)
        )
      }

      if (sort === "Rating") {
        return b.rating - a.rating
      }

      if (sort === "Popularity") {
        return b.popularity - a.popularity
      }

      // Featured
      return b.popularity - a.popularity
    })

  return (
    <main className="products-page">

      {/* Page Header */}
      <div className="products-page-header">
        <h1>All Products</h1>
        <p>
          Explore our collection of products
        </p>
      </div>

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />
      </div>

      {/* Filters */}
      <div className="filters-container">

        {/* Category */}
        <div className="filter-group">
          <label>Category</label>

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
          >
            {categories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="filter-group">
          <label>Price</label>

          <select
            value={priceRange}
            onChange={(event) =>
              setPriceRange(event.target.value)
            }
          >
            <option value="All">
              All Prices
            </option>

            <option value="0-1000">
              ₹0 - ₹1,000
            </option>

            <option value="1000-5000">
              ₹1,000 - ₹5,000
            </option>

            <option value="5000-10000">
              ₹5,000 - ₹10,000
            </option>

            <option value="10000+">
              ₹10,000+
            </option>
          </select>
        </div>

        {/* Rating */}
        <div className="filter-group">
          <label>Rating</label>

          <select
            value={rating}
            onChange={(event) =>
              setRating(event.target.value)
            }
          >
            <option value="All">
              All Ratings
            </option>

            <option value="5">
              5 Stars
            </option>

            <option value="4">
              4 Stars & Above
            </option>

            <option value="3">
              3 Stars & Above
            </option>
          </select>
        </div>

        {/* Availability */}
        <div className="filter-group">
          <label>Availability</label>

          <select
            value={availability}
            onChange={(event) =>
              setAvailability(event.target.value)
            }
          >
            <option value="All">
              All
            </option>

            <option value="In Stock">
              In Stock
            </option>

            <option value="Out of Stock">
              Out of Stock
            </option>
          </select>
        </div>

        {/* Sorting */}
        <div className="filter-group">
          <label>Sort By</label>

          <select
            value={sort}
            onChange={(event) =>
              setSort(event.target.value)
            }
          >
            <option value="Featured">
              Featured
            </option>

            <option value="Price Low to High">
              Price: Low to High
            </option>

            <option value="Price High to Low">
              Price: High to Low
            </option>

            <option value="Newest">
              Newest
            </option>

            <option value="Rating">
              Rating
            </option>

            <option value="Popularity">
              Popularity
            </option>
          </select>
        </div>

      </div>

      {/* Result Count */}
      <div className="results-info">
        <p>
          {filteredProducts.length} products found
        </p>
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="no-products">
          <h2>No products found</h2>

          <p>
            Try changing your search or filters.
          </p>
        </div>
      )}

    </main>
  )
}

export default Products