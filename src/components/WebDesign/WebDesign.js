import React from 'react'
import Header from '../Header/Header'
import WebSection1 from './WebSection1'
import WebSection2 from './WebSection2'

export default function WebDesign() {
  document.title = "Web Design - Designo";
  return (
    <>
    <Header projectType="Web Design" desc="We build websites that serve as powerful marketing tools and bring memorable brand
              experiences."/>
    <WebSection1/>
    <WebSection2/>
    </>
  )
}
