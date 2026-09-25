import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser")

    return savedUser
      ? JSON.parse(savedUser)
      : null
  })

  const login = (userData) => {
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(userData)
    )

    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem("loggedInUser")
    setUser(null)
  }

  const isLoggedIn = user !== null

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthProvider