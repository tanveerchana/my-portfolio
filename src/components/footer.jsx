import '../app.css';
export default function Footer() {
    return (
        <div className="footer">
            <h2 className="ftr-heading">Contact</h2>
            <div className='ftr-container'>

                <div className="ftr-container-1">
                    {/* <Form/> */}
                </div>
                <div className="ftr-container-2">
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
                            <a className="ftr-links" href="https://www.linkedin.com/in/tanveer-singh007/">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
