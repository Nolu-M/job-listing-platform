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
            <a><Link to="/job-search">Job Search |    </Link></a>
            <a><Link to="/companies">Add Jobs |     </Link></a>    
          </p>
        </nav>
      </header>

      <section className='heading'>
      <div>
      <h2 id="heading">Find your dream career</h2>
      <form className='inputs'>
        <input type="text" placeholder="Job title or keywords" />
        <input type="text" placeholder="Location" />
        <button type="submit">Search</button>
      </form>
    </div>
      </section>

      <section id="banner">
        <h1>Welcome to GirlCodeCareers</h1>
        <p>Find your dream job today</p>
        <Link to="/get-started" className="cta-button">Get Started</Link>
      </section>

      <footer>
        <p>&copy; 2023 Careers24. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
