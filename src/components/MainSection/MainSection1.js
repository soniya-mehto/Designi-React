import React from 'react';
import {Link} from 'react-router-dom';
import '../../Styles/mainSection1.css'

export default function MainSection1() {
  return (
    <main>
      <section className="mainSection1">
        <div className="col-1">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>With over 10 years in the industry, we are experienced in creating fully responsive websites,
            app design, and engaging brand experiences. Find out more about our services.</p><Link
              className=" cardButton" to="/">Learn more</Link>
        </div>

        <div className="col-2">
          <div data-image-wrapper="" style={{ width: '624px', height: '913px' }} 
          >
            <div aria-hidden="true" data-placeholder-image style={{backgroundImage:`url(https://cdn.sanity.io/images/pc8s19ha/production/78b17259be35ccb7f22ff89d7dba15719dfb48b1-624x913.png?w=624&h=913&auto=format)`, opacity: '1', transition: "opacity 500ms linear 0s", backgroundColor:'', width: '624px', height: '913px', position: 'relative', objectFit: 'cover' }}>
            </div>
           
        </div>
        </div>

      </section>
    </main>
  );
}
