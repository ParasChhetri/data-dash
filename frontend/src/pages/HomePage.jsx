import { Steps } from "../components/Steps";
import { Testimonials } from "../components/Testimonials";
import { TryForFree } from "../components/TryForFree";

export const HomePage = () => {
    return (
        <main>
            <TryForFree />
            <Steps />
            <Testimonials />
        </main>
    );
}