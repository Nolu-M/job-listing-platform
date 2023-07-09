import React from 'react'

const EmailPopup = (props) => {
    
  return (props.trigger) ? (
    
    <div className='fixed h-9/12 w-9/12'>
        <div className='relative mt-0 ml-0 bg-white border-2'>
            <div className='flex justify-between bg-slate-400 p-4 text-white'>
                <p>Never miss another opportunity!</p>
                <button className='' onClick={() => props.setTrigger(false)}>X</button>
                { props.children }
            </div>
            <form>
                <p className='m-4'>Get notified by email as soon as new jobs are posted: </p>
                <input type="text" placeholder='Job Title' className='m-4 w-9/12 p-4 border-2'/>
                <select className='btn btn-secondary w-9/12 m-4'>
                    <option value="">Gauteng</option>
                    <option value="">Eastern Cape</option>
                    <option value="">Western Cape</option>
                </select>
                <select className='btn btn-secondary w-9/12 m-4'>
                    <option value="">Johannesburg</option>
                    <option value="">Port Elizabeth</option>
                    <option value="">Cape Town</option>
                </select>
                <input type="text" placeholder='Email Address' className='m-4 w-9/12 p-4 border-2'/>
            </form>
            <div className='bg-slate-200 flex justify-end'>
                <button className='btn btn-primary'>Create Job Alert</button>
            </div>
        </div>
    </div>
  
  ) : " ";
}

export default EmailPopup
