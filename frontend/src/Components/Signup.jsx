import { useSelector, useDispatch } from 'react-redux'
import { toggleActions } from '../store/toggleSlice'
import { Paper } from '@mui/material';
import { registerapi } from '../apiRequests/authapis';

import { useFormik } from 'formik';
import * as Yup from 'yup';


const Signup = ({ onFormSwitch }) => {
    const currentform = useSelector(state => state.toggleReducer.form)
    const dispatch = useDispatch()
    const toggleHandle = () => {
        dispatch(toggleActions.changeform('login'))
    }
    const paperstyle = { padding: 20, height: '150h', width: 450, margin: '100px auto', }
    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     await registerapi("sd")
    const validationSchema = Yup.object({
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        mobile: Yup.number()
            .min(10, 'Must be  minimum 10 characters ')
            .required('Required'),


        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
            .min(6, 'Must be  minimum 6 characters ')
            .required('Required'),
        confirmPassword: Yup.string()
            .min(6, 'Must be  minimum 6 characters ')
            .required('Required'),


    })
    const formik = useFormik({
        initialValues: { name: '', email: '', mobile: '', password: '', confirmPassword: '' }
        ,
        validationSchema: validationSchema,
        onSubmit: values => {
            const body = formik.values
          
                body.mobile = parseInt(body.mobile)
                registerapi(body)
            console.log(values, "sett");
        },


    });


    // }
    return (
        <div className='auth-form-container App'>
            <Paper elevation={3} style={paperstyle} >
                <h2 className=" text-3xl font-bold"> Register</h2>



                <>

                    <form className='signup-form' onSubmit={formik.handleSubmit}>

                        <input size='30' type='text' placeholder='FullName' id='name' value={formik.values.name} name='name' onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label for='name' >  {formik.errors.name && formik.touched.name && formik.errors.name}   </label>

                        <input size='30' type='email' placeholder='youremail@gmail.com' id='email' name='email' onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <label for='email' >  {formik.errors.email && formik.touched.email && formik.errors.email}   </label>

                        <input size='30' type='tel' placeholder='Mobile' id='mobile' name='mobile' onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.mobile}
                        />

                        <label for='mobile' >  {formik.errors.mobile && formik.touched.mobile && formik.errors.mobile}   </label>

                        <input size='30' type='Password' placeholder='Enter your Password' id='password' name='password' onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password} />
                        <label for='Password' >  {formik.errors.password && formik.touched.password && formik.errors.password}   </label>

                        <input size='30' type='Password' placeholder='Repeat your Password ' id='confirmpassword' name='confirmPassword'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword} />
                        <label for='confirmpassword' >  {formik.errors.confirmPassword && formik.touched.confirmPassword && formik.errors.confirmPassword}   </label>
                        <button className='signup-btn' type='submit' disabled={formik.isSubmitting} > Register</button>
                    </form>

                    <button className='link-btn' onClick={toggleHandle} type="button"> Already  have an account ? Login</button>
                </>
            </Paper>
        </div >

    )

}
export default Signup