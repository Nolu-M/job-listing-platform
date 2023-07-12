import React, { useState } from 'react'

const EmailPopup = (props) => {

    const [emailAlert, setEmailAlert] = useState ({
        job: '',
        province: '',
        city: '',
        email: ''
    })

    const handleInput = (e) => {
        e.persist();
        setEmailAlert({...emailAlert, [e.target.name]: target.value })
    }

    const saveEmailAlert = (e) => {
        e.preventDefault()

        const data = {
            job: emailAlert.job,
            province: emailAlert.province,
            city: emailAlert.city,
            email: emailAlert.email
        }

       

    }
    


  return (props.trigger) ? (
    
    <div className='fixed h-9/12 w-9/12'>
        <div className='relative mt-0 ml-0 bg-white border-2'>
            <div className='flex justify-between bg-slate-400 p-4 text-white'>
                <p>Never miss another opportunity!</p>
                <button className='' onClick={() => props.setTrigger(false)}>X</button>
                { props.children }
            </div>
            <p className='m-4'>Get notified by email as soon as new jobs are posted: </p>
            <form onSubmit={saveEmailAlert}>
                <input type="text" placeholder='Job Title' name='job' value={emailAlert.name} onChange={handleInput} className='m-4 w-9/12 p-4 border-2'/>
                <input type="text" placeholder='Province' name='province' value={emailAlert.name} onChange={handleInput} className='m-4 w-9/12 p-4 border-2'/>
                <input type="text" placeholder='City' name='city' value={emailAlert.name} onChange={handleInput} className='m-4 w-9/12 p-4 border-2'/>
                <input type="text" placeholder='Email Address' name='email' value={emailAlert.name} onChange={handleInput} className='m-4 w-9/12 p-4 border-2'/>
                <div className='bg-slate-200 flex justify-end'>
                    <button type="submit" className='btn btn-primary'>Create Job Alert</button>
                </div>
            </form>
            
        </div>
    </div>
  
  ) : " ";
  }

export default EmailPopup
