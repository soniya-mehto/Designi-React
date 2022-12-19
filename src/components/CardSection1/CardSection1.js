import React from 'react'

export default function CardWebSection(props) {
  return (
      <a href="/" className="styles__ProjectCard-pg0ppr-1 cardSection1">

          <div data-gatsby-image-wrapper className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
              <div style={{ maxWidth: '700px', display: 'block' }}>
                  <img alt="" aria-hidden="true"
                      src="data:image/svg+xml;charset=utf-8,%3Csvg 
                                height='640' width='700' 
                                xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                      style={{ maxWidth: '100%', display: 'block', position: 'static' }}
                  />
              </div>
              <div aria-hidden="true" data-placeholder-image
                  style={{ opacity: 0, transition: 'opacity 500ms linear 0s', backgroundColor: 'rgb(68, 51, 78)', position: 'absolute', inset: '0px' }}
              />
              <img data-gatsby-image-ssr data-main-image
                  style={{ opacity: 1 }} sizes="(min-width: 700px) 700px, 100vw" decoding="async" loading="lazy" alt="Express"
                  src={props.imageSrc}
              />
          </div>

          <div className="description">
              <h2>{props.title}</h2>
              <p>{props.paraDesc}</p>
          </div>

      </a>
  )
}
