import React from 'react'

const Dabba = ({h,w,bg}) => {

    let styles = {
        height : `${h}px`,
        width : w,
        backgroundColor : bg
    }

  return (
    <div style={styles}>
    </div>
  )
  
}

export default Dabba