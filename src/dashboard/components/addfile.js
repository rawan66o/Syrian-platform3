import { useState } from 'react';

function AddFile() {
  const [cvFile, setCvFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // معالجة اختيار الملف
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setCvFile(file);
    } else {
      alert('الرجاء اختيار ملف PDF فقط');
    }
  };

  // معالجة سحب وإفلات الملف
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setCvFile(file);
    } else {
      alert('الرجاء سحب ملف PDF فقط');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // حذف الملف
  const handleRemoveFile = () => {
    setCvFile(null);
  };

  // تنزيل الملف (محاكاة)
  const handleDownload = () => {
    if (cvFile) {
      // في الواقع، هنا يكون اتصال بالسيرفر لتحميل الملف
      alert(`جاري تحميل: ${cvFile.name}`);
    }
  };

  // تحويل الحجم للقراءة
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' بايت';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' كيلوبايت';
    return (bytes / (1024 * 1024)).toFixed(1) + ' ميجابايت';
  };

  return (
    <div className="flex-col-start">
      <label>السيرة الذاتية (CV)</label>
      
      {/* حقل إدخال الملف المخفي */}
      <input
        type="file"
        id="cv-upload"
        accept=".pdf"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
      
      {/* عرض إذا كان في ملف مرفوع */}
      {cvFile ? (
        <div className="file-preview-container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            padding: '16px',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            border: '1px solid #D9E4E5',
            width: '100%'
          }}>
            {/* أيقونة PDF */}
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#FF6B6B',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>PDF</span>
            </div>
            
            {/* معلومات الملف */}
            <div style={{ flex: 1 }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }}>
                <div>
                  <h5 style={{ margin: '0 0 5px 0', color: '#072127' }}>
                    {cvFile.name}
                  </h5>
                  <p style={{ margin: 0, color: '#708387', fontSize: '14px' }}>
                    {formatFileSize(cvFile.size)} • PDF
                  </p>
                </div>
                
                {/* تاريخ الرفع */}
                <span style={{ 
                  fontSize: '12px', 
                  color: '#666',
                  backgroundColor: '#f0f0f0',
                  padding: '4px 8px',
                  borderRadius: '4px'
                }}>
                  تم الرفع الآن
                </span>
              </div>
              
              {/* شريط التحميل (محاكاة) */}
              <div style={{ 
                width: '100%', 
                height: '4px', 
                backgroundColor: '#e0e0e0',
                borderRadius: '2px',
                marginTop: '10px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#4CAF50',
                  animation: 'loading 1s ease-in-out'
                }}></div>
              </div>
              
              {/* الأزرار */}
              <div style={{ 
                display: 'flex', 
                gap: '10px', 
                marginTop: '15px'
              }}>
                <button
                  onClick={handleDownload}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#6DCDE5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <img 
                    src="/images/icons/download.png" 
                    alt="تحميل" 
                    style={{ width: '16px', height: '16px' }}
                  />
                  تحميل
                </button>
                
                <button
                  onClick={handleRemoveFile}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    color: '#e74c3c',
                    border: '1px solid #e74c3c',
                    borderRadius: '6px',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  حذف
                </button>
                
                <button
                  onClick={() => document.getElementById('cv-upload').click()}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    color: '#072127',
                    border: '1px solid #D9E4E5',
                    borderRadius: '6px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    marginRight: 'auto'
                  }}
                >
                  تغيير الملف
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* منطقة سحب وإفلات الملف */
        <div
          className={`input-file ${isDragging ? 'drag-over' : ''}`}
          onClick={() => document.getElementById('cv-upload').click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          style={{
            borderColor: isDragging ? '#4CAF50' : '#6DCDE5',
            backgroundColor: isDragging ? '#E8F5E9' : '#6DCDE50D'
          }}
        >
          <div className='input-file-button'>
            <img 
              src='/images/icons/add.png' 
              alt='إضافة ملف'
              style={{ 
                width: '24px', 
                height: '24px',
                transition: 'transform 0.3s ease'
              }}
            />
          </div>
          
          <div style={{ textAlign: 'center', marginRight: '20px' }}>
            <p style={{ 
              margin: '0 0 8px 0', 
              color: '#072127',
              fontWeight: '500'
            }}>
              {isDragging ? 'أفلت الملف هنا' : 'اسحب وأفلت الملف هنا'}
            </p>
            <p style={{ 
              margin: 0, 
              color: '#708387',
              fontSize: '14px'
            }}>
              أو <span style={{ color: '#6DCDE5', cursor: 'pointer' }}>انقر للاختيار</span>
            </p>
            <p style={{ 
              margin: '10px 0 0 0', 
              color: '#999',
              fontSize: '12px'
            }}>
              يدعم ملفات PDF فقط (الحد الأقصى 5MB)
            </p>
          </div>
        </div>
      )}
      
      {/* معلومات إضافية */}
      <div style={{
        marginTop: '15px',
        padding: '12px',
        backgroundColor: '#FFF9E6',
        borderRadius: '8px',
        borderLeft: '4px solid #FFC107'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <img 
            src="/images/icons/info.png" 
            alt="معلومة"
            style={{ width: '18px', height: '18px' }}
          />
          <div>
            <p style={{ 
              margin: '0 0 5px 0', 
              color: '#072127',
              fontWeight: '500'
            }}>
              نصائح لسيرتك الذاتية:
            </p>
            <ul style={{ 
              margin: 0, 
              paddingRight: '15px',
              color: '#666',
              fontSize: '14px'
            }}>
              <li>تأكد من تحديث المعلومات الشخصية</li>
              <li>أضف خبراتك العملية الحديثة</li>
              <li>لا تنسَ المهارات التقنية واللغوية</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFile;