import React from 'react'

const SearchListings = () => {
  return (
    <div className='p-6 brd w-full'>
      <div className='flex justify-between p-4'>
        <div className='mt-0 p-4 w-full'>
          <h1 className='text-left text-lg leading-5 font-medium'>REFINE YOUR SEARCH</h1>
        </div>
        <div className=''>
          <a className='text-right text-girlcode-pink' href='#'>CLEAR FILTERS</a>
        </div>
      </div>
      <hr className='mb-4'/>
      <div className=''>
        <button className='btn btn-primary w-full mb-4'>APPLY FILTERS</button>
      </div>
      <div className='mb-4'>
        <select name="" id="" className='btn btn-secondary w-full'>
          <option value="">Johannesburg</option>
        </select>
      </div>
      <div className='brd mb-4'>
        <h4 className='leading-10 p-4'>Remote Jobs</h4>
        <hr />
        <ul className='p-4 leading-10'>
          <li>Include Remote Jobs</li>
          <li>Show Remote Jobs Only</li>
          <li>Exclude Remote Jobs</li>
        </ul>
      </div>
      <div className='brd mb-4'>
        <h4 className='leading-10 p-4'>Minimum salary per month</h4>
        <hr />
        <div className='leading-10 p-4'>
          <div>
            <input type='radio'/>
            <label>Any</label>
          </div>
          <div>
            <input type='radio'/>
            <label>Any</label>
          </div>
          <div>
            <input type='radio'/>
            <label>Any</label>
          </div>
          <div>
            <input type='radio'/>
            <label>Any</label>
          </div>
          
        </div>
      </div>
      <div className='brd mb-4'>
        <h4 className='leading-10 p-4'>Sectors (Maximum 2)</h4>
        <hr />
        <div className='leading-10 p-4 overflow-auto h-40'>
          <div>
            <input type="checkbox" name="Academic" id="" /><span> Academic</span>
          </div>
          <div>
            <input type="checkbox" name="Environmental" id="" /><span> Environmental</span>
          </div>
          <div>
            <input type="checkbox" name="Accounting" id="" /><span> Accounting</span>
          </div>
          <div>
            <input type="checkbox" name="Engineering" id="" /><span> Engineering</span>
          </div>
          <div>
            <input type="checkbox" name="Fashion" id="" /><span> Fashion</span>
          </div>
          <div>
            <input type="checkbox" name="Construction" id="" /><span> Construction</span>
          </div>
          <div>
            <input type="checkbox" name="Construction" id="" /><span> Construction</span>
          </div>
          <div>
            <input type="checkbox" name="Construction" id="" /><span> Construction</span>
          </div>
        </div>
      </div>
      <div className='brd mb-4'>
      <select name="" id="" className='btn btn-secondary w-full'>
        <option value="">Date Posted: Any</option>
      </select>
      </div>
      <div className='brd mb-4'>
      <select name="" id="" className='btn btn-secondary w-full'>
        <option value="">Contract Type: Any</option>
      </select>
      </div>
      <div className='brd mb-4'>
      <select name="" id="" className='btn btn-secondary w-full'>
        <option value="">EE/AA: Any</option>
      </select>
      </div>
      <div className='mb-4'>
        <label htmlFor="Disabled-positions">
        <input type="checkbox" name="disabled-positions" id=""/> Disabled Positions Only
        <span></span>
        </label>
      </div>
      <button className='btn btn-primary w-full'>APPLY FILTERS</button>
    </div>
  )
}

export default SearchListings
