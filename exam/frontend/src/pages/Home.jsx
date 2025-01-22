import React from 'react'
import Hero from '../components/hero/Hero'
import Newarrivals from '../components/arrivals/Newarrivals'
import Popular from '../components/popular/Popular'

const Home = () => {
  return (
    <div>
      <Hero />
      <Newarrivals />
      <Popular />
    </div>
  )
}

export default Home
