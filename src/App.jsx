import PageLoader from './components/PageLoader'
import GlobalBackground from './components/GlobalBackground'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import PageTransition from './components/PageTransition'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import FeaturedWork from './components/FeaturedWork'
import Engineering from './components/Engineering'
import Skills from './components/Skills'
import AboutTools from './components/AboutTools'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingDock from './components/FloatingDock'

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] selection:bg-[#A11D33] selection:text-white relative overflow-x-hidden">
      <PageLoader />
      <GlobalBackground />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="relative z-10">
        <PageTransition><Hero /></PageTransition>
        <PageTransition><Services /></PageTransition>
        <PageTransition><Process /></PageTransition>
        <PageTransition><FeaturedWork /></PageTransition>
        <PageTransition><Engineering /></PageTransition>
        <PageTransition><Skills /></PageTransition>
        <PageTransition><AboutTools /></PageTransition>
        <PageTransition><Education /></PageTransition>
        <PageTransition><Contact /></PageTransition>
      </main>
      <FloatingDock />
      <Footer />
    </div>
  )
}
