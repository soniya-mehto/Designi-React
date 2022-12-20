import React from 'react'
import CardSection1 from '../CardSection1/CardSection1'
import "../../Styles/cardOuterContainer.css"


export default function GraphicSection1() {
    const imglink1 = "https://cdn.sanity.io/images/pc8s19ha/production/72b725dd4058439b306fdac9951f74500967dd68-700x640.jpg?w=700&h=640&auto=format";
    const imglink2 = "https://cdn.sanity.io/images/pc8s19ha/production/5cf9c5f61a00a391c1e88933bd77a02b47df6cef-700x640.jpg?w=700&h=640&auto=format";
    const imglink3 = "https://cdn.sanity.io/images/pc8s19ha/production/ba4be2bc8cf65c7efff444f7bc97a86d7a13f3af-700x640.jpg?w=700&h=640&auto=format";

    const desc1 = "A book cover designed for Tim Brown’s new release, ‘Change’";
    const desc2 = "A simple packaging concept made for Boxed Water";
    const desc3 = "A poster made in collaboration with the Federal Art Project";

    return (
        <div className="cardOuterContainer">
            <section className="cardsContainer">

                <CardSection1 title="Tim Brown"
                    paraDesc={desc1}
                    imageSrc={imglink1}
                />
                <CardSection1 title="Boxed Water"
                    paraDesc={desc2}
                    imageSrc={imglink2}
                />
                <CardSection1 title="Science!"
                    paraDesc={desc3}
                    imageSrc={imglink3}
                />

            </section>
        </div>
    )
}
