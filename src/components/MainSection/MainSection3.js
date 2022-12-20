import React from 'react';
import Section3Article from './Section3Article';
import '../../Styles/mainSection3.css'

export default function MainSection3() {

    const imglink1 = "https://cdn.sanity.io/images/pc8s19ha/production/f876397f7ce8b227d47e12ae1f90999e2ce2ab26-202x202.svg";
    const imglink2 = "https://cdn.sanity.io/images/pc8s19ha/production/090f49f6ac9d6838bf861c4be0d4b91edc5a1ed4-202x202.svg";
    const imglink3 = "https://cdn.sanity.io/images/pc8s19ha/production/dbd40a28b96dd1807f85bfe58433d8b28f7827fe-202x202.svg";

    const qualityH1 = "Passionate";
    const qualityH2 = "Resourceful";
    const qualityH3 = "Friendly";

    const descP1 = "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose.We merge art, design, and technology into exciting new solutions.";
    const descP2 = "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration.It guarantees superior results that fulfill our clients’ needs.";
    const descP3 = "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.";

  return (
      <main>
          <section className=" mainSection3">
              <Section3Article imgLink = {imglink1} quality = {qualityH1} desc = {descP1}/>
              <Section3Article imgLink={imglink2} quality={qualityH2} desc={descP2} />
              <Section3Article imgLink={imglink3} quality={qualityH3} desc={descP3} />
          </section>
      </main>
  )
}
