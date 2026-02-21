import './Form.css';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { useToast } from '../../context/ToastContext';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../../context/volunteer-projects-context';

function AddProject() {
  const navigate = useNavigate();
  const { dispatch  } = useProjects();
  const { showHideToast } = useToast();

  const context = useProjects();
  console.log('Full context:', context);
  console.log('Dispatch function?', typeof context.dispatch);
  // ====== STATES SECTION ========
  const [formData, setFormData] = useState({
    title: '',
    volunteers: '',
    startDate: null,
    shortDescription: '',
    fullDescription: ''
  });

  const [coverImage, setCoverImage] = useState(null);
  const [organizationImage, setOrganizationImage] = useState(null);
  const [projectImages, setProjectImages] = useState([]);
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [organizationImagePreview, setOrganizationImagePreview] = useState(null);

  // ======= FUNCTIONS ========
  const handleFieldChange = (fieldName) => (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  // دالة رفع صورة واحدة
  const handleSingleImageUpload = (type) => (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('حجم الصورة يجب أن يكون أقل من 5MB');
        return;
      }

      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        alert('صيغة الصورة غير مدعومة. استخدم JPG, PNG, GIF');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'cover') {
          setCoverImage(file);
          setCoverImagePreview(reader.result);
        } else if (type === 'organization') {
          setOrganizationImage(file);
          setOrganizationImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // دالة النشر
  const handlePublish = (e) => {
    e.preventDefault();
    // Validation
    if (!formData.title.trim()) {
      showHideToast("الرجاء إدخال عنوان المشروع", "error");
      return;
    }
    
    if (!formData.volunteers || isNaN(formData.volunteers) || parseInt(formData.volunteers) <= 0) {
      showHideToast("الرجاء إدخال عدد صحيح للمتطوعين", "error");
      return;
    }
    
    if (!formData.startDate) {
      showHideToast("الرجاء تحديد تاريخ البدء", "error");
      return;
    }
    
    if (!coverImage) {
      showHideToast("الرجاء رفع صورة الغلاف", "error");
      return;
    }
    
    if (!formData.shortDescription.trim()) {
      showHideToast("الرجاء إدخال الوصف القصير", "error");
      return;
    }
    
    if (!organizationImage) {
      showHideToast("الرجاء رفع صورة الجهة المنفذة", "error");
      return;
    }
    
    if (!formData.fullDescription.trim()) {
      showHideToast("الرجاء إدخال الوصف الكامل", "error");
      return;
    }

    // Create new project object
    const newProject = {
      id: Date.now().toString(),
      title: formData.title,
      volunteers: parseInt(formData.volunteers),
      startDate: format(formData.startDate.toISOString(),'yyyy/MM/dd'),
      shortDescription: formData.shortDescription,
      fullDescription: formData.fullDescription,
      coverImage: coverImagePreview,
      organizationImage: organizationImagePreview,
      projectImages: projectImages.map(img => img.url),
      createdAt: new Date().toISOString(),
      status: 'active'
    };

    // dispatch for reducer
    dispatch({ type: 'ADD_PROJECT', payload: newProject });
    
    // Show success message
    showHideToast("تم نشر المشروع بنجاح", "success");
    
    // Reset form
    setFormData({
      title: '',
      volunteers: '',
      startDate: null,
      shortDescription: '',
      fullDescription: ''
    });
    setCoverImage(null);
    setCoverImagePreview(null);
    setOrganizationImage(null);
    setOrganizationImagePreview(null);
    setProjectImages([]);
    
    // Navigate to projects page
    navigate('/volunteer-projects');
  };

  // Handle previous button
  const handlePrevious = () => {
    navigate(-1); // Go back one page
  };

  return (
    <div>
      <div style={{padding:'10px'}}>
        <div className='app-a'>
          <div className='request'>
            <h6 style={{fontSize:'24px', lineHeight:'100%', color:'#232323'}}>
              اضافة مشروع تطوعي جديد :
            </h6>

            <div className='form-request'>
              {/* عنوان المشروع */}
              <label>عنوان المشروع</label>
              <div className='input-texthelp'> من فضلك يجب أن يكون الاسم معبرا ولا يتجاوز 30 حرف .</div>
              <input 
                placeholder='دورة لغة انجليزية' 
                value={formData.title}
                onChange={handleFieldChange('title')}
                maxLength={30}
              />

              {/* عدد المتطوعين */}
              <label>عدد المتطوعين المطلوبين :</label>
              <input 
                type="number"
                placeholder='24'
                value={formData.volunteers}
                onChange={handleFieldChange('volunteers')}
                min="1"
              />

              {/* موعد البدء */}
              <label>تحديد موعد بدأ المشروع</label>
              <div style={{ position: 'relative', width: '100%' }}>
                <DatePicker 
                  selected={formData.startDate}
                  onChange={(date) => setFormData(prev => ({ ...prev, startDate: date }))}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="22/05/2025"
                  popperPlacement="bottom-end"
                  minDate={new Date()}
                  customInput={
                    <div className='date-input-container'>
                      <div className='date-display'>
                        <div className='date-real-input'>
                          <img src='/icons/chalender/calendar.svg' alt='' />
                          <div className='date-text' style={{color: formData.startDate ? '#072127':'#708387' }}>
                            {formData.startDate ? 
                              format(formData.startDate,'dd/MM/yyyy') : '22/05/2025'
                            }
                          </div>
                        </div>
                        <img src='/images/icons/ChevronRight.png' alt='' />
                      </div>
                    </div>
                  }
                />
              </div>
                
              {/* صورة الغلاف */}
              <label>صورة الغلاف</label>
              <div className='input-texthelp'> من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم .</div>
              <div className='input-image'>
                <div className='input-image-button'>
                  <input
                    id="cover-image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleSingleImageUpload('cover')}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="cover-image-upload" style={{ marginBottom: '6px', marginRight: '20px' }}>
                    {coverImagePreview ? (
                      <img 
                        src={coverImagePreview} 
                        alt="معاينة صورة الغلاف"
                        style={{ 
                          width: '67px', 
                          height: '67px', 
                          // borderRadius: '50%',
                          objectFit: 'cover' 
                        }}
                      />
                    ) : (
                      <img src='/images/icons/add.png' alt='إضافة صورة الغلاف'/>
                    )}
                  </label>
                </div>
              </div>

              {/* وصف قصير */}
              <label>وصف قصير للمشروع</label>
              <div className='input-texthelp'>يجب ان لا يتجاوز ال 50 حرف</div>
              <textarea 
                style={{height:'83px'}} 
                placeholder='وصف الدورة كامل ومعبر'
                value={formData.shortDescription}
                onChange={handleFieldChange('shortDescription')}
                maxLength={50}
              />

              {/* الجهة المنفذة */}
              <label>الجهة المنفذة :</label>
              <div className='input-texthelp'>من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم .</div>
              <div className='input-image'>
                <div className='input-image-button'>
                  <input
                    id="organization-image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleSingleImageUpload('organization')}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="organization-image-upload" style={{ marginBottom: '6px', marginRight: '20px' }}>
                    {organizationImagePreview ? (
                      <img 
                        src={organizationImagePreview} 
                        alt="معاينة صورة الجهة المنفذة"
                        style={{ 
                          width: '67px', 
                          height: '67px', 
                          // borderRadius: '50%',
                          objectFit: 'cover' 
                        }}
                      />
                    ) : (
                      <img src='/images/icons/add.png' alt='إضافة صورة الجهة المنفذة'/>
                    )}
                  </label>
                </div>
              </div>
                  
              {/* وصف كامل */}
              <label>وصف المشروع الكامل</label>
              <textarea 
                placeholder='وصف الدورة كامل ومعبر'
                value={formData.fullDescription}
                onChange={handleFieldChange('fullDescription')}
                style={{ minHeight: '120px' }}
              />
            </div>
          </div>
        </div>
                  
        {/* أزرار التنقل */}
        <div className='button-request'>
          <button 
            style={{ 
              width:'146px', 
              border: '1px solid #D9E4E5', 
              fontWeight:500,
              background:'#ffff', 
              color:'#072127'
            }}
            onClick={handlePrevious}
          >
            السابق
          </button>
          <button 
            style={{ width:'396px'}}
            onClick={handlePublish}
          >
            نشر المشروع
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProject;