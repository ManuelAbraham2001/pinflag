import React from 'react'
import Hero from '../../components/hero/Hero'
import ClientesHome from '../../components/clientes_home/ClientesHome';
import Slider from '../../components/slider/Slider'
import Prefooter_home from '../../components/prefooter/Prefooter_home';

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <Slider></Slider>
        <ClientesHome></ClientesHome>
        <Prefooter_home></Prefooter_home>
    </div>
  )
}

export default Home