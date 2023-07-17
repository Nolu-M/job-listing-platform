import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from "../components/TopBar"

function Home() {
  return (
   <div>
     <TopBar/>
      <header>
        <nav>
          <p>
            <Link to="/job-search">Job Search |</Link>
            <Link to="/companies">Add Jobs |</Link>  
          </p>
        </nav>
      </header>
      <section className={`bg-hero-section bg-center bg-cover w-full h-1/2 py-32`}>
      <div>
      <h2 id="heading">Find your dream career</h2>
      <form className='inputs'>
        <input type="text" placeholder="Job title or keywords" />
        <input type="text" placeholder="Location" />
        <button type="submit">Search</button>
      </form>
    </div>
      </section>
      <section className='bg-[#007bff] text-white'>
        <h1>Welcome to GirlCodeCareers</h1>
        <p>Find your dream job today</p>
        <Link to="/get-started" className="cta-button">Get Started</Link>
      </section>
      <footer className='bg-[#333] text-white'>
        <p>&copy; 2023 Careers24. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
