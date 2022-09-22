import React from 'react'

const BgIcon = (props) => {
  return (
    <div className={`${props.bg} rounded-lg h-[3rem] md:h-[4rem] lg:h-[5rem] aspect-[1/1] flex justify-center items-center`}>
        {props.icon}
    </div>
  )
}

export default BgIcon