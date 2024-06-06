// import React from 'react'
// import Email from '../main-section/hero-section/social/Email'
// import Github from '../main-section/hero-section/social/Github'
// import Linkedin from '../main-section/hero-section/social/Linkedin'
// import Facebook from '../main-section/hero-section/social/Facebook'
// import "../../styles/ContactForm.scss"

// function ContactForm() {
//   return (
//         <div className='contact-form'>
//             <form>
//                 <div className='contact-section-1'>
//                     <input type="text" name='name' placeholder='Your name'/>
//                     <input type="text" name='email' placeholder='Email'/>
//                     <input type="text" name='link' placeholder='Your website (If exists)'/>
//                     <input type="text" name='name' placeholder='How can I help?'/>
//                     <div className='contact-subsection-1'>
//                         <button>Get In Touch</button>
//                         <a href="https://github.com/Sreejithk1996" target='blank'>
//                             <div className='git'>
//                                 <Github fill='#00000' width='25px' height = '25px'/>
//                             </div>
//                         </a>
//                         <a href="https://www.linkedin.com/in/sreejith-k-a73362187/">
//                             <div className='link'>
//                                 <Linkedin fill='#00000' width='25px' height = '25px'/>
//                             </div>
//                         </a>
//                         <a href="https://www.facebook.com/sreejith.kumar.1042/">
//                             <div className='face'>
//                                 <Facebook fill='#00000' width='25px' height = '25px'/>
//                             </div>
//                         </a>
//                         <a href="mailto:sreekumar1996@gmail.com" target='blank'>
//                             <div className='email' >
//                                 <Email fill='#00000' width='25px' height = '25px'/>
//                             </div>
//                         </a>
//                     </div>
//                 </div>
//             </form>
//             <div className='contact-section-2'>
//                 <p className='contact-para-1'>Let's <label>talk</label> for</p>
//                 <p className='contact-para-1'>Something special</p>
//                 <p className='contact-para-2'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
//                 <p className='contact-para-3'>sreekumar1996@gmail.com</p>
//                 <p className='contact-para-3'>+91 9544897721</p>
//             </div>
//         </div>
//   )
// }

// export default ContactForm



import React, { useState } from 'react';
import Email from '../main-section/hero-section/social/Email';
import Github from '../main-section/hero-section/social/Github';
import Linkedin from '../main-section/hero-section/social/Linkedin';
import Facebook from '../main-section/hero-section/social/Facebook';
import "../../styles/ContactForm.scss";
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    link: '',
    help: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await emailjs.sendForm("service_62j1pog", "template_jerq73o", e.target, "JUT9b8P29rD3c0r5H");
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  
    setFormData({
      name: '',
      email: '',
      link: '',
      help: '',
    });
  };

  return (
    <div className='contact-form'>
      <form onSubmit={handleSubmit}>
        <div className='contact-section-1'>
          <input
            type="text"
            name='name'
            placeholder='Your name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name='link'
            placeholder='Your website (If exists)'
            value={formData.link}
            onChange={handleChange}
          />
          <input
            type="text"
            name='help'
            placeholder='How can I help?'
            value={formData.help}
            onChange={handleChange}
          />
          <div className='contact-subsection-1'>
            <button type="submit">Get In Touch</button>
            <a href="https://github.com/Sreejithk1996" target='blank'>
              <div className='git'>
                <Github fill='#00000' width='25px' height='25px' />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/sreejith-k-a73362187/">
              <div className='link'>
                <Linkedin fill='#00000' width='25px' height='25px' />
              </div>
            </a>
            <a href="https://www.facebook.com/sreejith.kumar.1042/">
              <div className='face'>
                <Facebook fill='#00000' width='25px' height='25px' />
              </div>
            </a>
            <a href="mailto:sreekumar1996@gmail.com" target='blank'>
              <div className='email'>
                <Email fill='#00000' width='25px' height='25px' />
              </div>
            </a>
          </div>
        </div>
      </form>
      <div className='contact-section-2'>
        <p className='contact-para-1'>Let's <label>talk</label> for</p>
        <p className='contact-para-1'>Something special</p>
        <p className='contact-para-2'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
        <p className='contact-para-3'>sreekumar1996@gmail.com</p>
        <p className='contact-para-3'>+91 9544897721</p>
      </div>
    </div>
  );
}

export default ContactForm;
