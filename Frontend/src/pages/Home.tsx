import React from 'react'
import Hero from "../components/Hero"
import NewArrivals from '../components/NewArrivals';
import BestSeller from '../components/BestSeller';

const Home = () => {
  return (
    <>
      <Hero />
      <NewArrivals />
      <BestSeller/>
    </>
  )
}

export default Home;