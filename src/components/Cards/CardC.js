import React from 'react'
import Images from '../subComp/Images'
import Button from '../subComp/Button'
import Names from '../subComp/Names'

const CardC = () => {
  let Image3 = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
  return (
    <>
    <div>
       <divb>
        <h3>THIS IS CARD C</h3>
        {/* <p>my name is {name}</p> */}
        <img src={Image3} alt="" />
        <Button />
        <Names name="iphone" occupation="doctor" age="10" city="abuja" />
      </divb>

    </div>
    </>
  )
}
export default CardC