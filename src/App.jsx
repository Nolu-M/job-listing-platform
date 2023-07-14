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
      <Route path='/jobs/advert' element={<JobDetails/>} />
      <Route path='/form' element={<JobListingForm/>} />
    </Routes>
        
        
      
  
    </>
  )
}

export default App
