import React from 'react'

const SearchListings = () => {
  return (
    <div className='p-6 brd w-full'>
      <div className='flex justify-between p-4'>
        <div className='mt-0 p-4 w-full'>
          <h1 className='text-left text-lg leading-5 font-medium'>REFINE YOUR SEARCH</h1>
        </div>
        <div className=''>
          <a className='text-right' href='#'>CLEAR FILTERS</a>
        </div>
      </div>
      <hr />
      <div className=''>
        <button className='btn btn-primary w-full'>APPLY FILTERS</button>
      </div>
      <div>
        <select name="" id="">
          <option value="">Johannesburg</option>
        </select>
      </div>
      <div className='brd'>
        <h4 className='leading-8 py-4 px-4'>Remote Jobs</h4>
        <hr />
        <ul>
          <li>Include Remote Jobs</li>
          <li>Show Remote Jobs Only</li>
          <li>Exclude Remote Jobs</li>
        </ul>
      </div>
      <div className='brd'>
        <h4>Minimum salary per month</h4>
        <hr />
        <ul>
          <li>Any</li>
          <li>R12000 (1129)</li>
          <li>R24000</li>
          <li>R36000</li>
          <li>R48000</li>
          <li>Market Related</li>
        </ul>
      </div>
      <div className='brd'>
        <h4>Sectors (Maximum 2)</h4>
        <hr />
        <div>
          <div>
            <input type="checkbox" name="Academic" id="" /><span>Academic</span>
          </div>
          <div>
            <input type="checkbox" name="Environmental" id="" /><span>Environmental</span>
          </div>
          <div>
            <input type="checkbox" name="Accounting" id="" /><span>Accounting</span>
          </div>
          <div>
            <input type="checkbox" name="Engineering" id="" /><span>Engineering</span>
          </div>
          <div>
            <input type="checkbox" name="Fashion" id="" /><span>Fashion</span>
          </div>
          <div>
            <input type="checkbox" name="Construction" id="" /><span>Construction</span>
          </div>
        </div>
      </div>
      <div className='brd'>
      <select name="" id="">
        <option value="">Date Posted: Any</option>
      </select>
      </div>
      <div className='brd'>
      <select name="" id="">
        <option value="">Contract Type: Any</option>
      </select>
      </div>
      <div className='brd'>
      <select name="" id="">
        <option value="">EE/AA: Any</option>
      </select>
      </div>
      <div className='brd'>
        <input type="checkbox" name="" id="" /><span>Disabled Positions Only</span>
      </div>
      <button className='btn btn-primary w-full'>APPLY FILTERS</button>
    </div>
  )
}

export default SearchListings
