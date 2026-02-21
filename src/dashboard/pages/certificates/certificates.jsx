import './certificates.css'
import { certificates } from '../../mycoursesdata';
import { useState } from 'react';
import Card from '../../components/content-dashboard/card-certificates';



function Certificates() {
  // دالة للتحكم في الترتيب
  const [sortBy, setSortBy] = useState('newest');
  
  const sortedCertificates = [...certificates].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });
  return (
    <div className="layout-certificates">
      <div className="layout-certificates-title">
        <h4>الشهادات</h4>
        <div className='sorting-container'>
          <div className='layout-certificates-title-button'
            onClick={() => setSortBy('newest')}
            style={{
              background: sortBy === 'newest' ? '#6DCDE5' : 'none',
              color: sortBy === 'newest' ? 'white' : '#071722'
            }}
          >
            من الاحدث
          </div>
          <div className='layout-certificates-title-button'
            onClick={() => setSortBy('oldest')}
            style={{
              background: sortBy === 'oldest' ? '#6DCDE5' : '',
              color: sortBy === 'oldest' ? 'white' : '#071722'
            }}
          >
            الاقدم
          </div>
        </div>
      </div>
      
      <div className='certificates-grid'>
        {sortedCertificates.map((certificate) => (
          <Card key={certificate.id} data={certificate} />
        ))}
      </div>
    </div>
  )
}

export default Certificates;