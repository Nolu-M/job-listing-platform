import React from 'react'

const JobListings = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between'>
        <p>Home</p>
        <select name="Job-list-sort" id="Job-list-sort">
            <option value="Relevance">Relevance</option>
            <option value="Date Posted">Date Posted</option>
        </select>
      </div>
      <div>
        <h3>28 Junior Software Developer Jobs in South Africa</h3>
        <button className=''>CREATE AN EMAIL ALERT</button>
        <div className='border-2'>
            <div>
                <h3>Junior Software Developer</h3>
                <ul>
                    <li>Eastern Cape</li>
                    <li>Job Type: Temeporary</li>
                    <li>Posted: 27 June 2023</li>
                    <li>25 Days left</li>
                </ul>
            </div>
            <div>
                <a href=""><span className="material-symbols-outlined">mail</span></a>
                <a href=""><span className="material-symbols-outlined">favorite</span></a>
                <a href="">Company</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default JobListings
