import React, {useState} from 'react';
import './Styles/StylesMain.css';

export default function Navbar() {
  const [ulClass, setUlState] = useState("");
  const [divClass, setDivClass] = useState("overlay");
  const [imgSrc, setImgSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzFEMUMxRSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDI0djRIMHpNMCA4aDI0djRIMHpNMCAxNmgyNHY0SDB6Ii8+PC9nPjwvc3ZnPg==");
  const handleOnClick = () => {
    if(ulClass==="")
    {setUlState("active");
    setDivClass("overlay-active");
    setImgSrc("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjA3MS4xTDE5LjkgMi45M2wtNy4wNzEgNy4wNyA3LjA3MSA3LjA3Mi0yLjgyOCAyLjgyOEwxMCAxMi44MjhsLTcuMDcxIDcuMDcxTC4xIDE3LjA3MSA3LjE3IDEwIC4xMDIgMi45MjkgMi45MjkuMWw3LjA3IDcuMDcgNy4wNzItNy4wN3oiIGZpbGw9IiMxRDFDMUUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");}
    else
    {
      setUlState("");
      setDivClass("overlay");
      setImgSrc("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzFEMUMxRSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDI0djRIMHpNMCA4aDI0djRIMHpNMCAxNmgyNHY0SDB6Ii8+PC9nPjwvc3ZnPg==");
    }

  }

  return (
    <div>
          <nav className="nav-bar-style nav-bar-style-2"><a aria-current="page" className="logoLink" href="/"><img
              src="data:image/png;base64,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"
              alt="logo" /></a>
              <ul className={ulClass}>
                  <li><a href="/">Our Company</a></li>
                  <li><a href="/">Locations</a></li>
                  <li><a href="/">Contact</a></li>
              </ul>
              <button className="toggle" onClick={handleOnClick}>
                <img
                  src={imgSrc}
                  alt="open menu" />
              </button>
              <div className={divClass}></div>
          </nav>
    </div>
  )
}
