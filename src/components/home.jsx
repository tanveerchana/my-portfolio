import '../app.css';
import BgParticle from './particle';

export default function Home() {
    return (<>
        <div>
            <BgParticle />
        </div>
        <div className='home-heading'>
            <div className='home-inner'>
                <h1>Where Code Meets Creativity Unleashed</h1>
                <p> Welcome to my digital playground, where innovation and aesthetics converge to bring your ideas to life</p>
            </div>
        </div>
    </>
    );
}