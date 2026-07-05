import React from 'react'
import '../Css/IntroductionSection.css'
import { LaptopMinimalCheck } from 'lucide-react';
import FrontEndLogo from '../assets/Images/FrontEndLogo.png'
import { Link } from 'react-router-dom';
const IntroductionSection = () => {
  return (
    <>
    <section id='section'>
        <div className="container">
           
                <div className="row">
                    <div className="col-12 col-lg-6 col-md-6 mt-3">
                  
                         <div className=" ">Hii, My Name is</div>
                <p className='fs-1 pt-0 fw-bolder'>ANIK KUMAR GUPTA</p>
                <p className='fs-4'>I am a React Devloper</p>
                <p className='text-break'>I design and develop responsive websites that <br /> provide a seamless experience across mobile, tablet, and desktop devices.</p>
           <Link to="/projects"> <button className='btn btn-info m-3 text-white'>Explore Projects</button></Link>
            
                    </div>
                     <div className="col-12 col-lg-6 col-md-6 ">
                       <img src={FrontEndLogo} className="img-fluid" alt="image" id='frontEnd-logo'/>
                     </div>
           
              
              </div>
            </div>
        
    </section>


      
    </>
  )
}

export default IntroductionSection
