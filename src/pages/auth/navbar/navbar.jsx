import './navbar.css'

function Navbar() {
   return (
    <div className='nav-layout'>
      <div className='nav-logo'>
         <img src="/images/logo/spLogo12.png" alt="logo" />
         <div className='lineee'/>
         <h6>الصفحة الرئيسية</h6>
      </div>
      <div className='nav-items'>
         <p>الدعم والمساعدة</p>
         <p>سياسة الخصوصية</p>
         <div className='lang_container'>
            <img className='lang_icon' src='/icons/lang_icon/global.svg' />
            <select className='lang_select'>
               <option>
                   العربية
               </option>
            </select>
         </div>
      </div>
    </div>
   ) 
}

export default Navbar;