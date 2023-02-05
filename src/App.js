import "./App.css";
import FeaturesHeader from "./Features/FeaturesHeader";
import Feedback from "./Feedback/Feedback";
import Header from "./Header/Header";
import Testimonial from "./Testimonial/Testimonial";

function App() {
    return (
        <div className="App">
            <div className="App-first-div">
                <Header />
            </div>
            <div className="features">
                <FeaturesHeader />
            </div>
            <div className="feedback">
                <Feedback />
            </div>
            <div className="testimonial">
                <Testimonial />
            </div>
        </div>
    );
}

export default App;
