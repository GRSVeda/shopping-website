import { createContext, useContext, useState } from "react"

const WishlistContext = createContext()

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([])

  const addToWishlist = (product) => {
    setWishlist((currentWishlist) => {
      const alreadyExists = currentWishlist.some(
        (item) => item.id === product.id
      )

      if (alreadyExists) {
        return currentWishlist
      }

      return [...currentWishlist, product]
    })
  }

  const removeFromWishlist = (productId) => {
    setWishlist((currentWishlist) =>
      currentWishlist.filter(
        (item) => item.id !== productId
      )
    )
  }

  const isInWishlist = (productId) => {
    return wishlist.some(
      (item) => item.id === productId
    )
  }

  const getWishlistCount = () => {
    return wishlist.length
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        getWishlistCount
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  return useContext(WishlistContext)
}

export default WishlistProvider