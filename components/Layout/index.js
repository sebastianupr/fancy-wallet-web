const Layout = ({ children }) => {
  return (
    <main className="bg-background min-h-screen min-w-full">{children}</main>
  )
}

// This layout is for per-page layouts, see the next doc for more info: https://nextjs.org/docs/basic-features/layouts
export const getLayout = function (page) {
  return <Layout>{page}</Layout>
}

export default Layout
