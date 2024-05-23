import React, { useState } from 'react'

const hideAndShow = {background:"red",width:"300px",marginInline:"auto",marginTop:"10px"}

const hoverHeader = {background:"skyBlue",width:"100px",marginInline:"auto",cursor:"pointer"}
const Tooltip = () => {

  const [isVisible,setIsVisible] = useState(false)
  return (
    <div style={{textAlign:"center",paddingTop:"10px"}}>
    <h3 
    style={hoverHeader}
    onMouseEnter={()=> setIsVisible(true)}
    onMouseLeave={()=> setIsVisible(false)}
    >Hover</h3>

    {isVisible &&   <div style={hideAndShow}>
        <h1>I hide and show</h1>
      </div>}
    </div>
  )
}

export default Tooltip
