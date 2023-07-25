import { Route, Routes } from 'react-router-dom'
import JobListings from './pages/JobListings'
import JobDetails from './pages/JobDetails'
import JobListingForm from './pages/JobListingForm'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/job-search' element={<JobListings/>} />
      <Route path='/job-search/:jobSlug' element={<JobDetails/>} />
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/companies' element={<JobListingForm/>} />
    </Routes>
        
        
      
  
    </>
  )
}

export default App
