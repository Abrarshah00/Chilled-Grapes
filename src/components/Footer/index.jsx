import React from "react";
import vector3 from '../../assets/Vector (3).svg'
import twitterIcon from "../../assets/twitter.svg";
import telegramIcon from "../../assets/telegram.svg";
import tiktokIcon from "../../assets/tiktok.svg";
import youtubeIcon from "../../assets/youtube.svg";
import fbIcon from "../../assets/facebook-one.svg";
import instagramIcon from "../../assets/instagram.svg";
import "../../styles/footer.styles.scss";


const Footer = () => {
    const socialDetails = [
        { icon: twitterIcon },
        { icon: tiktokIcon },
        { icon: telegramIcon },
        { icon: youtubeIcon },
        { icon: fbIcon },
        { icon: instagramIcon },
    ];
    return (
        <div className="footer-container">
            <div className="footer-title-box">
                <h1 className='title'>CHILLED GRAPE</h1>
                <p className="footer-lorem-text">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lorem ipsum
                    dolor sit amet, <br /> consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet.
                </p>
                <img src={vector3} alt="Background" />
            </div>
            <div className="footer-menu-box">
                <div className="footer-company-menu">
                    <h4 className="links-title">Company</h4>
                    <p className="company-links">About</p>
                    <p className="company-links">Careers</p>
                    <p className="company-links">Our Work</p>
                    <p className="company-links">Contact</p>
                </div>
                <div className="footer-products-menu">
                    <h4 className="links-title">Products</h4>
                    <p className="company-links">About</p>
                    <p className="company-links">Careers</p>
                    <p className="company-links">Our Work</p>
                    <p className="company-links">Contact</p>
                </div>
                <div className="footer-social-menu">
                    <h4 className="links-title">Follow Us</h4>
                    <div className="social-icons-container">
                        {socialDetails?.map((socialDetails, index) => (
                            <div className="icon-container" key={index}>
                                <img src={socialDetails.icon} alt="icon" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
