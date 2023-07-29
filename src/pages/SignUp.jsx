import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import { Link } from 'react-router-dom'



const SignUp = () => {
  return (
    <MainLayout>
        <div className=''>
            <div className='flex items-center justify-center w-full py-6'>
                <h1>SIGN UP</h1>
            </div>
            <section className='border-'>
                <div className='text-center'>
                    <form action="">
                        <div>
                            <input type="text" placeholder='Email Address' className='m-4 p-6 border-2 w-1/2' required/>
                        </div>
                        <div>
                            <input type="text" placeholder='Password' className='m-4 p-6 border-2 w-1/2' required/>
                                <p>Passwords must be at least 10 characters long with an UPPERCASE, lower case, number and special character.</p>
                        </div>
                        <div className='mt-8'>
                            <h2>I am currently</h2>
                                <div className='mt-8 mb-8'>
                                    <label className='btn-sign btn-checked'>
                                        <input type="radio" value='Employed' name='CurrentJobSeekersStatus' id='CurrentJobSeekerStatus' checked='checked' data-val='true' 
                                        data-val-required='The CurrentJobSeekersStatus field is required'/>Employed
                                    </label>
                                    <label className='btn-sign btn-unchecked'>
                                        <input type="radio" value='Unemployed' name='CurrentJobSeekersStatus' id='CurrentJobSeekerStatus'/>Unemployed
                                    </label>
                                    <label className='btn-sign btn-unchecked'>
                                        <input type="radio" value='FirstTimeJobSeeker' name='CurrentJobSeekersStatus' id='CurrentJobSeekerStatus'/>First Time Job Seeker
                                    </label>
                                </div>
                            <h2>Do you have work experience? *</h2>
                                <div className='mt-8 mb-8'>
                                    <label className='btn-sign btn-unchecked'>
                                        <input type="radio" value='true' name='HasWorkExperience' id='CurrentJobSeekerStatus' checked='checked' data-val='true' 
                                        data-val-required='The HasWorkExperience field is required'data-activation='c24radio'/>Yes
                                    </label>
                                    <label className='btn-sign btn-checked'>
                                        <input type="radio" value='No' name='HasWorkExperience' id='HasWorkExperience' checked='checked'
                                        data-activation='c24radio'/>No
                                    </label>
                                </div>

                        </div>
                        <div className=''>
                            <button className='btn btn-primary w-2/5 my-4'>SIGN UP</button>
                        </div>
                        <div>
                            <Link to='/login'>
                                <button className='btn border-2 hover:border-[#007bff] text-[#333] w-2/5 my-4'>I HAVE AN ACCOUNT</button>
                            </Link>
                        </div>
                       
                    </form>
                </div>
            </section>
        </div>

    </MainLayout>
  )
}

export default SignUp
