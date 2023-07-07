import { Route, Routes } from 'react-router-dom'
import './App.css'
import JobListings from './pages/JobListings'
import JobDetails from './pages/JobDetails'






function App() {
  return (
    <>
    <JobListings />
    <Routes>
      <Route path='/jobs/advert' element={<JobDetails/>} />
    </Routes>
        
        
      
  
    </>
  )
}

export default App
