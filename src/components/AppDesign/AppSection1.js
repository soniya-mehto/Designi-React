import React from 'react'
import CardSection1 from '../CardSection1/CardSection1'
import "../../Styles/cardOuterContainer.css"
import { appCardSection1Data } from '../data';
export default function AppSection1() {
    return (
        <div className="cardOuterContainer">
            <section className="cardsContainer">

                {appCardSection1Data.map((cardData) => {
                    return (
                        <CardSection1
                            key={cardData.id}
                            title={cardData.title}
                            paraDesc={cardData.desc}
                            imageSrc={cardData.imglink}
                        />
                    );
                })}
            </section>
        </div>
    )
}
