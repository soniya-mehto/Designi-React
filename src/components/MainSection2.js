import React from 'react';
import Section2 from './Section2'

export default function MainSection2() {
  return (
    <main>
      <section className="ProjectLinkGrid__StyledProjectGrid-sc-15ocfs4-0 mainSection2">

        <Section2 backgImgUrl="url(https://cdn.sanity.io/images/pc8s19ha/production/0e1cb82ab2c1547900bd46743845335241a9cd24-541x308.jpg)"
          projectType="Web Design" routeTo="/webDesign"
        />

        <Section2 backgImgUrl="url(https://cdn.sanity.io/images/pc8s19ha/production/0eebae0a61b55540c4099ea7425373b8a1ee46d2-541x308.jpg)"
          projectType="App Design" routeTo="/appDesign"
        />

        <Section2 backgImgUrl="url(https://cdn.sanity.io/images/pc8s19ha/production/ed8c19f76997401ddb2d149f317ad2b000142ece-541x308.jpg)"
          projectType="Graphic Design" routeTo="graphicDesign"
        />

      </section>
    </main>
  )
}
