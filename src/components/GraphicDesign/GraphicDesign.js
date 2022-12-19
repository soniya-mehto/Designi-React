import React from 'react';
import Header from '../Header/Header'
import GraphicSection1 from './GraphicSection1'
import GraphicSection2 from './GraphicSection2'

export default function GraphicDesign() {
    document.title = "Graphic Design - Designo";
    return (
        <>
            <Header projectType="Graphic Design" desc="We deliver eye-catching branding materials that are tailored to meet your business objectives." />
            <GraphicSection1 />
            <GraphicSection2 />
        </>
    )
}
