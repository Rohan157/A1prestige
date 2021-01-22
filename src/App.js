import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Screens/Home'
import Wrecks from './Screens/Wrecks'
import Parts from './Screens/Parts'
import Services from './Screens/Services'
import Contact from './Screens/Contact'
import ProductScreen from './Screens/ProductScreen'


const App = () => {
  return (
    <>
    <Router>
      <Header />
      <main className='py-3'>
      <Route path='/' exact component={Home} />
      <Route path='/wrecks' component={Wrecks}/>
      <Route path='/parts' component={Parts}/>
      <Route path='/service' component={Services}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/wreck/:id' component={ProductScreen} />
      

      
      </main>
      <Footer />
      </Router>
    </>
  )
}

export default App
