import React from 'react'
import Hero from '../../components/home/hero/Hero'
import ClientesHome from '../../components/home/clientes_home/ClientesHome';
import Slider from '../../components/home/slider/Slider'
import Prefooter_home from '../../components/home/prefooter/Prefooter_home';

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