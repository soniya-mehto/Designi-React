import React from 'react'
import CardSection1 from '../CardSection1/CardSection1'
import "../../Styles/cardOuterContainer.css"


export default function WebSection1() {
    const imglink1 = "https://cdn.sanity.io/images/pc8s19ha/production/861dcc6b601c75b40ef4b75a33f0e59123971fa9-700x640.jpg?w=700&h=640&auto=format";
    const imglink2 = "https://cdn.sanity.io/images/pc8s19ha/production/76294367e85af75d1f491a52a3600b83a8615537-700x640.jpg?w=700&amp;h=640&amp;auto=format";
    const imglink3 ="https://cdn.sanity.io/images/pc8s19ha/production/acdecc11f51bbf141aa77090365e5cd30b4c23bc-700x640.jpg?w=700&h=640&auto=format";
    const imglink4 ="https://cdn.sanity.io/images/pc8s19ha/production/fbe5f7ab0190ad9ffcf758994f4c004e43ee0912-700x640.jpg?w=700&h=640&auto=format";
    const imglink5 ="https://cdn.sanity.io/images/pc8s19ha/production/3b79a5993a2c1cf5f73a983fba945d93b72dbaec-700x640.jpg?w=700&h=640&auto=format";
    const imglink6 ="https://cdn.sanity.io/images/pc8s19ha/production/b06fd1a626d0a398d7744dfcf4baa67d73df1653-700x640.jpg?w=700&h=640&auto=format";

    const desc1 = "A multi-carrier shipping website for ecommerce businesses";
    const desc2 = "Site for low-cost money transfers and sending money within seconds";
    const desc3 = "A state-of-the-art music player with high-resolution audio and DSP effects";
    const desc4 = "Connects users with local contractors based on their location";
    const desc5 = "Blogr is a platform for creating an online blog or publication";
    const desc6 = "Get expert training in coding, data, design, and digital marketing";

    return (
        <div className=" cardOuterContainer">
            <section className="cardsContainer">

                <CardSection1 title="Express"
                    paraDesc={desc1}
                    imageSrc={imglink1}
                />
                <CardSection1 title="Transfer"
                    paraDesc={desc2}
                    imageSrc={imglink2}
                />
                <CardSection1 title="Photon"
                    paraDesc={desc3}
                    imageSrc={imglink3}
                />
                <CardSection1 title="Builder"
                    paraDesc={desc4}
                    imageSrc={imglink4}
                />
                <CardSection1 title="Blogr"
                    paraDesc={desc5}
                    imageSrc={imglink5}
                />
                <CardSection1 title="Camp"
                    paraDesc={desc6}
                    imageSrc={imglink6}
                />

            </section>
        </div>
    )
}
