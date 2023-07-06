import React from 'react'
import SearchListings from '../components/SearchListings'
import JobListingsInfo from '../components/JobListingsInfo'



const JobListings = () => {
  return (
    <section>
      <div classname='container mx-auto'>
        <div className='flex justify-center'>
          Advert
        </div>
        <div className='flex justify-center'>
          <div className=''>
            <SearchListings/>
          </div>
          <JobListingsInfo/>
        </div>
      </div>
    </section>
  )
}

export default JobListings
