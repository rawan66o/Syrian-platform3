import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import countriesWithFlages from '../../countriesWithFlages';
import styles from './profile.module.css';

function Profile({ status = 'volunteer' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    date: null, // تغيير ليكون null بدلاً من string
    phone: '',
    prefix: '963',
    detail: '',
    time: '',
    sex: '',
    accommodation: 'سوريا',
    academicStage: '',
    cv: null
  });
  
  const [stageFocused, setStageFocused] = useState(false);
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
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
  const [searchTerm, setSearchTerm] = useState('');

  // Refs
  const phoneDropdownRef = useRef(null);
  const countryDropdownRef = useRef(null);
  const phoneButtonRef = useRef(null);
  const countryButtonRef = useRef(null);
  const calendarRef = useRef(null);
  const calendarButtonRef = useRef(null);

  // Handle click outside for all dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Phone dropdown
      if (phoneDropdownRef.current && !phoneButtonRef.current?.contains(event.target) && 
          !phoneDropdownRef.current.contains(event.target)) {
        setIsPhoneDropdownOpen(false);
      }
      
      // Country dropdown
      if (countryDropdownRef.current && !countryButtonRef.current?.contains(event.target) && 
          !countryDropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
        setSearchTerm('');
      }
      
      // Calendar
      if (calendarRef.current && !calendarRef.current.contains(event.target) && 
          !calendarButtonRef.current?.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handlers
  const handleFieldChange = (fieldName) => (e) => {
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setFormData(prev => ({ ...prev, prefix: country.prefix }));
    setIsPhoneDropdownOpen(false);
  };

  const handleResidenceSelect = (country) => {
    setSelectedResidence(country);
    setFormData(prev => ({ ...prev, accommodation: country.name }));
    setIsCountryDropdownOpen(false);
    setSearchTerm('');
  };

  // Date handlers
  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, date }));
    setIsCalendarOpen(false);
  };

  const formatDate = (date) => {
    if (!date) return '22/05/2025';
    return date.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '/');
  };

  // Filter countries
  const filteredCountries = countriesWithFlages.filter(country =>
    country.name.includes(searchTerm)
  );

  // Select style based on focus
  const selectStyle = {
    border: stageFocused ? '2px solid #D9E4E5' : '1px solid #D9E4E5',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='${stageFocused ? '%23000000' : '%23666'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
  };

  return (
    <div className={styles.container}>
      {/* SECTION HEADER */}
      <h4 className={styles.title}>معلومات الحساب الاساسية</h4>
      <p className={styles.description}>تتضمن هذه الإعدادات معلومات أساسية عن حسابك.</p>

      {/* FORM PROFILE SECTION */}
      <div className={styles.layoutForm}>
        {/* ROW 1: Name and Email */}
        <div className={styles.flexRow}>
          <div className={styles.flexColStart}>
            <label className={styles.label}>
              <img src="/images/icons/dashboard/user/user.png" alt="" /> الاسم الكامل
            </label>
            <input
              type='text'
              className={styles.input}
              placeholder="مثال: محمد صافي"
              value={formData.fullName}
              onChange={handleFieldChange('fullName')}
            />
          </div>
          
          <div className={styles.flexColStart}>
            <label className={styles.label}>
              <img src="/images/icons/dashboard/gmail.png" alt="" /> البريد الالكتروني
            </label>
            <input
              type='email'
              className={styles.input}
              placeholder='example@email.com'
              value={formData.email}
              onChange={handleFieldChange('email')}
            />
          </div>
        </div>

        {/* ROW 2: Birth Date and Phone */}
        <div className={styles.flexRow}>
          {/* Date of Birth مع التقويم */}
          <div className={styles.flexColStart}>
            <label className={styles.label}>
              <img src='/images/icons/dashboard/calendar.svg' alt="" /> تاريخ الميلاد
            </label>
            <div className={styles.calendarContainer}>
              {/* حقل التاريخ المخصص */}
              <input
                type="text"
                className={styles.customDateInput}
                placeholder="22/05/2025"
                value={formatDate(formData.date)}
                onClick={() => setIsCalendarOpen(true)}
                readOnly
              />
              
              {/* زر التقويم */}
              <button
                ref={calendarButtonRef}
                type="button"
                className={styles.calendarButton}
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              >
                <img src='/images/icons/dashboard/calendar.svg' alt='فتح التقويم' />
              </button>

              {/* نافذة التقويم المنبثقة */}
              {isCalendarOpen && (
                <div ref={calendarRef} className={styles.calendarPopup}>
                  <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    inline
                    locale="ar"
                    dateFormat="yyyy/MM/dd"
                    maxDate={new Date()}
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    yearDropdownItemNumber={100}
                    renderCustomHeader={({
                      date,
                      changeYear,
                      changeMonth,
                      decreaseMonth,
                      increaseMonth,
                      prevMonthButtonDisabled,
                      nextMonthButtonDisabled
                    }) => (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '10px'
                        }}
                      >
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                          <img src="/images/icons/ChevronRight.png" alt="السابق" style={{ transform: 'rotate(180deg)' }} />
                        </button>
                        <span>
                          {date.toLocaleDateString('ar-EG', { month: 'long', year: 'numeric' })}
                        </span>
                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                          <img src="/images/icons/ChevronRight.png" alt="التالي" />
                        </button>
                      </div>
                    )}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Phone Number (كما هو) */}
          <div className={styles.flexColStart}>
            <label className={styles.label}>
              <img src="/images/icons/dashboard/call.svg" alt="" /> رقم الهاتف
            </label>
            <div className={styles.phoneContainer}>
              <input
                type="tel"
                className={styles.phoneInput}
                placeholder="5XX XXX XXX"
                value={formData.phone}
                onChange={handleFieldChange('phone')}
              />

              <button
                ref={phoneButtonRef}
                type="button"
                className={styles.phoneButton}
                onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
              >
                <div className={styles.phoneButtonContent}>
                  <span className={styles.prefixText}>+{selectedCountry.prefix}</span>
                  <div className={styles.divider} />
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className={styles.flagIcon}
                  />
                </div>
                <img
                  src="/images/icons/ChevronRight.png"
                  alt=""
                  className={styles.chevronIcon}
                  style={{
                    transform: isPhoneDropdownOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                  }}
                />
              </button>

              {/* Phone Country Dropdown */}
              {isPhoneDropdownOpen && (
                <div ref={phoneDropdownRef} className={styles.dropdown}>
                  {countriesWithFlages.map((country) => (
                    <button
                      key={country.prefix}
                      type="button"
                      className={selectedCountry.prefix === country.prefix ? styles.dropdownItemActive : styles.dropdownItem}
                      onClick={() => handleCountrySelect(country)}
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className={styles.flagIcon}
                      />
                      <div className={styles.dropdownItemContent}>
                        <span className={styles.countryName}>{country.name}</span>
                        <span className={styles.countryPrefix}>+{country.prefix}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Student Description */}
        <div className={styles.flexColStart}>
          <label className={styles.label}>
            <img src='/images/icons/dashboard/course-icon/course-icon.png' alt='' /> وصف الطالب
          </label>
          <textarea
            className={styles.textarea}
            placeholder='اكتب وصف ما'
            value={formData.detail}
            onChange={handleFieldChange('detail')}
          />
        </div>

        {/* Volunteer Information */}
        {status === 'volunteer' && (
          <div className={styles.flexColStart}>
            <h4 className={styles.title}>معلومات التطوع</h4>
            <p className={styles.description}>تتضمن هذه الإعدادات معلومات التطوع الاساسية والمهمة</p>
            <label className={styles.label}>اكتب لنا الايام المتاح بها والساعات المتاحة</label>
            <textarea
              className={styles.textarea}
              placeholder=''
              value={formData.time}
              onChange={handleFieldChange('time')}
            />
          </div>
        )}

        {/* ROW 3: Gender and Residence */}
        <div className={styles.flexRow}>
          {/* Gender */}
          <div className={styles.flexColStart}>
            <label className={styles.label}>الجنس</label>
            <select
              className={styles.select}
              style={selectStyle}
              onFocus={() => setStageFocused(true)}
              onBlur={() => setStageFocused(false)}
              value={formData.sex}
              onChange={handleFieldChange('sex')}
            >
              <option value="">اختر الجنس</option>
              <option value="male">ذكر</option>
              <option value="female">انثى</option>
            </select>
          </div>

          {/* Residence */}
          <div className={styles.flexColStart}>
            <label className={styles.label}>مكان الاقامة</label>
            <div style={{ width: '100%' }}>
              <button
                ref={countryButtonRef}
                type="button"
                className={styles.phoneButton}
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                style={{ width: '100%', borderRadius: '8px', borderRight: '1px solid #70838766' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                      src={selectedResidence.flag}
                      alt={selectedResidence.name}
                      className={styles.flagIcon}
                    />
                    <span className={styles.countryName}>{selectedResidence.name}</span>
                  </div>
                  <img
                    src="/images/icons/ChevronRight.png"
                    alt=""
                    className={styles.chevronIcon}
                    style={{
                      transform: isCountryDropdownOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                    }}
                  />
                </div>
              </button>

              {/* Residence Dropdown */}
              {isCountryDropdownOpen && (
                <div ref={countryDropdownRef} className={styles.dropdownFull}>
                  <input
                    type="text"
                    placeholder="ابحث عن دولة..."
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {filteredCountries.map((country) => (
                    <button
                      key={country.prefix}
                      type="button"
                      className={selectedResidence.prefix === country.prefix ? styles.dropdownItemResidenceActive : styles.dropdownItemResidence}
                      onClick={() => handleResidenceSelect(country)}
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className={styles.flagIcon}
                      />
                      <span className={styles.countryName}>{country.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Academic Stage */}
        <div className={styles.flexColStart}>
          <label className={styles.label}>المرحلة الدراسية</label>
          <select
            className={styles.select}
            style={selectStyle}
            onFocus={() => setStageFocused(true)}
            onBlur={() => setStageFocused(false)}
            value={formData.academicStage}
            onChange={handleFieldChange('academicStage')}
          >
            <option value="">اختر المرحلة</option>
            <option value="highschool">بكلوريا</option>
            <option value="university">طالب جامعي</option>
            <option value="graduate">خريج</option>
          </select>
        </div>

        {/* CV Upload */}
        <div className={styles.flexColStart}>
          <label className={styles.label}>السيرة الذاتية (CV)</label>
          <p className={styles.smallText}>من فضلك يجب أن يكون الملف معبر واحترافي</p>
          <div className={styles.inputFile}>
            <label htmlFor="cv-upload" className={styles.inputFileButton}>
              <img src='/images/icons/add.png' alt='إضافة ملف' />
            </label>
            <input
              id="cv-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              style={{ display: 'none' }}
              onChange={handleFieldChange('cv')}
            />
            {formData.cv && (
              <span className={styles.fileName}>{formData.cv.name}</span>
            )}
          </div>
        </div>
      </div>

      {/* DELETE ACCOUNT SECTION */}
      <h4 className={styles.title}>حذف الحساب</h4>
      <p className={styles.description}>يؤسفنا ان نراك تغادر!</p>
      <p className={styles.description}>
        يرجى الملاحظة: حذف حسابك وبياناتك الشخصية دائم ولا يمكن التراجع عنه. لن تتمكن منصة ادراك من استعادة حسابك أو البيانات التي تم حذفها.
      </p>
      <p className={styles.description}>
        قد تفقد أيضًا الوصول إلى الشهادات الموثّقة وبيانات اعتماد البرنامج الأخرى مثل شهادات التخصصات. إذا كنت ترغب بعمل نسخة من السجلات الخاصة بك قبل متابعة الحذف ، قم باتّباع الإرشادات الخاصة بـ 
        <a href="/ptint" className={styles.certificateLink}>طباعة او</a>
        <a href="/download" className={styles.certificateLink}>تنزيل شهادة</a>
      </p>
      <button className={styles.deleteButton}>حذف الحساب</button>
    </div>
  );
}

export default Profile;