// import React from "react";
import Navbar from "../Navbar/Navbar";
import Styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <div className={Styles.container}>
        <Navbar />
        <div className={Styles.contact_img}>
          <img
            src="https://res.cloudinary.com/dfeyofjln/image/upload/v1708933129/contact_icon_mo8tpl-removebg-preview_llxloh.png"
            width="60px"
            alt=""
          />
          <div className={Styles.contact}>
            <h3>Nigeria: +2348063343728</h3>
            <h3> International: +23480633437</h3>
          </div>
        </div>
        <div className={Styles.bottom_capture}>
          <h3>Come Enjoy the Serenity at </h3>
          <h4> College Quarters</h4>
        </div>
      </div>
      <section className={Styles.higlights}>
        <h2>Colleg Quarters Residences Highlights</h2>
        <p>Experience a new look of community, comfort and learning. SmileMore Quarters!</p>
        <div>

        </div>
      </section>
      <section>
        <div>
          <h3>Find your student residence near you</h3>
          <p>Book your accommodation near your University or College</p>
        </div>
       <div className={Styles.search}>
        <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/Component_2_iaomsx.png" alt="Serch bar"></img>
        <input type="text" placeholder="Search Residence"/>
       </div>
        <div className={Styles.Sample_residence}>
          <div>
            <div>
              <h3></h3>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
