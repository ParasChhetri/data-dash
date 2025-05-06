import { Accordion } from "../components/Accordion";
import { Steps } from "../components/Steps";
import { SupportSection } from "../components/SupportSection";
import { Testimonials } from "../components/Testimonials";
import { TryForFree } from "../components/TryForFree";

export const HomePage = () => {
    return (
        <main>
            <TryForFree />
            <Steps />
            <Testimonials />
            <SupportSection />
            <Accordion />
        </main>
    );
}