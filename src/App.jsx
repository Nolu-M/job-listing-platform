import { Route, Routes } from 'react-router-dom'
import './App.css'
import JobListings from './pages/JobListings'
import JobDetails from './pages/JobDetails'






function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<JobListings/>} />
      <Route path='/jobs/advert' element={<JobDetails/>} />
    </Routes>
        
        
      
  
    </>
  )
}

export default App
