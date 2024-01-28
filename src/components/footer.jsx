import '../app.css';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div className="footer">
            {/* <h2 className="ftr-heading">Contact</h2> */}
            <div className='ftr-container'>
                <div className="ftr-container-1">
                    <h3>Let's build something great together ?</h3>
                    <Link to={"/contact"}><button>Contact Me</button></Link>
                </div>
                <div className="ftr-container-2">
                    <div className='container-2-heading'>
                        <h3>Connect with me on social media platforms !</h3>
                    </div>
                    <div>
                        <ul className="ftr-list">
                            <li>
                                <a className="ftr-links" href="https://github.com/tanveerchana">Github</a>
                            </li>
                            <li >
                                <a className="ftr-links" href="mailto:tanveer0736@gmail.com">Email</a>
                            </li>
                            <li>
                                <a className="ftr-links" href="#">Resume</a>
                            </li>
                            <li>
                                <a className="ftr-links" href="https://www.linkedin.com/in/tanveersingh007/">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>Copyright &#9400; 2024 Tanveer Singh. All rights reserved.</p>
            </div>
        </div>
    );
}
