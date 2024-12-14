import React, { useState } from 'react';
import Close from '../assets/close.svg';
import Megaphone from '../assets/megaphone.svg';
import Links from './Links';

const Button = () => {
    const [buttonClicked, setButtonClicked] = useState(false);


    return (
        <div className="button-container">
            <button className='button' onClick={() => setButtonClicked(!buttonClicked)}>
                {buttonClicked ? (
                    <img className='closeOpen' src={Close} alt="" />
                ) : (
                    <img className='closeOpen' src={Megaphone} alt="" />
                )
                }
            </button>
            {buttonClicked &&
                < Links />
            }
        </div>
    )
}

export default Button;