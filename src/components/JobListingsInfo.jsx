import React from 'react'
import SearchListings from './SearchListings'




const JobListingsInfo = () => {
  return (
      <div className='w-6/12 brd'>
        <div className=' relative p-4'>
          <div className='flex justify-between'>
            <p>Home</p>
            <div className=''>
              <select name="Job-list-sort" id="Job-list-sort" className='btn border-2 hover:border-girlcode-pink'>
                <option value="Relevance">Relevance</option>
                <option value="Date Posted">Date Posted</option>
              </select>
            </div>
          </div>
        <hr />
          <div className='flex justify-between m-4'>
            <h3>28 Junior Software Developer Jobs in South Africa</h3>
            <button className='btn btn-primary w-5/12'>CREATE AN EMAIL ALERT</button>
          </div>
            <div className=''>
              <div className='brd px-4'>
                <h3>Junior Software Developer</h3>
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
        </div>
      </div>
  )
}

export default JobListingsInfo
