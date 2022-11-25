import React from 'react'
import logo from "./sign.svg"

const Sign_img = () => {
  return (
    <>
    <div className="right_data mt-4 p-3" style={{width:"100%"}}>
      
            <div className="sign_img mt-4" />
            <img src={logo} style={{ maxWidth: 400 }} alt="" />
            </div>
    </>
  )
}

export default Sign_img