import React, { useState} from 'react'
import JobCard from './JobCard'
import EmailPopup from './EmailPopup'




const JobListingsInfo = () => {

const [buttonPopup, setButtonPopup] = useState(false);

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
            <button className='btn btn-primary w-5/12' onClick={() => setButtonPopup(true)}>CREATE AN EMAIL ALERT</button>
            <EmailPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
            </EmailPopup>
          </div>
            <JobCard/>
        </div>
      </div>
  )
}

export default JobListingsInfo
