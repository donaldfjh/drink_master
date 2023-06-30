import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async({request})=>{
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    // console.log(data);
    try {
        const response = await axios.post(newsletterUrl,data)
        toast.success(response.data.msg)
        return redirect('/')
    } catch(error){
        console.log(error);
        toast.error(error?.response?.data?.msg)
        return error
    }
    
}

const NewsLetter = () => {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
  return (
   <Form className='form'method='POST'>
    <h4 style={{textAlign:'center', marginBottom:'2rem'}}>Our NewsLetter</h4>
    {/* name */}
    <div className="form-row">
        <label htmlFor="name" className='form-label'>name</label>
        <input type="text" required className='form-input' name='name' id='name'/>
    </div>
    {/* LastName */}
    <div className="form-row">
        <label htmlFor="lastName" className='form-label'>Last Name</label>
        <input type="text" required className='form-input' name='lastName' id='lastName'/>
    </div>
    {/* Email */}
    <div className="form-row">
        <label htmlFor="email" className='form-label'>Email</label>
        <input type="text"  required className='form-input' name='email' id='email' defaultValue='test@test.com'/>
    </div>
    <button type='submit' 
    disabled={isSubmitting}
    className='btn btn-block' 
    style={{marginTop:'0.5rem'}}>{isSubmitting?'Submitting...' : 'Submit'}</button>
   </Form>
   
  )
}

export default NewsLetter
