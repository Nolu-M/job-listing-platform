import { Route, Routes } from 'react-router-dom'
import JobListings from './pages/JobListings'
import JobDetails from './pages/JobDetails'
import JobListingForm from './pages/JobListingForm'
import Home from './pages/Home'
import LoginButton from './components/LoginButton'





function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/job-search' element={<JobListings/>} />
      <Route path='/job-search/:jobSlug' element={<JobDetails/>} />
      <Route path='/login' element={<LoginButton/>} />
      <Route path='/companies' element={<JobListingForm/>} />
    </Routes>
        
        
      
  
    </>
  )
}

export default App
