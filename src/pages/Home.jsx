import React from 'react'
import Education from '../components/Education'
import MoreAbout from '../components/MoreAbout'
import Porfolios from '../components/Porfolios'
import Hero from '../components/Hero'
import KampusMerdeka from '../components/KampusMerdeka'
import LatestProjects from '../components/LatestProjects'

const Home = () => {
    return (
        <>
            <Hero />
            <Education />
            <KampusMerdeka />
            <LatestProjects />
            <MoreAbout />
            <Porfolios />
        </>
    )
}

export default Home
