import React, { useRef } from 'react'
import { BsLinkedin, BsGithub, BsArrowRightShort } from "react-icons/bs";
import { TbSend } from 'react-icons/tb';
import {MdOutlineMail} from 'react-icons/md';



const Contact = () => {

  return (
    <section id="contact">
      <div className="container flex-center">
          <h2>Contact Us</h2>
      <div>
        <div>
        <h3 className='mini-title'>Talk to Us</h3>
        <div> 
            
      <div className='card'>
       <BsLinkedin/>
       <p>LinkedIn</p>
       <a target='_blank' href="https://www.linkedin.com/in/g-sreevani-96a389223">visit<BsArrowRightShort/></a>
      </div>
      <div className='card'>
       <BsGithub/>
       <p>Github</p>
       <a target='_blank' href="https://github.com/SreevaniGuntoju">visit<BsArrowRightShort/></a>
      </div>
      <div className='card'>
       <MdOutlineMail/>
       <p>EMail</p>
       <a target='_blank' href="mailto:guntojusreevani1810@gmail.com">visit<BsArrowRightShort/></a>
        </div>

        </div>
        </div>
        <div>
      <h3 className='mini-title'>Write your Feedback</h3>
      <form>
        <div className='message-info'>
        <label htmlFor="name">Name</label>
        <input type="text" name='to_name' id='name' placeholder='username' />
        </div>
        <div className='message-info'>
        <label htmlFor="email">Email</label>
        <input type="email" name='from_name' id='email' placeholder='user@gmail.com' />
        </div>
        <div className='message-info'>
        <label htmlFor="message">Feedback</label>
        <textarea id="message"  cols="30" rows="10" placeholder='Give your feedback' name='message'></textarea>
        </div>
        
        <button><a target='_blank' href="mailto:guntojusreevani1810@gmail.com">Send Message <TbSend/></a></button>
      </form>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact