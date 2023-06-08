import React from 'react'
import AboutUs from '../assets/images/AboutUs-img.jpg.png';

const About = () => {
  return (
    <>
        <section className='about' id='about'>
            <h1 className='heading'>
                <span>About</span> Us
            </h1>

            <div className='row'>
                <div className='image'>
                    <img src={AboutUs} alt="" />
                </div>
                <div className='content'>
                    <h3>What makes Our Food Special</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</p>

                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <a href="#" className='btn'>Learn More</a>
                </div>

                

            </div>

        </section>
    </>
  )
}

export default About