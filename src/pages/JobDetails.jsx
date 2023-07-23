import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'


const Information = () => {
  let { jobSlug } = useParams()

  const [jobInfo, setJobInfo] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/job-search/${jobSlug}`)
        .then(resp => resp.json())
        .then(resp => {
          setJobInfo(resp.job)
        })
        .catch(error => {
            console.log(error)
        })
  }, [])

  //const JobInfo = [
  //  {
  //    title: "Software engineer",
  //    company: "Career Circuit",
  //    job_location: "Eastern Cape",
  //    salary: "30000",
  //    description: "Our client is currently looking for a qualified candidate to assist in our software development needs. The Developer will work alongside the rest of the team to develop, improve, and optimise our current software solutions and as well as new systems to follow.",
  //    requirements: "Desired experience and qualifications: 3 year undergraduate degree or diploma in Computer Science or Information Systems, or a related field. Strong problem-solving skills."
  //    slug: "software-engineer"
  //  }
  //]

  return (
    <MainLayout>
    <div className='container mx-auto'>
      <div className='flex justify-center'>
          <div className='w-6/12 brd'>
            <div className='relative p-4'>
              <div className='flex justify-end mt-4'>
                <div className=''>
                  <Link to={'/job-search'} href="jobs" className='btn border-2 hover:border-[#007bff]'>Go back to search results</Link>
                </div>
              </div>
              <div className='mt-6 leading-8'>
                <div key={jobInfo.id}>
                  <h1 className='font-bold'>{jobInfo.title}</h1>
                  <ul>
                    <li>{jobInfo.company}</li>
                    <li>{jobInfo.job_location}</li>
                    <li>R{jobInfo.salary}</li>
                  </ul>
                    <Link to='/login'>
                      <button className='btn btn-primary w-full my-4'>Apply</button>
                    </Link>
                    <hr />
                  <div className='mt-4 leading-8'>
                    <h2 className='font-bold mb-4'>Vacancy Details</h2>
                    {jobInfo.description}
                  </div>
                    <hr className='mt-4'/>
                  <div className='mt-4 mb-4 leading-8'>
                    <h2 className='font-bold mb-4'>Candidate Requirements</h2>
                    {jobInfo.requirements}
                  </div>
                    <div className='flex justify-between mt-4 mb-4'>
                    <div>
                      <a href=""><span className="material-symbols-outlined">mail</span></a>
                      <a href=""><span className="material-symbols-outlined">favorite</span></a>
                    </div>
                  </div>
                    <Link to='/login'>
                      <button className='btn btn-primary w-full my-4'>Apply</button>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    </MainLayout>
  )
}

export default Information
