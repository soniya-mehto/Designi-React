import React from 'react'

export default function Section3Article(props) {
  return (
      <article className="styles__Item-sc-1m81i5g-1 mainSection3-Article">
          <div className="styles__ImageContainer-sc-1m81i5g-3 mainSection3-ArticleImage"><img
              src={props.imgLink}
              alt="" /></div>
          <div className="styles__Content-sc-1m81i5g-2 mainSection3-ArticleText">
              <h3>{props.quality}</h3>
              <p>{props.desc}</p>
          </div>
      </article>
  )
}
