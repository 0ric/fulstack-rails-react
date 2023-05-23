import React from 'react'
import './Popup.css'
function Popup({message,color}){
    return (
        <div className={`popup ${color}`}>
           {message}
        </div>

    )
}
export default Popup