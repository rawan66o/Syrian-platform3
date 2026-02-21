import './Guide/Guide.css'
import Footer from "../components/footer/footer"
import { useEffect, useState } from 'react';

function Partners() {
    const partners = [ 
        '/images/icons/Amazone.png', '/images/icons/Microsoft.png',
        '/images/icons/Google.png', '/images/icons/Amazone.png', 
        '/images/icons/Amazone.png', '/images/icons/Microsoft.png',
        '/images/icons/Google.png', '/images/icons/Amazone.png', 
        '/images/icons/Amazone.png', '/images/icons/Microsoft.png',
        '/images/icons/Google.png', '/images/icons/Amazone.png', 
        '/images/icons/Amazone.png', '/images/icons/Microsoft.png',
        '/images/icons/Google.png', '/images/icons/Amazone.png', 
        '/images/icons/Amazone.png', '/images/icons/Microsoft.png',
        '/images/icons/Google.png', '/images/icons/Amazone.png', 
        '/images/icons/Amazone.png', '/images/icons/Microsoft.png',
        '/images/icons/Google.png', '/images/icons/Amazone.png', 
    ]

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

     const getColumnsCount = () => {
        if (window.innerWidth < 768) return 2;  // جوال: عمودين
        if (window.innerWidth < 1024) return 3; // تابلت: 3 أعمدة
        return 4; // كمبيوتر: 4 أعمدة
    };
    
    const [columnsCount, setColumnsCount] = useState(getColumnsCount());
    const rows = chunkArray(partners, columnsCount);
    
    // تحديث عدد الأعمدة عند تغيير حجم النافذة
    useEffect(() => {
        const handleResize = () => {
            setColumnsCount(getColumnsCount());
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

   return(
    <div>      
      <div className='header'>
         <h1>شركاء المنصة</h1>
         <p>( 1440 شريك)</p>
       </div>
      <div style={{padding:'30px 50px'}}>
          <table cellPadding={15} cellSpacing={0} align='center'>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((partner, colIndex) => (
                    <td 
                      key={colIndex} 
                      align="center" 
                      valign="middle"
                      // onMouseEnter={(e) => {
                      //     e.currentTarget.style.backgroundColor = '#e3f2fd';
                      //     e.currentTarget.style.transform = 'translateY(-5px)';
                      //     e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                      // }}
                      // onMouseLeave={(e) => {
                      //     e.currentTarget.style.backgroundColor = '#f8f9fa';
                      //     e.currentTarget.style.transform = 'translateY(0)';
                      //     e.currentTarget.style.boxShadow = 'none';
                      // }}
                    >
                      <img 
                        src={partner} 
                        alt={`شريك ${rowIndex * columnsCount + colIndex + 1}`}
                      />
                    </td>
                  ))}
                  
                  {/* إضافة خلايا فارغة إذا كان الصف غير مكتمل */}
                  {row.length < columnsCount && 
                      Array(columnsCount - row.length).fill().map((_, index) => (
                          <td key={`empty-${index}`} style={{visibility: 'hidden'}}>
                              <div style={{width: '150px', height: '80px'}}></div>
                          </td>
                      ))
                  }
                </tr>
              ))}
            </tbody>
          </table> 
      </div>
      
      <Footer />
    </div>
   )
}

export default Partners