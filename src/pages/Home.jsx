import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from "../components/TopBar"

function Home() {
  return (
   <div>
     <TopBar/>
      <header>
        <nav className='flex justify-end'>
          <div className='p-4 font-semibold'>
            <Link to="/job-search">Job Search | </Link>
            <Link to="/companies">Add Jobs</Link>  
          </div>
        </nav>
      </header>
      <section className={`bg-hero-section bg-center bg-cover w-full h-9/12 py-32`}>
      <div>
      <h2 className='mb-4 text-lg'>Find your dream career</h2>
      <form className='flex flex-wrap justify-center'>
        <div className=''>
        <input type="text" placeholder="Job title or keywords" className='p-4'/>
        </div>
        <div className='ml-4'>
        <input type="text" placeholder="Location" className='p-4'/>
        </div>
        <div className='ml-4'>
        <button type="submit" className='bg-[#007bff] border-2 p-4 w-full text-white'>Search</button>
        </div>
      </form>
    </div>
      </section>
      <div className='p-4'>

      </div>
      <section className='bg-[#007bff] text-white h-full p-16'>
        <div className='p-4 text-center'>
          <h1 className='mb-4 text-lg'>Welcome to GirlCodeCareers</h1>
          <h3 className='mb-4 text-[#333] font-bold'>About GirlCode Careers</h3>
          <p className=''>Girlcode Careers is one of the leading South African job portals that assist jobseekers from various sectors and experience levels to find and apply for vacancies from hundreds of South Africa's leading companies. 
            We are one of the most popular destinations to find employment online in South Africa.
            Our mission is to become the destination where every candidate can find an ideal job and where every company can find the perfect candidate. </p>
          <Link to="/job-search" className="cta-button">Get Started</Link>
        </div>
      </section>
      <footer className='bg-[#333] text-white p-4 text-center h-full'>
        <p>&copy; 2023 Careers24. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
