import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
    const testimonial = [
        {
            image: "image",
            name: "Jai Shah",
            title: "I Joined GWS services 4 years ago and here is my honest review on it. I would like to say that I am in stock market because of GWS. My total investment in last 4 years is 7 Lacs and I have returns of 21+ Lacs because of GWS. There is no other way, that could have made this kind of return, so I am very thankful to GWS family. I would like to mention that within 2 years many stocks in my portfolio made huge returns like 3 to 6 times. I am very happy with GWS",
        },
        {
            image: "image",
            name: "Gayathri Umachandran",
            title: "I had started trading a few years back, but mostly did it from random suggestions I got from news channels and through some irregular study. Only in the year 2014, I had made my association with GROW WITH STOCKS and took an annual subscription. I have not repented ever since. They have not only made me richer monetarily but also knowledgeable. The fact that I recommend it to my friends and even mentioned it in my Facebook status, shows my respect for the GROW WITH STOCKS team",
        },
    ];
    return (
        <div className="testimonial-cont">
            <div className="testimonial__first-div">
                {testimonial.map(details => (
                    <div className="testimonial-div">
                        <div className="combo">
                            <img src={details.image} />
                            <p>{details.name}</p>
                        </div>
                        <div className="description">
                            <p>{details.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="testimonial__first-div">
                <div className="image-name__combo">
                    <div className="image">
                        <img src="" alt="image Space" />
                    </div>
                    <p>Jai Shah</p>
                </div>
                <div className="description">
                    <p>
                        I Joined GWS services 4 years ago and here is my honest
                        review on it. I would like to say that I am in stock
                        market because of “GWS". My total investment in last 4
                        years is 7 Lacs and I have returns of 21+ Lacs because
                        of GWS. There is no other way, that could have made this
                        kind of return, so I am very thankful to GWS family. I
                        would like to mention that within 2 years many stocks in
                        my portfolio made huge returns like 3 to 6 times. I am
                        very happy with GWS.
                    </p>
                </div>
            </div>

            <div className="testimonial__second-div">
                <div className="image-name__combo">
                    <div className="image">
                        <img src="" alt="image Space" />
                    </div>
                    <p>Gayathri Umachandran</p>
                </div>
                <div className="description">
                    <p>
                        I had started trading a few years back, but mostly did
                        it from random suggestions I got from news channels and
                        through some irregular study. Only in the year 2014, I
                        had made my association with GROW WITH STOCKS and took
                        an annual subscription. I have not repented ever since.
                        They have not only made me richer monetarily but also
                        knowledgeable. The fact that I recommend it to my
                        friends and even mentioned it in my Facebook status,
                        shows my respect for the GROW WITH STOCKS team.
                    </p>
                </div>
            </div> */}
        </div>
    );
};

export default Testimonial;
