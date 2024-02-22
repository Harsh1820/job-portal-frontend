import React, { useState } from 'react';
import axios from 'axios';

const JobForm = () => {
    const [title, setTitle] = useState('');
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
    const [location, setLocation] = useState('');

    const handlePostJob = async () => {
        try {
            await axios.post('/api/jobs/post', { title, minSalary, maxSalary, location });
            console.log('Job posted successfully');
            // Add any additional logic after posting job
        } catch (error) {
            console.error(error.response.data); // Handle error
        }
    };

    return (
        <div>
            <h2>Post a Job</h2>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="number" placeholder="Min Salary" value={minSalary} onChange={e => setMinSalary(e.target.value)} />
            <input type="number" placeholder="Max Salary" value={maxSalary} onChange={e => setMaxSalary(e.target.value)} />
            <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
            <button onClick={handlePostJob}>Post Job</button>
        </div>
    );
};

export default JobForm;
