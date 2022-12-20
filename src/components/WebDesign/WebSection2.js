import React from 'react'
import Section2 from '../CardSection2/Section2'
import "../../Styles/cardOuterContainer.css"
import "../../Styles/section2-card-container.css";


export default function WebSection2() {
        return (
        <div className="cardOuterContainer">
            <div className="section2-card-container">
                <Section2 backgImgUrl="url(https://cdn.sanity.io/images/pc8s19ha/production/0eebae0a61b55540c4099ea7425373b8a1ee46d2-541x308.jpg)"
                        projectType="App Design" routeTo="/appDesign"
                />

                <Section2 backgImgUrl="url(https://cdn.sanity.io/images/pc8s19ha/production/ed8c19f76997401ddb2d149f317ad2b000142ece-541x308.jpg)"
                        projectType="Graphic Design" routeTo="/graphicDesign"
                />
            </div>
        </div>

    )
}
