import SignInButton from "../components/buttons/SignInButton"

import useFirebaseAuth from "../hooks/useFirebaseAuth"

import styles from "../styles/pages/SignInPage.module.css"

export default function SignInPage () {
  const { signIn } = useFirebaseAuth()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="mb-10">
          <h1 className="font-bold text-6xl text-center mb-3">
            Welcome to Fancy wallet
          </h1>
          <h1 className="font-semibold text-3xl text-center">
            The best wallet of the market
          </h1>
        </div>

        <SignInButton onClick={signIn} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/sebastianupr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Sebastián Urbano 👨🏻‍💻
        </a>
      </footer>
    </div>
  )
}
