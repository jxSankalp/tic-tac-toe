import React from 'react'

function Box({handle , tempKey}) {
  return (
    <div
      className="box h-[130px] w-[130px] rounded-md "
      style={{ backgroundColor: "#233441" }}
      onClick={(e)=>{handle(e,tempKey)}}
    ></div>
  );
}

export default Box