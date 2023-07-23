

const EmailPopup = (props) => {
    const createEmailAlert = (evt) => {
        evt.preventDefault()
    
        const form = evt.target

        const formData = new FormData(form)

    
        fetch(`${import.meta.env.VITE_API_URL}/create_job_alert`, {
            method: "POST",
            body: formData
        }).then(resp => {
            console.log(resp)
        }).catch (error => {
            console.log(error)
        })
  
    }


  return (props.trigger) ? (
    
    <div className='fixed h-9/12 w-1/2'>
        <div className='relative mt-0 ml-0 bg-white border-2'>
            <div className='flex justify-between bg-[#007bff] p-4 text-white'>
                <p>Never miss another opportunity!</p>
                <button className='' onClick={() => props.setTrigger(false)}>X</button>
                { props.children }
            </div>
            <p className='m-4'>Get notified by email as soon as new jobs are posted: </p>
            <form onSubmit={createEmailAlert} >
                <div>
                    <input type="text" placeholder='Enter the job Title' name='job' className='m-4 w-9/12 p-4 border-2' required/>
                </div>
                <div>
                    <input type="text" placeholder='Enter the province' name='province' className='m-4 w-9/12 p-4 border-2' required/>
                </div>
                <div>
                    <input type="text" placeholder='Enter the city' name='city' className='m-4 w-9/12 p-4 border-2' required/>
                </div>
                <div>
                    <input type="email" placeholder='Enter your email address' name='email' className='m-4 w-9/12 p-4 border-2' required/>
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
