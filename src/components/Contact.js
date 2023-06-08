import React from 'react'
import {FiUser} from 'react-icons/fi';
import {MdFastfood} from 'react-icons/md';
import {BsFillTelephoneInboundFill} from 'react-icons/bs';


const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <h1 className='heading'>
            <span>Contact</span> Us
        </h1>

        <div className='row'>
        <iframe class='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14306.892281488623!2d28.2442225!3d-26.3030761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95196c69b7d575%3A0x852ad6135b34960e!2sDawn%20Park%20Chicken%20and%20Chips!5e0!3m2!1sen!2sza!4v1686222626890!5m2!1sen!2sza" allowfullscreen="" loading="lazy"></iframe>

        <form>
           <h3>Get in touch</h3> 
           <div className='inputBox'>
            <span> <FiUser/> </span>
            <input type="text" placeholder='Name' />
           </div>

           <div className='inputBox'>
            <span> <MdFastfood/> </span>
            <input type="text" placeholder='Enter your Order'/>
           </div>

           <div className='inputBox'>
            <span> <BsFillTelephoneInboundFill/> </span>
            <input type="number" placeholder='Enter Your Phone number' />
           </div>

           <input type="submit" value="Order Now" className='btn' />
        </form>

        </div>

        
    </section>
  )
}

export default Contact