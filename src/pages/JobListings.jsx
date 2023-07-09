import SearchListings from '../components/SearchListings'
import React, { useState} from 'react'
import JobCard from '../components/JobCard'
import EmailPopup from '../components/EmailPopup'



const JobListings = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
      <div className='container mx-auto'>
        <div className='flex justify-center'>
          Advert
        </div>
        <div className='flex justify-center'>
          <div className=''>
            <SearchListings/>
          </div>
          <div className='w-1/2 brd'>
            <div className=' relative p-4'>
              <div className='flex justify-between'>
                <p>Home</p>
                <div className='mb-4'>
                  <select name="Job-list-sort" id="Job-list-sort" className='btn border-2 hover:border-girlcode-pink'>
                    <option value="Relevance">Relevance</option>
                    <option value="Date Posted">Date Posted</option>
                  </select>
                </div>
              </div>
              <hr />
              <div className='flex justify-between mt-4 mb-4'>
                <h3>28 Junior Software Developer Jobs in South Africa</h3>
                <div className='flex justify-end'>
                <button className='btn btn-primary w-full' onClick={() => setButtonPopup(true)}>CREATE AN EMAIL ALERT</button>
                  <EmailPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    </EmailPopup>
                </div>
              </div>
              <JobCard/>
            </div>
          </div>
        </div>
      </div>

  )
}

export default JobListings;
