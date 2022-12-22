import React from 'react'
import Section2 from '../CardSection2/Section2'
import "../../Styles/cardOuterContainer.css"
import "../../Styles/section2-card-container.css";
import { cardSection2Data } from '../data';

export default function WebSection2() {
        return (
        <div className="cardOuterContainer">
            <div className="section2-card-container">
                    {
                        cardSection2Data.filter(cardData => cardData.id !== 3).map(cardData => {
                            return (
                                <Section2
                                    backgImgUrl={cardData.backgImgUrl}
                                    projectType={cardData.projectType}
                                    routeTo={cardData.routeTo}
                                />
                            );
                        })
                    }
            </div>
        </div>

    )
}
