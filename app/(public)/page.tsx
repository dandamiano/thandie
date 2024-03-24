import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Stories from "../components/Stories"
import ServicesComponent from "../components/services/Services";

const LandingPage = () => {
    return (
        <div className="flex-col flex  overflow-x-hidden w-full">
            <Hero />
            <ServicesComponent />
            <Features />
            <Footer />
        </div>
    );
}

export default LandingPage;