import React from 'react'
import { Link } from 'react-router-dom'


const JobCard = () => {
  return (
    <div className=''>
      <div className='brd px-4 leading-6'>
        <Link to={'/jobs/advert'} href='/jobs/advert'>
          <h2 className='font-bold hover:text-girlcode-pink mt-4 mb-4'>Junior Software Developer</h2>
        </Link>
        <ul>
          <li>Eastern Cape</li>
          <li>Job Type: Temporary</li>
          <li>Posted: 27 June 2023</li>
          <li>25 Days left</li>
        </ul>
        <div className='flex justify-end'>
          <a href=""><span className="material-symbols-outlined">mail</span></a>
          <a href=""><span className="material-symbols-outlined">favorite</span></a>
        </div>
      </div>
    </div>
  )
}

export default JobCard
