import React, { useState } from 'react'
import MainLayout from '../Layouts/MainLayout';


const JobListingForm = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');

  function handleSubmit(e) {
        e.preventDefault();

        setTitle('');
        setCompany('');
        setLocation('');
        setSalary('');
        setDescription('');
        setRequirements('');
    }

  return (
    <MainLayout>
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Add Jobs</h1>
      <h2 className="text-s font-bold mb-2">Please fill out the form below, all fields marked with an asterisk(*) must be filled.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title" className="label"></label>
          Title <span className="required">*</span>
          <input
            type="text"
            id="title"
            className="input"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="company" className="label"></label>
          Company <span className="required">*</span>
          <input
            type="text"
            id="company"
            className="input"
            value={company}
            onChange={e => setCompany(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="location" className="label"></label>
          Location <span className="required">*</span>
          <input
            type="text"
            id="location"
            className="input"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="salary" className="label"></label>
          Salary <span className="required">*</span>
          <input
            type="text"
            id="salary"
            className="input"
            value={salary}
            onChange={e => setSalary(e.target.value)}
          />
        </div>
        <div className="form-field">
            <label htmlFor="description" className="label"></label>
            Description <span className="required">*</span>
            <input
            type="text"
            id="description"
            className="input"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
        </div>
        <div className="form-field">
            <label htmlFor="requirements" className="label"></label>
            Requirements <span className="required">*</span>
            <input
            type="text"
            id="requirements"
            className="input"
            value={requirements}
            onChange={e => setRequirements(e.target.value)}
            />
        </div>
        <button
          type="submit"
          className="button"
        >
          Submit
        </button>
      </form>
    </div>
    </MainLayout>
  )
}

export default JobListingForm;