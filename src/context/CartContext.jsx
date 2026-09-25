import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react"

const CartContext = createContext()

function CartProvider({ children }) {

  // Load cart from localStorage when the app starts
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")

    return savedCart
      ? JSON.parse(savedCart)
      : []
  })

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )
  }, [cart])

  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {

      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      )

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity
              }
            : item
        )
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: quantity
        }
      ]
    })
  }

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    )
  }

  const updateQuantity = (productId, quantity) => {

    if (quantity < 1) {
      removeFromCart(productId)
      return
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: quantity
            }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) =>
        total + item.salePrice * item.quantity,
      0
    )
  }

  const getCartCount = () => {
    return cart.reduce(
      (count, item) =>
        count + item.quantity,
      0
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

export default CartProvider