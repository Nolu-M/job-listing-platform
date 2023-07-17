import SearchListings from '../components/SearchListings'
import React, { useState} from 'react'
import JobCard from '../components/JobCard'
import EmailPopup from '../components/EmailPopup'
import MainLayout from '../Layouts/MainLayout'



const JobListings = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <MainLayout>
      <div className='container mx-auto'>
        <div className='flex justify-center'>
          <div className='w-9/12 brd h-screen'>
            <div className=' relative p-4'>
              <div className='flex justify-between'>
                <h3>Jobs available</h3>
                <div className='mb-4'>
                  <select name="Job-list-sort" id="Job-list-sort" className='btn border-2 hover:border-girlcode-pink'>
                    <option value="Relevance">Relevance</option>
                    <option value="Date Posted">Date Posted</option>
                  </select>
                </div>
              </div>
              <hr />
              <div className='flex justify-between mt-4 mb-4'>
                <h3>Stay informed by creating a job alert</h3>
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
    </MainLayout>

  )
}

export default JobListings;
