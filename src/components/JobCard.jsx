import React from 'react'
import { Link } from 'react-router-dom'


const JobCard = () => {

  return (
    <div className=''>
      <div className='brd px-4 leading-6 mb-6'>
          <Link to={'/job-search/job'}>
            <h2 className='font-bold hover:text-[#007bff] mt-4 mb-4'>Python Developer</h2>
        </Link>
        <ul>      
          <li>Eastern Cape</li>
          <li>Job Type: Temporary</li>
          <li>Posted: 27 June 2023</li>
        </ul>
        <div className='flex justify-end'>
          <a href=""><span className="material-symbols-outlined">mail</span></a>
          <a href=""><span className="material-symbols-outlined">favorite</span></a>
        </div>
      </div>
      <div className='brd px-4 leading-6 mb-6'>
          <Link to={'/job-search/job'}>
            <h2 className='font-bold hover:text-[#007bff] mt-4 mb-4'>Software engineer
            </h2>
        </Link>
        <ul>      
          <li>Western Cape</li>
          <li>Job Type: Temporary</li>
          <li>Posted: 27 June 2023</li>
        </ul>
        <div className='flex justify-end'>
          <Link to={'/job-search/job'} href=""><span className="material-symbols-outlined">mail</span></Link>
          <a href=""><span className="material-symbols-outlined">favorite</span></a>
        </div>
      </div>
    </div>
  )
}

export default JobCard
