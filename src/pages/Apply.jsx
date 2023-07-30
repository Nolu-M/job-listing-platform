import React from 'react'
import LoginComp from '../components/LoginButton'
import MainLayout from '../Layouts/MainLayout'

const Apply = () => {
  return (
    <MainLayout>
        <div>
          <div className='flex items-center justify-center w-full py-6'>
            <h1>APPLY TODAY</h1>
          </div>
          <section className= {`bg-login-section bg-center bg-cover w-full h-screen py-32`}>
            <div className='text-center'>
              <div>
                <h2 className='text-lg'>In order to apply you need to log in or sign up first</h2>
              </div>
              <LoginComp/>
            </div>
          </section>
        </div>
    </MainLayout>
  )
}

export default Apply
