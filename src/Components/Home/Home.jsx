import React from 'react'
import Navbar from '../Navbar/Navbar'
import Styles from './Home.module.css'

function Home() {
    return (
        <div>
          <div className={Styles.container}>
            <Navbar />
            <div>
                <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/contact_icon_mo8tpl.png" alt=""/>
                <h3>Nigeria: +2348063343728 
                International: +23480633437
                   
                </h3>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      );
}

export default Home