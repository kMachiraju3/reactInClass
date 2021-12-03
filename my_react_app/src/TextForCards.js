import React from "react";

const TextForCards =(props)=>{
    return(
        <div>
            Hi! I'm Card {props.cardNum + "\n"}     
            Don't click on the other cards. Just use me :)
        </div>
    )
}

export default TextForCards;