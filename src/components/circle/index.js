import React from "react"
import { StyledCircle, Item } from "./style"

const Circle = () => {
  return (
    <StyledCircle className="circle" items={6}>
      <div className="center" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map(n => (
        <Item position={n}>
          <div className="content" />
        </Item>
      ))}
    </StyledCircle>
  )
}

export default Circle
