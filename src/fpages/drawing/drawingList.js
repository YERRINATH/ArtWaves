import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DrawL() {
  const [drawings, setDrawings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrawings = async () => {
      try {
        const response = await axios.get('/drawings');
        setDrawings(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDrawings();
  }, []);

  if (isLoading) {
    return <div className="container mt-5">Loading...</div>;
  }

  if (error) {
    window.location.href = '/auth';
    return null;
  }

  return (
    <div className="container mt-5" style={{ padding: '50px' }}>
      <div className="row">
        <div className="col-lg-8">
          <h2 className="mb-4">Saved Drawings</h2>
          <ul className="list-group">
            {drawings.map((drawing, index) => (
              <li key={index} className="list-group-item">
                <a href={`/DrawingList/Draw/${drawing.uniqueCode}`} className="text-decoration-none drawing-link" target="_blank" rel="noopener noreferrer">
                  {drawing.title }
                  <div className="img-container" style={{ backgroundImage: `url(${drawing.thumbnail})` }}></div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Create New Drawing</h5>
              <p className="card-text">Start a new drawing from scratch.</p>
              <a href="/DrawingList/Draw" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                New Drawing
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawL;
