import './profile.css';
import { useState } from 'react';
import { DatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import countriesWithFlages from '../../countriesWithFlages';

function Profile({ status = 'volunteer' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    date: '',
    phone: '',
    prefix: '',
    detail: '',
    time: '',
    sex: '',
    accommodation: '',
    academicStage: '',
    cv: ''
  });
  const [stageFocused, setStageFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    prefix: '963',
    name: 'سوريا',
    flag: '/images/icons/syria.png'
  });
  const [selectedResidence, setSelectedResidence] = useState({
    prefix: '963',
    name: 'سوريا',
    flag: '/images/icons/syria.png'
  });

  // معالج تغيير البيانات
  const handleFieldChange = (fieldName) => (e) => {
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  // معالج اختيار الدولة للهاتف
  const handleCountrySelect = (country) => {
    setSelectedCountry({
      prefix: country.prefix,
      name: country.name,
      flag: country.flag
    });
    setFormData(prev => ({ ...prev, prefix: country.prefix }));
    setIsDropdownOpen(false);
  };

  // معالج اختيار مكان الإقامة
  const handleResidenceSelect = (country) => {
    setSelectedResidence({
      prefix: country.prefix,
      name: country.name,
      flag: country.flag
    });
    setFormData(prev => ({ ...prev, accommodation: country.name }));
    setIsCountryDropdownOpen(false);
  };

  return (
    <div className='flex-col-start' style={{ gap: '20px' }}>
      {/* SECTION HEADER */}
      <h4>معلومات الحساب الاساسية</h4>
      <p>تتضمن هذه الإعدادات معلومات أساسية عن حسابك.</p>

      {/* FORM PROFILE SECTION */}
      <div className="layout-form">
        {/* ROW 1: الاسم والبريد */}
        <div className='flex-row'>
          <div className="flex-col-start">
            <label><img src="/images/icons/dashboard/user.png" alt="" /> الاسم الكامل</label>
            <input
              type='text'
              placeholder="مثال: محمد صافي"
              value={formData.fullName}
              onChange={handleFieldChange('fullName')}
            />
          </div>
          <div className="flex-col-start">
            <label><img src="/images/icons/dashboard/gmail.png" alt="" /> البريد الالكتروني</label>
            <input
              type='email'
              placeholder='example@email.com'
              value={formData.email}
              onChange={handleFieldChange('email')}
            />
          </div>
        </div>

        {/* ROW 2: تاريخ الميلاد ورقم الهاتف */}
        <div className='flex-row'>
          <div className="flex-col-start">
            <label><img src='/images/icons/dashboard/calendar.svg' alt="" /> تاريخ الميلاد</label>
            <div style={{ position: 'relative', width: '100%' }}>
              <DatePicker 
                selected={formData.startDate}
                onChange={(date) => setFormData(prev => ({ ...prev, startDate: date }))}
                dateFormat="dd/MM/yyyy"
                popperPlacement="bottom-end"
                customInput={
                  <div className='date-input-container'>
                    <input readOnly style={{border:"0px"}} />
                    <div className='date-display' style={{height:'48px'}}>
                      <div className='date-real-input'>
                        <img src='/icons/chalender/calendar.svg' alt='' />
                        <div className='date-text' style={{color: formData ? '#072127':'#708387' }}>
                          {formData.startDate ? 
                            format(formData.startDate,'dd/MM/yyyy'): '22/05/2025'
                          }
                        </div>
                      </div>
                      <img src='/images/icons/ChevronRight.png' alt='' />
                    </div>
                  </div>
                }
              />
            </div>
          </div>
          <div className="flex-col-start">
            <label><img src="/images/icons/dashboard/call.svg" alt="" /> رقم الهاتف</label>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
              {/* حقل إدخال الرقم */}
              <input
                type="tel"
                placeholder="5XX XXX XXX"
                value={formData.phone}
                onChange={handleFieldChange('phone')}
                style={{
                  flex: 1,
                  height: '48px',
                  border: '1px solid #70838766',
                  borderLeft: 'none',
                  borderRadius: '0px 8px 8px 0px',
                  padding: '0 16px',
                  fontSize: '16px'
                }}
              />

              {/* زر اختيار الدولة */}
              {!isDropdownOpen ? (<button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '0 16px',
                  border: '1px solid #70838766',
                  borderRight: 'none',
                  borderRadius: '8px 0 0 8px',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', width: 'auto', gap: '8px' }}>
                  <span style={{ fontSize: '14px', color: '#000' }}>{selectedCountry.prefix}+</span>
                  <div style={{ width: '1px', height: '24px', backgroundColor: '#70838766' }} />
                  <img
                    src="/images/icons/ChevronRight.png"
                    alt=""
                    style={{
                      width: '12px',
                      height: '11px',
                      transition: 'transform 0.3s'
                    }}
                  />
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    style={{ width: '20px', height: '15px', borderRadius: '3px' }}
                  />
                </div>
              </button>) : (
                <button style={{
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '0 16px',
                  border: '1px solid #70838766',
                  borderRight: 'none',
                  borderRadius: '8px 0 0 8px',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}>
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    style={{ width: '20px', height: '15px', borderRadius: '3px' }}
                  />
                  <span style={{ fontWeight: 500, color: '#000' }}>{selectedCountry.name}</span>
                  <img
                    src="/images/icons/ChevronRight.png"
                    alt=""
                    style={{
                      width: '12px',
                      height: '11px',
                      rotate: '90deg',
                      transition: 'transform 0.3s'
                    }}
                  />
                </button>
              )}

              {/* القائمة المنسدلة للدول */}
              {isDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '55px',
                  right: '240px',
                  width: '220px',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  backgroundColor: '#D9E4E5',
                  border: '1px solid #D9E4E5',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  zIndex: 1000
                }}>
                  {/* <input
                    type="text"
                    placeholder="ابحث عن دولة..."
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: 'none',
                      borderBottom: '1px solid #f0f0f0',
                      boxSizing: 'border-box'
                    }}
                  /> */}
                  {countriesWithFlages.map((country) => (
                    <button
                      key={country.prefix}
                      type="button"
                      onClick={() => handleCountrySelect(country)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        border: 'none',
                        borderRadius:'0',
                        borderBottom: '1px solid #f0f0f0',
                        backgroundColor: selectedCountry.prefix === country.prefix ? '#6DCDE5' : '#D9E4E5',
                        cursor: 'pointer',
                        textAlign: 'right'
                      }}
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        style={{ width: '20px', height: '15px', borderRadius: '3px' }}
                      />
                      <div style={{ display: 'flex', alignItems: 'center', color: '#000' }}>
                        <span style={{ fontWeight: 500 }}>{country.name}</span>
                        <span style={{ fontSize: '14px' }}>+{country.prefix}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* وصف الطالب */}
        <div className="flex-col-start">
          <label><img src='/images/icons/dashboard/course-icon/course-icon.png' alt='' /> وصف الطالب</label>
          <textarea
            placeholder='اكتب وصف ما'
            value={formData.detail}
            onChange={handleFieldChange('detail')}
          />
        </div>

        {/* معلومات التطوع */}
        {status === 'volunteer' && (
          <div className="flex-col-start">
            <h4>معلومات التطوع</h4>
            <p>تتضمن هذه الإعدادات معلومات التطوع الاساسية والمهمة</p>
            <label>اكتب لنا الايام المتاح بها والساعات المتاحة </label>
            <textarea
              placeholder=''
              value={formData.time}
              onChange={handleFieldChange('time')}
            />
          </div>
        )}

        {/* معلومات اضافية */}
        <div className='flex-row'>
          <div className="flex-col-start">
            <label>الجنس</label>
            <select
              onFocus={() => setStageFocused(true)}
              onBlur={() => setStageFocused(false)}
              style={{
                border: stageFocused ? '2px solid #D9E4E5' : '1px solid #D9E4E5',
                cursor: 'pointer',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='${stageFocused ? '%23000000' : '%23666'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              }}
              value={formData.sex}
              onChange={handleFieldChange('sex')}
            >
              <option value="">اختر الجنس</option>
              <option value="male">ذكر</option>
              <option value="female">انثى</option>
            </select>
          </div>
          <div className="flex-col-start">
            <label>مكان الاقامة</label>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
              {/* زر اختيار الدولة */}
              <button
                type="button"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                style={{
                  width: '100%',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '0 16px',
                  border: '1px solid #70838766',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{display:'flex', alignItems:'start', gap:'10px'}}>
                    <img
                      src={selectedResidence.flag}
                      alt={selectedResidence.name}
                      style={{ width: '20px', height: '15px', borderRadius: '3px' }}
                    />
                    <span style={{fontWeight: 500, color:'#000' }}>{selectedResidence.name}</span>
                  </div>
                  
                  <img
                    src="/images/icons/ChevronRight.png"
                    alt=""
                    style={{
                      width: '12px',
                      height: '11px',
                      transform: isCountryDropdownOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s'
                    }}
                  />
                </div>
              </button>

              {/* القائمة المنسدلة للدول */}
              {isCountryDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '60px',
                  left: '0',
                  width: '100%',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  backgroundColor: 'white',
                  border: '1px solid #D9E4E5',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  zIndex: 1000
                }}>
                  <input
                    type="text"
                    placeholder="ابحث عن دولة..."
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: 'none',
                      borderBottom: '1px solid #f0f0f0',
                      boxSizing: 'border-box'
                    }}
                  />
                  {countriesWithFlages.map((country) => (
                    <button
                      key={country.prefix}
                      type="button"
                      onClick={() => handleResidenceSelect(country)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        border: 'none',
                        borderBottom: '1px solid #f0f0f0',
                        backgroundColor: selectedResidence.prefix === country.prefix ? '#F0F9FF' : 'white',
                        cursor: 'pointer',
                        textAlign: 'right'
                      }}
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        style={{ width: '20px', height: '15px', borderRadius: '3px' }}
                      />
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', color: '#000' }}>
                        <span style={{ fontWeight: 500 }}>{country.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* المرحلة الدراسية */}
        <div className="flex-col-start">
          <label>المرحلة الدراسية</label>
          <select
            onFocus={() => setStageFocused(true)}
            onBlur={() => setStageFocused(false)}
            style={{
              border: stageFocused ? '2px solid #D9E4E5' : '1px solid #D9E4E5',
              cursor: 'pointer',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='${stageFocused ? '%23000000' : '%23666'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            }}
            value={formData.academicStage}
            onChange={handleFieldChange('academicStage')}
          >
            <option value="">اختر المرحلة</option>
            <option value="highschool">بكلوريا</option>
            <option value="university">طالب جامعي</option>
            <option value="graduate">خريج</option>
          </select>
        </div>

        {/* السيرة الذاتية */}
        <div className="flex-col-start">
          <label>السيرة الذاتية (CV)</label>
          <p style={{ fontSize: '12px', fontWeight: '400' }}>من فضلك يجب أن يكون الملف معبر واحترافي</p>
          <div className='input-file'>
            <label htmlFor="cv-upload" className='input-file-button'>
              <img src='/images/icons/add.png' alt='إضافة ملف' />
            </label>
            <input
              id="cv-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              style={{ display: 'none' }}
              onChange={handleFieldChange('cv')}
            />
          </div>
        </div>
      </div>

      {/* DELETE ACCOUNT SECTION */}
      <h4>حذف الحساب</h4>
      <p>يؤسفنا ان نراك تغادر!</p>
      <p>يرجى الملاحظة: حذف حسابك وبياناتك الشخصية دائم ولا يمكن التراجع عنه. لن تتمكن منصة ادراك من استعادة حسابك أو البيانات التي تم حذفها.</p>
      <p>قد تفقد أيضًا الوصول إلى الشهادات الموثّقة وبيانات اعتماد البرنامج الأخرى مثل شهادات التخصصات. إذا كنت ترغب بعمل نسخة من السجلات الخاصة بك قبل متابعة الحذف ، قم باتّباع الإرشادات الخاصة بـ 
        <a href="/ptint" className="certificate-link">طباعة او</a>
        <a href="/download" className="certificate-link">تنزيل شهادة</a>
      </p>
      <button className='delete'>حذف الحساب</button>
    </div>
  );
}

export default Profile;