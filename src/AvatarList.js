import React from 'react'
const AvatarList =(props)=>{
    return (
    <div className="avatarStyle ma4 bg-light-red dib pa2 tc grow shadow-4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} />
    <h1 > {props.name}</h1>
    <p> {props.designation}</p>
    </div>
    )
}
export default AvatarList