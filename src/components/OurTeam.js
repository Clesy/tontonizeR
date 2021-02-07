import ourTeamFirstDeveloper from '../images/ourTeamFirstDeveloper.png';
import ourTeamSecondDeveloper from '../images/ourTeamSecondDeveloper.png';
import ourTeamContactGitHub from '../images/contactIcon.svg';
import ourTeamContactTelegram from '../images/telegramIcon.svg';

export const OurTeam = () => {
    return (
        <div id="team" className="our-team">
            <div className="container">
                <div className="our-team-heading">
                    <h1>Our team</h1>
                </div>
                <div className="our-team-info">
                    <div className="our-team-column">
                        <img src={ourTeamFirstDeveloper} alt="FirstDeveloper" />
                        <h5>Misha Medvedev</h5>
                        <p>C#/Unity Developer </p>
                        <p>TeamLead</p>
                        <a href="https://github.com/MedMM" className="our-team-contact">
                            <img src={ourTeamContactGitHub} alt="ContactGitHub" />
                        </a>
                        <a href="https://t.me/child_prophecy" className="our-team-contact">
                            <img src={ourTeamContactTelegram} alt="ContactTelegram" />
                        </a>
                    </div>
                    <div className="our-team-info">
                        <div className="our-team-column">
                            <img src={ourTeamSecondDeveloper} alt="" />
                            <h5>Evgeniy Gerasimenko</h5>
                            <p>UX/UI Designer </p>
                            <p>Front-end Developer</p>
                            <a href="https://github.com/Clesy" className="our-team-contact">
                                <img src={ourTeamContactGitHub} alt="ContactGitHub" />
                            </a>
                            <a href="https://t.me/child_prophecy" className="our-team-contact">
                                <img src={ourTeamContactTelegram} alt="ContactTelegram" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}