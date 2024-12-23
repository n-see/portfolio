'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e:React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm('service_44504wx', 'template_j5yqqth', form.current!, {
        publicKey: 'yivAVSDxTdzYkfh1C',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <div className='container'>
        <div className="row">
            
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
    </form>
        </div>
    </div>
   
    
    </>
  );
};