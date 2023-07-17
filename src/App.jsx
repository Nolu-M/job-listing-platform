import { Route, Routes } from 'react-router-dom'
import './App.css'
import JobListings from './pages/JobListings'
import JobDetails from './pages/JobDetails'
import JobListingForm from './components/JobListingForm'






function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<JobListings/>} />
      <Route path='/joblistings/jobTitle' element={<JobDetails/>} />
      <Route path='/form' element={<JobListingForm/>} />
      <Route path='/' element={<Home />} />
    </Routes>
        
        
      
  
    </>
  )
}

export default App
