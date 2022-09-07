import { useEffect } from "react"
import { useRouter } from "next/router"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from "../firebase/client"
import useAuthStore from "../stores/useAuthStore"

export default function useFirebaseAuth () {
  const authStore = useAuthStore()
  const router = useRouter()

  const signIn = async () => {
    try {
      const auth = getAuth(app)

      const provider = new GoogleAuthProvider()

      const result = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result)

      const token = credential?.accessToken
      const { user } = result

      authStore.setToken(token)
      authStore.setCurrentUser(user)

      router.push("/home")
    } catch (err) {
      console.error(err)
    }
  }

  const signOut = async () => {
    try {
      const auth = getAuth(app)

      await auth.signOut()
      authStore.setCurrentUser(null)

      router.push("/")
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const auth = getAuth(app)

    auth.onAuthStateChanged((newAuth) => {
      authStore.setCurrentUser(newAuth)
    })
  }, [])

  return { signIn, signOut, user: authStore.currentUser }
}
