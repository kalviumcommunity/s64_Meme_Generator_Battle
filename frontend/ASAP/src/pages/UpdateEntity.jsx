import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateEntity = () => {
    const { id } = useParams(); // Get entity ID from URL
    const navigate = useNavigate();
    const [entity, setEntity] = useState({ name: '', description: '' });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/v2/entity/${id}`)
            .then(response => {
                setEntity(response.data);
            })
            .catch(error => {
                console.error("Error fetching entity:", error);
            });
    }, [id]);

    const handleChange = (e) => {
        setEntity({ ...entity, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/v2/entity/${id}`, entity)
            .then(() => {
                navigate('/entities'); // Redirect after update
            })
            .catch(error => {
                console.error("Error updating entity:", error);
            });
    };

    return (
        <div className="container">
            <h2>Update Entity</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={entity.name} onChange={handleChange} required />
                
                <label>Description:</label>
                <textarea name="description" value={entity.description} onChange={handleChange} required />
                
                <button type="submit">Update Entity</button>
            </form>
        </div>
    );
};

export default UpdateEntity;
