import React from 'react'
import "./footer.css"

const Footer = (props) => {
  return (
    <div className={`Footer bg-${props.mode}`} style={{color:props.mode==="light"?"black":"white"}}>
      <p><i className="fa-solid fa-copyright"></i> 2022 All rights reserved</p>
      <p>Blogger.in</p>
    </div>
  )
}

export default Footer