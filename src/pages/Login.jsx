import { Link } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'




const Login = () => {
  return (
    <MainLayout>
        <div className=''>
            <div className='flex items-center justify-center w-full py-6'>
                <h1>LOG IN</h1>
            </div>
            <section className= {`bg-login-section bg-center bg-cover w-full h-9/12 py-32`}>
                <div className='text-center'>
                <form action="">
                    <div>
                        <input type="text" placeholder='Email Address' className='m-4 p-6 border-2 w-2/5' required/>
                    </div>
                    <div>
                        <input type="text" placeholder='Password' className='m-4 p-6 border-2 w-2/5' required/>
                    </div>
                        <p className='text-white'>By accessing GirlCode Careers you agree to our terms of service and <br/>privacy policy.</p>
                    <button className='btn btn-primary w-2/5 my-4'>LOG IN</button>
                        <p className='text-white'>Don't have an account</p>
                    <Link to='/sign-up'>
                    <button className='btn border-2 text-white hover:border-[#007bff] hover:bg-white hover:text-[#333] w-2/5 my-4'>SIGN UP</button>
                    </Link>
                </form>
                </div>
            </section>
        </div>
    </MainLayout>
  )
}

export default Login
