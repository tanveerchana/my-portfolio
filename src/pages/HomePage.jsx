import About from "../components/about";
import AboutWork from "../components/aboutwork";
import Home from "../components/home";
import Work from "../components/work";

export default function HomePage(){
    return(
        <>
        <Home/>
        <Work/>
        <About/>
        <AboutWork/>
        </>
    );
}