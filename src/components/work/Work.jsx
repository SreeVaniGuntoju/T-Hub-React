import React from "react";

import service1 from '..//..//assets//Clip2.jpg';
const Work = () => {
  return (
    <section id="work">
      <div className="container flex-center">
        <div className="head-box flex-center">
          <h2>Work</h2>
          <p>Our Service</p>
        </div>
        <div className="item-container flex-center">
          <div className="box major flex-center">
            <p>Flexible Online Reservation</p>
            <div className="card">
               <div className="card-item ">
                  <img className="image" src={service1}  />
                  <div className="content">
                    <a className="link" href="mailto:guntojusreevani1810@gmail.com">
                      Call and Reserve Table
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
