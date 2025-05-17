import React from 'react'
import TopBar from "./layout/TopBar"
import Header from "./layout/Header"
import Hero from "./pages/Home/components/Hero"
import Featured from "./pages/Home/components/FeaturedProducts"
import NewDrops from './pages/Home/components/NewDrops'

const App = () => {
  return (
    <div>
      <TopBar/>
      <Header/>
      <Hero/>
      <Featured/>
      <NewDrops/>
    </div>
  )
}

export default App
