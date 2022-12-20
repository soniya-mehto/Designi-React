import React from 'react';
import '../../Styles/StylesMain.css'
import '../../Styles/header.css'

export default function Header(props) {
  return (
      <header className=" header">
          <h1>{props.projectType}</h1>
          <p>{props.desc}</p>
      </header>
  )
}
