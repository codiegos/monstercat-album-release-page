import Footer from './components/Footer'
import Home from './components/Home'
import MusicVideo from './components/MusicVideo'
import Navbar from './components/Navbar'
import Tracks from './components/Tracks'

function App (): JSX.Element {
  return (
    <>
      <Navbar />
      <Home />
      <Tracks />
      <MusicVideo />
      <Footer />
    </>
  )
}

export default App
