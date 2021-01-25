import ourTeamContactTelegram from '../images/telegramIcon.svg';


export const Footer = () => {
    return (
        <div>
            <footer>
                <div className="FooterInfo">
                    <div className="container">
                        <div className="FooterSocial">
                            <a href="https://t.me/Tontonizer">
                                <img src={ourTeamContactTelegram} alt="" />
                            </a>
                        </div>
                        <div className="CrearotInfo">
                            <h3>Design and Site by Evegeniy Gerasiemnko</h3>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}