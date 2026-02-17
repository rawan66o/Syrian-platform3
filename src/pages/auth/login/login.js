import classes from '../auth.module.css';
import { Link, NavLink } from 'react-router';
import { useState } from 'react';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return <div className={classes.auth_container}>
        <div className={classes.header}>
            <h1>تسجيل الدخول</h1>
            <p className={classes.header_p}>ليس لديك حساب بالمنصة السورية؟ <Link to='/register' className={classes.link}>انشاء حساب</Link></p>
        </div>
        <div className={classes.auth_body}>
            <div className={classes.o_auth_container}>
                <button>
                    <img className={classes.google_icon} src='/icons/google_icon/google.svg' alt='' />
                    <p className={classes.o_auth_p}>تسجيل عبر جوجل</p>
                </button>
                <button>
                    <img className={classes.apple_icon} src='/icons/apple_icon/apple.svg' alt='' />
                    <p className={classes.o_auth_p}>تسجيل عبر أبل</p>
                </button>
            </div>
            <div className={classes.or_separater}>
                or
            </div>
            <div className={classes.form_container}>
                <form className={classes.form}>
                    <div className={classes.form_inputs}>
                        <div className={classes.input_container}>
                            <label className={classes.input_label}>البريد الالكتروني</label>
                            <input className={classes.form_input} type='text' placeholder='ادخل البريد الالكتروني' />
                        </div>
                        <div className={classes.input_container_with_forgot}>
                            <div className={classes.input_container}>
                                <div className={classes.label_with_vlidation_wrapper}>
                                    <label className={classes.input_label}>كلمة المرور</label>
                                    <p className={classes.validation_p}>6 أحرف على الأقل من فضلك يجب أن تحتوي على رموز أيضًا</p>
                                </div>
                                <div className={classes.input_with_icon}>
                                    <input
                                        className={classes.form_input}
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='ادخل كلمة المرور' />
                                    <img
                                        className={classes.show_and_hide_icon}
                                        src={`${showPassword ?
                                            '/icons/on_click_hide_password/eye-slash.svg' :
                                            '/icons/on_click_show_password/eye.svg'}`}
                                        alt=''
                                        onClick={() => { setShowPassword(prev => !prev) }}
                                    />
                                </div>
                            </div>
                            <div className={classes.p_wrapper}>
                                <NavLink to="/forgot-password" className={classes.forgot_p}>هل نسيت كلمة السر ؟</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={classes.button_wrapper}>
                        <button className={classes.submit_button}>تسجيل الدخول</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
export default Login;