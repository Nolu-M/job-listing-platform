import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


const JobCard = () => {
  const [jobList, setJobList] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/job-search`)
        .then(resp => resp.json())
        .then(resp => {
          setJobList(resp.jobs)
        })
        .catch(error => {
            console.log(error)
        })
  }, [])


  //const JobList = [
    //{
      //title: "Software engineer",
      //type: "Job-type: Permanent",
      //posted: "Posted: 27 June 2023",
      //location: "Location: Eastern Cape",
      //path: "/job-search/software-engineer"
    //},
    //{
      //title: "Backend engineer",
      //type: "Job-type: Contract",
      //posted: "Posted: 29 June 2023",
      //location: "Location: Eastern Cape",
      //path: "/job-search/backend-engineer"
    //},
    //{
      //title: "Frontend engineer",
      //type: "Job-type: Permanent",
      //posted: "Posted: 22 June 2023",
      //location: "Location: Western Cape",
      //path: "/job-search/frontend-engineer"
    //}

  //]


  return (
    <div className=''>
      {jobList.map(job => (
        <div className='brd px-4 leading-6 mb-6' key={job.id}>
          <Link to={`/job-search/${job.job_slug}`}>
            <h2 className='font-bold hover:text-[#007bff] mt-4 mb-4 text-left'>{job.job_title}</h2>
          </Link>
          <div>
            <ul>     
              <li>{job.job_type}</li>
              <li>{job.job_posted}</li>
              <li>{job.job_location}</li>
            </ul>
          </div>
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
