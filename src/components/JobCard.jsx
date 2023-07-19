import React from 'react'
import { Link } from 'react-router-dom'


const JobCard = () => {
  const JobList = [
    {
      title: "Software engineer",
      path: "/job-search/software-engineer"
    },
    {
      title: "Backend engineer",
      path: "/job-search/backend-engineer"
    },
    {
      title: "Frontend engineer",
      path: "/job-search/frontend-engineer"
    },
    {
      title: "Cyber Security",
      path: "/job-search/cyber-security"
    },
    {
      title: "Fullstack engineer",
      path: "/job-search/fullstack-engineer"
    },
    {
      title: "Cloud engineer",
      path: "/job-search/cloud-engineer"
    }

  ]


  return (
    <div className=''>
      {JobList.map(job => (
        <div className='brd px-4 leading-6 mb-6' key={job.title}>
          <Link to={job.path}>
            <h2 className='font-bold hover:text-[#007bff] mt-4 mb-4'>{job.title}</h2>
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
      )) }
    </div>
  )
}

export default JobCard
