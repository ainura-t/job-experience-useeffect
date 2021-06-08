import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./styles.css";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetJObs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetJObs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      {}
      <div className="btn-container">
        {jobs.map((item, idx) => {
          return (
            <button
              key={item.id}
              onClick={() => {
                setValue(idx);
              }}
              className={`job-btn ${idx === value && "active-btn"}`}
            >
              {item.company}
            </button>
          );
        })}
      </div>
      {}
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, idx) => {
          return (
            <div key={idx} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}
export default App;
