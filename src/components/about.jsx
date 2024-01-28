import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="about-section">
            <div className="about-heading">
                <h1>Hello! I'm Tanveer Singh, residing in ਪੰਜਾਬ. I have a solid foundation in web development, with skills in crafting unique online experiences. Stay tuned for my creative projects!</h1>
            </div>
            <div className="about-mbtn">
                <Link to={"/about"}><button>More About Me</button></Link>
            </div>
        </div>
    );
}