import ourTeamFirstDeveloper from '../images/ourTeamFirstDeveloper.png';
import ourTeamSecondDeveloper from '../images/ourTeamSecondDeveloper.png';
import ourTeamContactGitHub from '../images/contactIcon.svg';
import ourTeamContactTelegram from '../images/telegramIcon.svg';

export const OurTeam = () => {
    return (
        <div>
            <div className="OurTeam">
                <div className="container">
                    <div className="OurTeamHeading">
                        <h1>our team</h1>
                    </div>
                    <div className="OurTeamInfo">
                        <div className="OurTeamColumn">
                            <img src={ourTeamFirstDeveloper} alt="FirstDeveloper" />
                            <h5>Misha Medvedev</h5>
                            <p>C#/Unity Developer / TeamLead</p>
                            <a href="https://github.com/MedMM" className="OurTeamContact">
                                <img src={ourTeamContactGitHub} alt="ContactGitHub" />
                            </a>
                            <a href="https://t.me/prophecy_chill" className="OurTeamContact">
                                <img src={ourTeamContactTelegram} alt="ContactTelegram" />
                            </a>

                        </div>
                    </div>
                    <div className="OurTeamInfo">
                        <div className="OurTeamColumn">
                            <img src={ourTeamSecondDeveloper} alt="" />
                            <h5>Evgeniy Gerasimenko</h5>
                            <p>UX/UI Designer / Front-end Developer</p>
                            <a href="https://github.com/Clesy" className="OurTeamContact">
                                <img src={ourTeamContactGitHub} alt="ContactGitHub" />
                            </a>
                            <a href="https://t.me/prophecy_chill" className="OurTeamContact">
                                <img src={ourTeamContactTelegram} alt="ContactTelegram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}