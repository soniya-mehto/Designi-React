import React from 'react';
import './Styles/StylesMain.css'

export default function Header(props) {
  return (
      <header className="styles__CategoryHeader-pg0ppr-0 header">
          <h1>{props.projectType}</h1>
          <p>{props.desc}</p>
      </header>
  )
}
