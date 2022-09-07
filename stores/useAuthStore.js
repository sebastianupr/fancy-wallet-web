import create from "zustand"
import { persist } from "zustand/middleware"

const useAuthStore = create(
  persist(
    (set) => ({
      currentUser: null,
      token: null,
      setCurrentUser: (currentUser) => set({ currentUser }),
      setToken: (token) => set({ token })
    }),
    { name: "auth-storage" }
  )
)

export default useAuthStore
