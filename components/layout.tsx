import Alert from './alert'
import Ticker from './ticker'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <Ticker preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
