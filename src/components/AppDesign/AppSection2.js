import React from 'react';
import Section2 from '../CardSection2/Section2';
import "../../Styles/cardOuterContainer.css"
import "../../Styles/section2-card-container.css";
import { cardSection2Data } from '../data';


export default function AppSection2() {
  return (
      <div className="cardOuterContainer">
          <div className="section2-card-container">

                {
                    cardSection2Data.filter(cardData => cardData.id !== 1).map(cardData => {
                        return(
                            <Section2 
                                key={cardData.id}
                                backgImgUrl= {cardData.backgImgUrl} 
                                projectType= {cardData.projectType}
                                subline={cardData.subline}
                                routeTo= {cardData.routeTo}
                            />
                        );
                    })
                }

              {/* <Section2 backgImgUrl="url(https://cdn.sanity.io/images/pc8s19ha/production/0e1cb82ab2c1547900bd46743845335241a9cd24-541x308.jpg)"
                  projectType="Web Design" routeTo="/webDesign"
              />

              <Section2 backgImgUrl="url(https://cdn.sanity.io/images/pc8s19ha/production/ed8c19f76997401ddb2d149f317ad2b000142ece-541x308.jpg)"
                  projectType="Graphic Design" routeTo="/graphicDesign"
              /> */}
          </div>
      </div>
  )
}
