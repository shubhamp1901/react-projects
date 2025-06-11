import React from 'react'
import Hero from '../Components/Hero'
import HomeCards from '../Components/HomeCards'
import JobListings from '../Components/JobListings'
import ViewAll from '../Components/ViewAll'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings isHome={true} />
        <ViewAll />
    </>
  )
}

export default HomePage