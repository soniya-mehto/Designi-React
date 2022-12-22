import React from 'react';
import CardSection1 from '../CardSection1/CardSection1';
import "../../Styles/cardOuterContainer.css";
import {webCardSection1Data} from "./../data";


export default function WebSection1() {

    return (
        <div className=" cardOuterContainer">
            <section className="cardsContainer">

                {webCardSection1Data.map((carddata) => {
                    return (
                        <CardSection1
                            key={carddata.id}
                            title={carddata.title}
                            paraDesc={carddata.desc}
                            imageSrc={carddata.imglink}
                        />
                    );
                })}
            </section>
        </div>
    )
}
