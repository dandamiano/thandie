import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Stories from "../components/Stories"

const LandingPage = () => {
    return (
        <div className="flex-col flex">
            <Hero />
            <Features />
            <Footer />
        </div>
    );
}

export default LandingPage;