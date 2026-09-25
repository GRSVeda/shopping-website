import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react"

const WishlistContext = createContext()

function WishlistProvider({ children }) {

  // Load wishlist from localStorage
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist =
      localStorage.getItem("wishlist")

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : []
  })

  // Save wishlist whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    )
  }, [wishlist])

  const addToWishlist = (product) => {
    setWishlist((currentWishlist) => {

      const alreadyExists =
        currentWishlist.some(
          (item) => item.id === product.id
        )

      if (alreadyExists) {
        return currentWishlist
      }

      return [
        ...currentWishlist,
        product
      ]
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