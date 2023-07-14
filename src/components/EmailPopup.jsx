import axios from 'axios'
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
        setEmailAlert({...emailAlert, [e.target.name]: e.target.value });
    }

    const saveEmailAlert = (e) => {
        e.preventDefault();

        const form = e.target

        const data = {
            job: emailAlert.job,
            province: emailAlert.province,
            city: emailAlert.city,
            email: emailAlert.email,
        }

        const formData = new formData(form)

        fetch(`${import.meta.env.VITE_API_URL}/submit_checkout`, {
            method: "POST",
            body: formData
        }).then(resp => {
            console.log(resp)
        }).catch (error => {
            console.log(error)
        })
  
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
                <div>
                    <input type="text" placeholder='Job Title' name='job' value={emailAlert.job} onChange={handleInput} className='m-4 w-9/12 p-4 border-2 form-control'/>
                </div>
                <div>
                    <input type="text" placeholder='Province' name='province' value={emailAlert.province} onChange={handleInput} className='m-4 w-9/12 p-4 border-2 form-control'/>
                </div>
                <div>
                    <input type="text" placeholder='City' name='city' value={emailAlert.city} onChange={handleInput} className='m-4 w-9/12 p-4 border-2'/>
                </div>
                <div>
                    <input type="email" placeholder='Email Address' name='email' value={emailAlert.email} onChange={handleInput} className='m-4 w-9/12 p-4 border-2'/>
                </div>
                <div className='bg-slate-200 flex justify-end'>
                    <button type="submit" className='btn btn-primary'>Create Job Alert</button>
                </div>
            </form>
            
        </div>
    </div>
  
  ) : " ";
  }

export default EmailPopup
