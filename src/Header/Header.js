import React from "react";
import "./Header.css";

const Header = () => {
    const charts = [
        { title: "Acrysil India (400% returns)" },
        { title: "Atul Auto (500% returns)" },
        { title: "Cera Sanitaryware (700% returns)" },
        { title: "La Opala RG (1200% returns)" },
        { title: "Finolex cables (180%returns)" },
        { title: "Amara Raja Batteries (220% returns)" },
        { title: "Astral Poly Technik (500% returns)" },
        { title: "Superhouse (160% returns)" },
        { title: "Suprajit Engineering - (350% returns)" },
        { title: " Arrow coated (1500% returns)" },
    ];
    return (
        <div className="header">
            <div className="navigation-bar">
                <p>growwithstocks</p>
                <button>Get in Touch</button>
            </div>
            <div className="subscription-div">
                <p>2 Years Subscription to tap 300% - 500% returns </p>
            </div>
            <div className="investing-benefits">
                <p>
                    Investing in unconventional fundamentally strong growth
                    stocks could help you beat the market and build wealth.
                </p>
                <p>
                    We can say that with confidence because, GROW WITH STOCKS
                    has produced these kinds of winners over the past decade.
                </p>
            </div>
            <div className="winners-para">
                <p>Some of our winners include</p>
            </div>
            <div className="winners-chart">
                {charts.map(items => (
                    <div className="winners-chart__combo">
                        <p>{items.title}</p>
                        <img src={items.img} />
                    </div>
                ))}
            </div>
            <div className="gulshan-div">
                <p>Gulshan Polyols Ltd. (590% returns)</p>
            </div>
            <div className="max-venture-cont">
                <div className="max-venture-cont__heading">
                    <p>
                        Our recommendation <span> Max Ventures </span> is now up
                        by <span> 50% </span> in a month and <span> 110% </span>{" "}
                        over the last <span> 3 </span>months.
                    </p>
                </div>
                <div className="max-venture__combo">
                    <div className="max-venture__combo-desc">
                        <p className="max-venture__combo-desc__first-para">
                            High-quality stocks offer investors a generational
                            wealth-building opportunity.
                        </p>
                        <p className="max-venture__combo-desc__second-para">
                            It starts with understanding the stock market which
                            can fluctuate in the short term but history proves
                            that the stock market's value rises and makes money
                            for investors.
                        </p>
                    </div>
                    <div className="max-venture__combo-image">
                        <img src="" alt="Image Space" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
