import React from 'react';
import { headerData } from '../data';
import Header from '../Header/Header'
import AppSection1 from './AppSection1'
import AppSection2 from './AppSection2'

export default function AppDesign() {
  document.title = "App Design - Designo";
  return (
      <>
          {
            headerData.filter(data => data.id === 1).map(data => {
              return (
                <Header 
                    key = {data.id}
                    projectType = {data.projectType}
                    desc = {data.desc}
                />
              );
            })
          }
          <AppSection1 />
          <AppSection2 />
      </>
  )
}