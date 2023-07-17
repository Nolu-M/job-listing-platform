import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const JobCard = () => {

    const [jobList, setJobList] = useState([])

    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/job-search`)
          .then(resp => resp.json())
          .then(resp => {
              setJobList(resp.job)
          })
          .catch(error => {
              console.log(error)
          })
  }, [])



  return (
    <div className=''>
      <div className='brd px-4 leading-6 mb-6'>
        { jobList.map(job => (
          <Link to={`/job-search/${jobSlug}`} key={job.id}>
            <h2 className='font-bold hover:text-girlcode-pink mt-4 mb-4'>{job.title}</h2>
        </Link>

        ))}
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
        { jobList.map(job => (
          <Link to={`/joblistings/${job.slug}`} key={job.id}>
            <h2 className='font-bold hover:text-girlcode-pink mt-4 mb-4'>{job.title}</h2>
        </Link>

        ))}
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
        { jobList.map(job => (
          <Link to={`/joblistings/${job.slug}`} key={job.id}>
            <h2 className='font-bold hover:text-girlcode-pink mt-4 mb-4'>{job.name}</h2>
        </Link>

        ))}
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
    </div>
  )
}

export default JobCard
