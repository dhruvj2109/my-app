import React from "react";
import "./Feedback.css";

const Feedback = () => {
    return (
        <div className="feedback-cont">
            <div className="feedback-heading">
                <p>kind words from our awesome subscriber base -</p>
            </div>
            <div className="feedback-combo">
                <div className="feedback-combo__image">
                    <img />
                </div>
                <div className="feedback-combo__para">
                    <p>
                        Grow With Stocks find hidden gems at very attractive
                        price. Their recommendations are based on plain business
                        fundamentals and they do not encourage trading. They
                        believe in Investment philosophy with a horizon of at
                        least 1-2 years. I recommend GWS to everyone who would
                        like to become a better investor and make money in the
                        stock market.
                    </p>
                    <p className="name">Hardik Patwa, Mumbai</p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
