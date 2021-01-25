import design from '../images/iconDesign.svg';
import responsive from '../images/iconResponisve.svg';
import customization from '../images/iconCustomization.svg';
import feedback from '../images/iconFeedback.svg';



export const ListFeatures = () => {
    return (
        <div>
            <div className="ListOfAmazingFeatures">
                <div className="container">
                    <div className="ListHeading">
                        <h1>List of amazing features</h1>
                    </div>
                    <div className="ListInfo">
                        <div className="ListColumn">
                            <img src={design} alt="Design" />
                            <h5>Awesome design</h5>
                            <p>We create our own personal design that pleases not only us but also our customers.</p>
                        </div>
                    </div>
                    <div className="ListInfo">
                        <div className="ListColumn">
                            <img src={responsive} alt="Responsive" />
                            <h5>Responsive</h5>
                            <p>We are always trying to make our applications as responsive as possible on different devices.</p>
                        </div>
                    </div>
                    <div className="ListInfo">
                        <div className="ListColumn">
                            <img src={customization} alt="Customization" />
                            <h5>Customization</h5>
                            <p>We strive to give users the ability to make some changes in our applications</p>
                        </div>
                    </div>
                    <div className="ListInfo">
                        <div className="ListColumn">
                            <img src={feedback} alt="Feedback" />
                            <h5>Awesome design</h5>
                            <p>You can always write to us about your suggestions or errors found. And we, in turn, will try to implement them in our game. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}