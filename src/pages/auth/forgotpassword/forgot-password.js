import classes from '../auth.module.css';

const ForgotPassword = () => {
    return <div className={classes.auth_container}>
        <div className={classes.header}>
            <h1>هل نسيت كلمة المرور الخاصة بك؟</h1>
            <p className={classes.header_p}>أدخل بريدك الإلكتروني الشخصي لإكمال العملية الآن!</p>
        </div>
        <div className={classes.auth_body}>
            <div className={classes.form_container}>
                <form className={classes.form}>
                    <div className={classes.form_inputs}>
                        <div className={classes.input_container}>
                            <label className={classes.input_label}>البريد الالكتروني</label>
                            <input className={classes.form_input} type='text' placeholder='ادخل البريد الالكتروني' />
                        </div>
                    </div>
                    <div className={classes.button_wrapper}>
                        <button className={classes.submit_button}>التالي</button>
                        <button className={classes.cancel_button}>الغاء</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
export default ForgotPassword;