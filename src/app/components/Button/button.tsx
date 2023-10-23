import React from 'react'

const Button = (props: any) => {
  return (
    <button className="hover:bg-orange_light duration-500">
      {props.children}
    </button>
  )
}

export default Button;
