
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import Testinomails from './components/features/testinomials/Testinomails'
import CTA from './components/cta/CTA'
import Footer from './components/footer/Footer'
function App() {


  return (
    <div className="App">
       <Navbar/>
       <Hero/>
     <Features/>
     <Testinomails/>
     <CTA/>
     <Footer/>
    </div>
  )
}

export default App
