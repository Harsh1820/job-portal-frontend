import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get('/api/jobs');
            setJobs(response.data); // Assuming backend returns an array of jobs
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Job List</h2>
            <ul>
                {jobs.map(job => (
                    <li key={job._id}>
                        {job.title} - {job.location} - Salary: {job.minSalary} - {job.maxSalary}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
