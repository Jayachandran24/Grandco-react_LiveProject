import { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errMessage, setErrMessage] = useState(null);
  // const [succMessage, setSuccMessage] = useState(null);


  const validateForm = (formValues) => {
    if (!formValues.name || !formValues.email || !formValues.message) {
      setErrMessage('Please fill in all fields*');
      return false;
    }
    // if (formValues.name || formValues.email || formValues.message) {
    //   setSuccMessage('successfully submitted')
    // }
    if (formValues.name.length < 5) {
      setErrMessage('Name must be at least 5 characters');
      return false;
    }
    if (formValues.subject.length < 10) {
      setErrMessage('Subject must be at least 10 characters');
      return false;
    }
    if (formValues.message.length < 10) {
      setErrMessage('Message must be at least 10 characters');
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      setErrMessage('Email is invalid');
      return false;
    }
    return true;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    // validate form
    if(!validateForm(formData)) return ;
    // Clear Error Message
    setErrMessage('');

    // if (validateForm(formData)) return ;
    // setErrMessage('done');
    

axios.post('http://localhost/Projects/grandco_react/public/contact.php', (formData))

.then(response => {
  console.log(response)
  console.log(response.data) 
  // message.success(response.data.message)
  })
  .catch((error) => {
    console.error(error);
    // message.error(error?.data?.error?.message);
  })

}


  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="box-shadow to-up">
            <form>
              {/* {
                succMessage && <div className='succmessage' style={{color:'green', fontWeight:'600', fontSize:'20px', marginBottom:'20px', letterSpacing:'1px'}}>{succMessage}</div>
              } */}
              {
                errMessage && <div className="messages" style={{color:'red'}}>{errMessage}</div>
              }

              <div className="controls row">

                <div className="col-12">
                  <div className="mb-40">
                    <h5 className="fw-600 text-black">Get in touch and we’ll get back to you as soon as we can. <br /> We look forward to hearing from you!</h5>
                  </div>
                </div>

                <div className="col-lg-6 md-mb30">
                  <div className="form-group mb-30">
                    <input id="form_name" type="text" name="name" placeholder="Name*" required="required" onChange={handleChange} value={formData.name} />
                  </div>

                  <div className="form-group mb-30">
                    <input id="form_email" type="email" name="email" placeholder="Email*" required="required" onChange={handleChange} value={formData.email} />
                  </div>

                  <div className="form-group">
                    <input id="form_subject" type="text" name="subject" placeholder="Subject*" required="required" onChange={handleChange} value={formData.subject} />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group sam-height">
                    <textarea id="form_message" name="message" placeholder="Message*" rows="4" required="required" onChange={handleChange} value={formData.message}></textarea>
                  </div>
                </div>

                <div className="col-12">
                  <div className="text-center mt-40">
                    <button type="submit" onClick={handleSubmit} className='bg-black'>
                      <span style={{color:'white'}}>Let&lsquo;s Talk</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form