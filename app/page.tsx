import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Main from './components/Main'
import Suggest from './components/Suggest'

export default function Home() {
  return (
    <main >
     
      <NavBar />
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-16 max-w-screen-xl min-h-[calc(100vh-3rem)]">
      <Intro />
      <div className='px-12'>
        <Main />
        <Suggest/>
      </div>
        
      </div>
      <Footer />
    </main>
  )
}
