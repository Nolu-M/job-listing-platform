import React from 'react'

const SearchListings = () => {
  return (
    <div>
      <div className='flex'>
        <h2>REFINE YOUR SEARCH</h2>
        <h3>CLEAR FILTERS</h3>
        <hr />
      </div>
      <div>
        <button>APPLY FILTERS</button>
      </div>
      <div>
        <select name="" id="">
          <option value="">Johannesburg</option>
        </select>
      </div>
      <div>
        <h4>Remote Jobs</h4>
        <hr />
        <ul>
          <li>Include Remote Jobs</li>
          <li>Show Remote Jobs Only</li>
          <li>Exclude Remote Jobs</li>
        </ul>
      </div>
      <div>
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
      <div>
        <h4>Sectors (Maximum 2)</h4>
        <div className=''>
          <div>
            <input type="checkbox" name="Academic" id="" /><span>Aacademic</span>
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
      <div>
      <select name="" id="">
        <option value="">Date Posted: Any</option>
      </select>
      </div>
      <div>
      <select name="" id="">
        <option value="">Contract Type: Any</option>
      </select>
      </div>
      <div>
      <select name="" id="">
        <option value="">EE/AA: Any</option>
      </select>
      </div>
      <div>
        <input type="checkbox" name="" id="" /><span>Disabled Positions Only</span>
      </div>
      <a className='bg-girlcode-pink'>APPLY FILTERS</a>
    </div>
  )
}

export default SearchListings
