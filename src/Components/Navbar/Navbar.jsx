// import React from 'react'
import Styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={Styles.container}>
          <div className={Styles.logo}>
            <img
              src="https://res.cloudinary.com/dfeyofjln/image/upload/v1705255997/COLLEGE_QUARTERS_LOGO-removebg-preview_1_uxu3ds.png"
              alt="Logo" width={"80px"}
            />
            <div className={Styles.line}></div>
            <i><h5>Student <br/> Residences</h5></i>
          </div>
          <div className={Styles.nav}>
             <li>Residences</li>
             <div className={Styles.line2}></div>
             <li>Book Now</li>
             <div className={Styles.line2}></div>
             <li>Refer & Earn</li>
             <div className={Styles.line2}></div>
             <li>Testimonials</li>
             <div className={Styles.line2}></div>
             <li>Universities</li>
             <div className={Styles.line2}></div>
             <li>LOGIN</li>
    
          </div>
        </div>
      );
}

export default Navbar