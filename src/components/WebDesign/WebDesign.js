import React from 'react'
import Header from '../Header/Header'
import { headerData } from '../data'
import WebSection1 from './WebSection1'
import WebSection2 from './WebSection2'


export default function WebDesign() {
  document.title = "Web Design - Designo";
  return (
    <>
      {
        headerData.filter(data => data.id === 3).map(data => {
          return (
            <Header
              key={data.id}
              projectType={data.projectType}
              desc={data.desc}
            />
          )
        })
      }
    <WebSection1/>
    <WebSection2/>
    </>
  )
}