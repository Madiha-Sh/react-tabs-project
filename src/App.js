import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'
import './App.css';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [value, setValue] = useState(0); 
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try { 
      const resp = await fetch(url);
      const jobData = await resp.json(); 
      setJobs(jobData);
      setIsLoading(false); 
    } catch(error) {
      console.log(`Error : ${error}`);  
    }
  } 

  useEffect(() => { 
    getData(); 
  }, [])

  if(isLoading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const {company, id, dates, duties, title} = jobs[value];
  return (
    <section className='section'> 
      <div className='title'>
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            const {id, company} = job;
            return (
              <button key={id} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>{company}</button> 
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button className='btn'>more info</button>
    </section>
  );

}

export default App;