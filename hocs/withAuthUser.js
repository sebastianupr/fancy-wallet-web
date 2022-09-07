import { useRouter } from "next/router"
import { useEffect } from "react"

import useFirebaseAuth from "../hooks/useFirebaseAuth"

export default function withAuthUser (Page) {
  const Wrapper = (pageProps) => {
    const { user } = useFirebaseAuth()
    const router = useRouter()

    useEffect(() => {
      !user && router.push("/")
    }, [user])

    return <Page {...pageProps} />
  }

  if (Page.getLayout) {
    Wrapper.getLayout = Page.getLayout
  }

  return Wrapper
}
