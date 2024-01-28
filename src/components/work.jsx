import { Link } from "react-router-dom";

export default function Work() {
    return (
        <>
            <div className="work-section">
                <div className="work-video"></div>
                <div className="work-title">
                    <h1>I craft unique solutions, listening, observing, creating, and validating with a human touch for efficient results, redefining digital experiences.</h1>
                    <Link to={"/work"}><button>Projects</button></Link>
                </div>
                <div className="work-video"></div>
            </div></>
    );
}