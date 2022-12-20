import React from 'react'

export default function Section3Article(props) {
  return (
      <article className="mainSection3-Article">
          <div className=" mainSection3-ArticleImage"><img
              src={props.imgLink}
              alt="" /></div>
          <div className=" mainSection3-ArticleText">
              <h3>{props.quality}</h3>
              <p>{props.desc}</p>
          </div>
      </article>
  )
}
