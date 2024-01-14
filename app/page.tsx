import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Main from './components/Main'

export default function Home() {
  return (
    <main>
      <NavBar />
      <Intro />
      <div className='px-12'>
        <Main />
      </div>
      <Footer />
    </main>
  )
}
