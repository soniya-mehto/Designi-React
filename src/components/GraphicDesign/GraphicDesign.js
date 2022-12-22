import React from 'react';
import Header from '../Header/Header'
import { headerData } from '../data';
import GraphicSection1 from './GraphicSection1'
import GraphicSection2 from './GraphicSection2'

export default function GraphicDesign() {
    document.title = "Graphic Design - Designo";
    return (
        <>
            {
                headerData.filter(data => data.id === 2).map(data => {
                    return(
                        <Header
                            key = {data.id}
                            projectType = {data.projectType}
                            desc = {data.desc}
                        />
                    )
                })
            }
            <GraphicSection1 />
            <GraphicSection2 />
        </>
    )
}
