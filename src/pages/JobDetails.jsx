import React from 'react'
import { Link } from 'react-router-dom'
import JobCard from '../components/JobCard'
import MainLayout from '../Layouts/MainLayout'


const Information = () => {

  return (
    <MainLayout>
    <div className='container mx-auto'>
      <div className='flex justify-center'>
      advert
      </div>
      <div className='flex justify-center'>
        <div className='brd h-screen p-6 w-4/12'>
          <div className='w-full'>
          <JobCard/>
        </div> 
      </div>
          <div className='w-6/12 brd'>
            <div className='relative p-4'>
              <div className='flex justify-between'>
                <div className=''>
                  <Link to={'/'} href="jobs" className='hover:text-girlcode-pink'>Go back to search results</Link>
                </div>
              </div>
              <div className='mt-6 leading-8'>
                <h1 className='font-bold'>Junior Software developer</h1>
                <ul>
                  <li>Gauteng</li>
                  <li>Salary: R30 000 - R40 000 per Month</li>
                  <li>Job Type: Permanent</li>
                  <li>Sectors: Tech</li> 
                  <li>Reference: </li>
                </ul>
                <div className='flex justify-between mt-4 mb-4'>
                  <p>Apply before Jul 15 2023 | 7 Days left</p>
                  <div>
                    <a href=""><span className="material-symbols-outlined">mail</span></a>
                    <a href=""><span className="material-symbols-outlined">favorite</span></a>
                  </div>
                </div>
                <button className='btn btn-primary w-full mb-4'>Apply</button>
                <hr />
                <div className='mt-4 leading-8'>
                  <h2 className='font-bold'>Vacancy Details</h2>
                  <ul>
                    <li>Junior Python Developer</li>
                    <li>Reporting to CTO manager</li>
                  </ul>
                  <h3>Job Purpose: </h3>
                  <h3>Duties and Key Responsibilities: </h3>
                </div>
                <hr className='mt-4'/>
                <div className='mt-4 mb-4 leading-8'>
                  <h2 className='font-bold'>Candidate Requirements</h2>
                  <h3>Qualifications & Work Experience</h3>
                  <ul>
                    <li>Matric</li>
                    <li>Degree</li>
                  </ul>
                </div>
                <hr />
                <button className='btn btn-primary w-full mb-4'>Apply</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    </MainLayout>
  )
}

export default Information
