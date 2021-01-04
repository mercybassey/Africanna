import React from 'react';

import ReactTypingEffect from 'react-typing-effect';

import './typing-effect.styles.css';


const TypingEffect = () => {
    return(
        <div className="African">
             <ReactTypingEffect typingDelay="2000ms" eraseDelay="3000" eraseSpeed="500ms"  style={{ FontWeight: "bolder"}} text={["I am African. I am true."]} className="typing-demo"/>
        </div>
    )
}

export default TypingEffect;