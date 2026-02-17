import classes from '../auth.module.css';
import { useState } from 'react';
const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    return <div className={classes.auth_container}>
        <div className={classes.header}>
            <h1>انشاء كلمة مرور جديدة</h1>
            <p className={classes.header_p}>يجب أن تكون كلمة المرور الجديدة مختلفة عن كلمات المرور الأخرى.</p>
        </div>
        <div className={classes.auth_body}>
            <div className={classes.form_container}>
                <form className={classes.form}>
                    <div className={classes.form_inputs}>
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
                                        placeholder='ادخل كلمة المرور'
                                    />
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
                        </div>
                        <div className={classes.input_container_with_forgot}>
                            <div className={classes.input_container}>
                                <div className={classes.label_with_vlidation_wrapper}>
                                    <label className={classes.input_label}>تأكيد كلمة المرور</label>
                                    <p className={classes.validation_p}>6 أحرف على الأقل من فضلك يجب أن تحتوي على رموز أيضًا</p>
                                </div>
                                <div className={classes.input_with_icon}>
                                    <input
                                        className={classes.form_input}
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='ادخل كلمة المرور'
                                    />
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
                        </div>
                    </div>
                    <div className={classes.button_wrapper}>
                        <button className={classes.submit_button}>انشاء كلمة مرور جديدة</button>
                        <button className={classes.cancel_button}>الغاء</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
export default NewPassword;