import './my-volunteer-progect.css';
import { certificates } from '../../mycoursesdata';
import { useState } from 'react';
import Card from '../../components/content-dashboard/card-progects';

function MyProgectes() {
  const [sortBy, setSortBy] = useState('newest');
  
  const sortedCertificates = [...certificates].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });
  
  return (
    <div className="layout-pro">
      <div className="layout-pro-title">
        <h4>المشاريع التطوعية</h4>
        <div className="sorting-container">
          <button 
            className={`layout-pro-title-button ${sortBy === 'newest' ? 'active' : ''}`}
            onClick={() => setSortBy('newest')}
          >
            من الاحدث
          </button>
          <button 
            className={`layout-pro-title-button ${sortBy === 'oldest' ? 'active' : ''}`}
            onClick={() => setSortBy('oldest')}
          >
            الاقدم
          </button>
        </div>
      </div>
      
      <div className='pro-grid'>
        {sortedCertificates.map((certificate) => (
          <Card key={certificate.id} data={certificate} />
        ))}
      </div>
    </div>
  )   
}

export default MyProgectes;