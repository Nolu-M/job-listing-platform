import React from 'react'
import LoginComp from '../components/LoginComp'
import MainLayout from '../Layouts/MainLayout'

const Apply = () => {
  return (
    <MainLayout>
        <div>
            <section className= {`bg-login-section bg-center bg-cover w-full h-9/12 py-32`}>
                <div className='text-center'>
                    <LoginComp/>
                </div>
            </section>
        </div>
    </MainLayout>
  )
}

export default Apply
