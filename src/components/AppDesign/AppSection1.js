import React from 'react'
import CardSection1 from '../CardSection1/CardSection1'
import "../../Styles/cardOuterContainer.css"

export default function AppSection1() {
    const imglink1 = "https://cdn.sanity.io/images/pc8s19ha/production/8e936250bc76e1d57549a0f33861495e48eed651-700x640.jpg?w=700&h=640&auto=format";
    const imglink2 = "https://cdn.sanity.io/images/pc8s19ha/production/72af176586dff7c1c7a60321d58391619aabebbd-700x640.jpg?w=700&h=640&auto=format";
    const imglink3 = "https://cdn.sanity.io/images/pc8s19ha/production/6e5b2576e37f94013f897f75d4c31a9e30a46ae9-700x640.jpg?w=700&h=640&auto=format";
    const imglink4 = "https://cdn.sanity.io/images/pc8s19ha/production/027a9f1e674d42040fe6738b525cfd0c87084c12-700x640.jpg?w=700&h=640&auto=format";
    const imglink5 = "https://cdn.sanity.io/images/pc8s19ha/production/e95ae3961f4204c24baaa24c32471aeb7e7c47bd-700x640.jpg?w=700&h=640&auto=format";
    
    const desc1 = "A VR experience app made for Loopstudios";
    const desc2 = "Get to meet your favorite internet superstar with the faceit app";
    const desc3 = "Solving the problem of poor indoor air quality by filtering the air";
    const desc4 = "Product that lets you edit your favorite photos and videos at any time";
    const desc5 = "A todo app that features cloud sync with light and dark mode";

    return (
        <div className="cardOuterContainer">
            <section className="cardsContainer">

                <CardSection1 title="Loopstudios "
                    paraDesc={desc1}
                    imageSrc={imglink1}
                />
                <CardSection1 title="Faceit"
                    paraDesc={desc2}
                    imageSrc={imglink2}
                />
                <CardSection1 title="Airfilter"
                    paraDesc={desc3}
                    imageSrc={imglink3}
                />
                <CardSection1 title="Eyecam"
                    paraDesc={desc4}
                    imageSrc={imglink4}
                />
                <CardSection1 title="Todo"
                    paraDesc={desc5}
                    imageSrc={imglink5}
                />

            </section>
        </div>
    )
}
