import './Form.css';
// import Navbar from './navbar';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useToast } from '../../context/ToastContext';
import { initialAuthState } from '../../Reducers/auth-reducer';
import countriesWithFlages from '../../dashboard/countriesWithFlages';
import { useProjects } from '../../context/volunteer-projects-context';

function ApplicationForMembership() {
  const { projectId: id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useProjects();
  const { showHideToast } = useToast();
  
  // ====== STATES ======
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [project, setProject] = useState(null); // تحويل project إلى state

  const [formData, setFormData] = useState({
    user: initialAuthState.currentUser,
    project: '',
    name: '',
    phone: '',
    prefix: '',
    AvailableTime: '',
    possibilities: ''
  });

  const [selectedCountry, setSelectedCountry] = useState({
    prefix: '963',
    name: 'سوريا',
    flag: '/images/icons/syria.png'
  });

  // ====== FUNCTIONS ======

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem('volunteer-project')) || [];
    const foundProject = projects.find(proj => proj.id.toString() === id);
    if (foundProject) {
      setProject(foundProject);
      console.log('بيانات المشروع:', foundProject);
    }
  }, [id]); // إضافة id كمصدر اعتماد

  const handleFieldChange = (fieldName) => (e) => {
    setFormData(prev => ({ ...prev, [fieldName]: e.target.value }));
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handlePrevious = () => {
    navigate(-1); // Go back one page
  };

  function handleProjectApplication(e) {
    e.preventDefault();
    
    if (!project) {
      showHideToast('المشروع غير موجود', 'error');
      return;
    }

    const updatedFormData = {
      ...formData,
      user: initialAuthState.currentUser,
      prefix: selectedCountry.prefix,
      project: project
    };

    if (!formData.name.trim()) {
      showHideToast('الرجاء قم بادخال الاسم', 'error');
      return;
    }

    if (!formData.phone.trim()) {
      showHideToast('الرجاء قم بادخال رقم الهاتف يشكل صحيح', 'error');
      return;
    }

    if (!formData.AvailableTime.trim()) {
      showHideToast('الرجاء قم بادخال الوقت المتاح', 'error');
      return;
    }

    if (!formData.possibilities.trim()) {
      showHideToast('الرجاء قم بادخال ما يمكنك تقديمه للمشروع', 'error');
      return;
    }

    try {
      dispatch({ type: 'ADD_JOIN_REQUEST', payload: updatedFormData });
      showHideToast('تم طلب الانتساب بنجاح', "success");
      setFormData({
        user: null,
        name: '',
        phone: '',
        AvailableTime: '',
        possibilities: ''
      });
      // navigate('/dashboard')
    } catch (error) {
      showHideToast('هناك خطا يرجى التحقق', "error");
    }
  }

  return (
    <div>
      {/* <Navbar /> */}
      <div style={{ padding: '10px' }}>
        <div className="app-a">
          <div className="request">
            <h6 style={{ fontSize: '24px', lineHeight: '100%', color: '#232323' }}>
              اضافة معلوماتك للانتساب للمشروع :
            </h6>

            <div className="form-request">

              {/* الاسم الكامل */}
              <label>الاسم الكامل</label>
              <div className="input-texthelp">
                من فضلك يجب أن يكون الاسم معبراً ولا يتجاوز 30 حرف.
              </div>
              <input
                type="text"
                placeholder="الاسم الكامل"
                value={formData.name}
                onChange={handleFieldChange('name')}
              />

              {/* رقم الهاتف مع اختيار الدولة */}
              <label>رقم الهاتف</label>
              <div className="phone-container" style={{ display: 'flex', width: '660px' }}>

                <input
                  type="tel"
                  placeholder="5XX XXX XXX"
                  value={formData.phone}
                  onChange={handleFieldChange('phone')}
                  style={{
                    flex: 1,
                    borderRadius: '0px 8px 8px 0px',
                    border: '1px solid #70838766',
                    borderLeft: 'none',
                    textAlign: 'right',
                    padding: '0 12px',
                    fontSize: '16px',
                  }}
                />

                {!isDropdownOpen ? (
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    style={{
                      width: 'auto',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '10px',
                      padding: '0 12px',
                      borderRadius: '8px 0 0 8px',
                      border: '1px solid #70838766',
                      borderRight: 'none',
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
                  </button>
                ) : (
                  <button
                    type="button"
                    style={{
                      width: 'auto',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '10px',
                      padding: '0 12px',
                      border: '1px solid #70838766',
                      borderRight: 'none',
                      borderRadius: '8px 0 0 8px',
                      backgroundColor: 'white',
                      cursor: 'pointer'
                    }}
                  >
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

                {/* القائمة المنسدلة */}
                {isDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '60px',
                    right: '450px',
                    width: '220px',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    backgroundColor: '#D9E4E5',
                    border: '1px solid #f0f0f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    zIndex: 1000
                  }}>
                    {countriesWithFlages.map((country) => (
                      <button
                        key={country.prefix}
                        type="button"
                        onClick={() => {
                          handleCountrySelect(country);
                          setIsDropdownOpen(!isDropdownOpen);
                        }}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                          padding: '12px',
                          border: 'none',
                          borderBottom: '1px solid #D9E4E5',
                          borderRadius: '0px',
                          backgroundColor: selectedCountry.prefix === country.prefix ? '#6DCDE5' : '#D9E4E5',
                          cursor: 'pointer',
                          textAlign: 'right'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                          <span style={{ fontSize: '14px', color: 'black' }}>+{country.prefix}</span>
                          <span style={{ fontWeight: 500, color: 'black' }}>{country.name}</span>
                        </div>
                        <img
                          src={country.flag}
                          alt={country.name}
                          style={{ width: '20px', height: '15px', borderRadius: '3px' }}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* الحقول الأخرى */}
              <label>اكتب لنا الايام المتاح بها والساعات المتاحة</label>
              <textarea
                placeholder="مثال: الأحد - الخميس من 4 إلى 7 مساءً"
                value={formData.AvailableTime}
                onChange={handleFieldChange('AvailableTime')}
              />

              {/* الإمكانيات */}
              <label>ماذا يمكن أن تقدم لهذا المشروع؟</label>
              <textarea
                placeholder="اكتب هنا..."
                value={formData.possibilities}
                onChange={handleFieldChange('possibilities')}
              />
            </div>
          </div>
        </div>

        {/* أزرار الإرسال */}
        <div className="button-request">
          <button
            type="button"
            onClick={handlePrevious}
            style={{
              width: '146px',
              border: '1px solid #D9E4E5',
              fontWeight: 500,
              background: '#fff',
              color: '#072127'
            }}
          >
            السابق
          </button>

          <button
            type="button"
            style={{ width: '396px', backgroundColor: '#6DCDE5', color: 'white' }}
            onClick={handleProjectApplication}
          >
            طلب الدخول كمتطوع
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplicationForMembership;