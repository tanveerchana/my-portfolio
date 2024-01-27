import Footer from "../components/footer";
import Navbar from "../components/navbar"

export default function AboutPage() {
    return (
        <>
            <div className="abt-page">
                <div className="intro-div">
                    <div className="left-cont">
                        <h3>A Developer by profession, nature enthusiast at heart.</h3>
                        <p>About Me</p>
                        <p>My name is Tanveer Singh.
                            I'm a Passionate web developer crafting digital innovations with code.
                        </p>
                    </div>
                    <div className="right-con">

                    </div>
                </div>
                <div className="second-div">
                    <div className="Long-image"></div>
                    <div className="more-abt-me">
                        <div className="feul-div">
                            <h3>What Drives Me</h3>
                            <p>Every project I undertake is fueled by a deep-seated passion for creating dynamic web solutions. I believe in the power of clean code and user-centric design, consistently striving to exceed expectations. Whether it's front-end development, back-end optimization, or user experience design, I am committed to delivering excellence.</p>
                        </div>
                        <div className="journey">
                            <h3>A Glimpse into My Journey</h3>
                            <p>Embarking on my professional journey, I've achieved noteworthy milestones and accomplishments. Commencing with the creation of a single webpage as my inaugural project, I transitioned to developing a sophisticated hotel booking website for my second venture. These experiences have not only honed my technical skills but have also cultivated a deep-seated commitment to innovation and a user-centric approach, shaping my professional ethos.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hobbies">
                        <div className="hobby-img"></div>
                        <div className="hobby-detail">
                            <h3>Beyond Work</h3>
                            <p>While I'm deeply passionate about my work as a software developer, there's more to me than just coding. Outside the professional realm, you'll find me immersing myself in various hobbies and interests. Whether it's gaming, exploring new cuisines, or spending time in nature, these facets of my life contribute to my holistic approach to software development. I find solace in nature, a place where I can unwind and recharge, effectively reducing the workload fatigue that comes with the dynamic world of development. Apart from my tech life, I have a profound love for cars, appreciating their design and the thrill of the open road. Oh, and I almost forgot to mention—I also have a knack for repairing engines.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}