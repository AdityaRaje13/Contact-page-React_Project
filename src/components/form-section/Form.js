import React from 'react';

export default function Form() {
  return (
    <>
    
        <div className="container d-flex align-items-center justify-content-center">

            <div className="frm">
                <div>
                    <button className='btn'>Call us : +91-25689-35689</button>
                    <button className='btn mx-4'>Email : xyz@gmail.com</button> 
                </div>

                <div>
                    <button className='wide btn'>Via Email Form</button>
                </div>

                <div className='frm-input'>
                    <input type="text" placeholder='Enter Your Name...' />
                    <input type="email" placeholder='Enter Your Email...' />
                    <textarea name="msg" id="msg" cols="30" rows="4" placeholder='Enter Your Message...'></textarea>
                </div>

                <div>
                    <button className='submit btn'>Submit</button>
                </div>
            </div>

            <div className="frm-img">
                <img src="/images/Service.svg" width={'500px'} height={'400px'}/>
            </div>

        </div>

    </>
  )
}
