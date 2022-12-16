import React from 'react';
import Header from './Header'
import AppSection1 from './AppSection1'
import AppSection2 from './AppSection2'

export default function AppDesign() {
  document.title = "App Design - Designo";
  return (
      <>
          <Header projectType="App Design" desc="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."/>
          <AppSection1 />
          <AppSection2 />
      </>
  )
}
