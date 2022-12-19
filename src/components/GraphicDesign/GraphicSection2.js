import React from 'react';
import Section2 from '../CardSection2/Section2';


export default function GraphicSection2() {
    return (
        <div className="styles__Container-pg0ppr-3 iImhnI">
            <div className="styles__CategoryLinks-pg0ppr-4 section2-card-container">

                <Section2 backgImgUrl="url(https://cdn.sanity.io/images/pc8s19ha/production/0eebae0a61b55540c4099ea7425373b8a1ee46d2-541x308.jpg)"
                    projectType="App Design" routeTo="/appDesign"
                />

                <Section2 backgImgUrl="url(https://cdn.sanity.io/images/pc8s19ha/production/0e1cb82ab2c1547900bd46743845335241a9cd24-541x308.jpg)"
                    projectType="Web Design" routeTo="/webDesign"
                />
            </div>
        </div>
    )
}
