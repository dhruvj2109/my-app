import React from "react";
import "./Features.css";
const FeaturesHeader = () => {
    const benefits = [
        { id: "1", title: "Guidance on your past portfolio" },
        { id: "2", title: "Average stock target of 100-300% " },
        { id: "3", title: "Hard-hitting and Profit-Yielding stocks" },
        {
            id: "4",
            title: "Complete guide for New Beginners in the world of Stocks",
        },
        {
            id: "5",
            title: "Recommendation of Non-conventional aggressive stocks to maximise your profits",
        },
        {
            id: "6",
            title: "Recommendations based on thorough research and knowledge based real market facts",
        },
        { id: "7", title: "Targeting the long-term returns " },
        { id: "8", title: "Clear Buy, Sell and Hold updates" },
    ];
    return (
        <div className="header-cont">
            <div className="features-desc">
                <p className="features-desc__first-para">
                    We believe that Consistency, Guidance and Updates makes a
                    great investor, not stock ideas or tips.
                </p>
                <p className="features-desc__second-para">
                    We offer Recommended Stocks Advisory reports.
                </p>
            </div>
            <div className="key-features">
                <p>Key Features include</p>
            </div>
            <div className="benefits-div">
                {benefits.map(items => (
                    <div className="grid-div">
                        <p className="id">{items.id}</p>
                        <p className="title">{items.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesHeader;
