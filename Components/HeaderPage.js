"use client"
import React from 'react'

function HeaderPage({title,title2,img}) {

  return (
    <section className="headerPages">
    <div className="content">
      <div className="imgHeader">
        <img src={img} alt="header"/>
      </div>
      <div className="info">
        <h2>{title}   </h2>
        {title2&&<h3>{title2}   </h3>}
       
      </div>
    </div>
  </section>
  )
}

export default HeaderPage