import React from 'react'
import Hero from '../components/ForLanding/Hero'
import Welcome from '../components/ForLanding/Welcome'
import Feature from '../components/ForLanding/Feature'
import RoomAndSuits from '../components/ForLanding/RoomAndSuits'
import Reservation from '../components/Reservation'

const Landing = () => {
  return (
    <>
    <Hero />
    <Welcome />
    <Feature />
    <RoomAndSuits />
    <Reservation />
    </>
  )
}

export default Landing