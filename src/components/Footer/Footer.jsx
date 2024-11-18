import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <img src="../public/stack-overflow.png" alt="" className="image" />
                </div>
                <div className="footer-column">
                    <h4>STACK OVERFLOW</h4>
                    <ul>
                        <li>Questions</li>
                        <li>Help</li>
                        <li>Chat</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>PRODUCTS</h4>
                    <ul>
                        <li>Teams</li>
                        <li>Advertising</li>
                        <li>Talent</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>COMPANY</h4>
                    <ul>
                        <li>About</li>
                        <li>Press</li>
                        <li>Work Here</li>
                        <li>Legal</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Contact Us</li>
                        <li>Cookie Settings</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>STACK EXCHANGE NETWORK</h4>
                    <ul>
                        <li>Technology</li>
                        <li>Culture & recreation</li>
                        <li>Life & arts</li>
                        <li>Science</li>
                        <li>Professional</li>
                        <li>Business</li>
                        <li>API</li>
                        <li>Data</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                {/* <div className="social-links">
                    <span>Blog</span>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>LinkedIn</span>
                    <span>Instagram</span>
                </div> */}
                <p className="namelink">
                    Developed by <a href="https://www.linkedin.com/in/gargi-mohanty-yr2025/" className="name" > &nbsp;Gargi Mohanty</a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
