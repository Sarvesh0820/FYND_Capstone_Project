import Hero from "../components/Hero"
import NewArrivals from '../components/NewArrivals';
import BestSeller from '../components/BestSeller.tsx';

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