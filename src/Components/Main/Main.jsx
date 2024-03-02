import React from 'react';
import './Main.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import main_img from '../Assets/hero_image.png';

const Main = () => {
    return (
        <div className='main'>
            <div className="main-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="main-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="Hand Icon" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="main-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="Arrow Icon" />
                </div>
            </div>
            <div className="main-right">
                <img src={main_img} alt="Main" />
            </div>
        </div>
    );
};

export default Main;