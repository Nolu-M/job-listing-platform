import React from 'react'

const EmailPopup = (props) => {
    
  return (props.trigger) ? (
    
    <div className='relative mt-0 ml-0 w-full h-screen bg-white'>
        <div className=''>
            <div className='flex justify-between bg-slate-400'>
                <p>Never miss another opportunity!</p>
                <button className='' onClick={() => props.setTrigger(false)}>Close</button>
                { props.children }
            </div>
            <form>
                <p className='m-4'>Get notified by email as soon as new jobs are posted</p>
                <input type="text" placeholder='Job Title' className='m-4'/>
                <select className='btn btn-secondary m-4'>
                    <option value="">Gauteng</option>
                    <option value="">Eastern Cape</option>
                    <option value="">Western Cape</option>
                </select>
                <select className='btn btn-secondary m-4'>
                    <option value="">Johannesburg</option>
                    <option value="">Port Elizabeth</option>
                    <option value="">Cape Town</option>
                </select>
                <input type="text" />
            </form>
            <div className='bg-slate-200'>
                <button className='btn btn-primary'>Create Job Alert</button>
            </div>
        </div>
    </div>
  
  ) : " ";
}

export default EmailPopup
