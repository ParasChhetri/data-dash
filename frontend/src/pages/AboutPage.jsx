import { DataGridSection } from "../components/DataGridSection";
import { GlobalTeamSection } from "../components/GlobalTeamSection";
import { MissionSection } from "../components/MissionSection";

export const AboutPage = () => {
    return (
        <div className="min-h-screen w-full py-28 px-8">
            <DataGridSection />
            <MissionSection />
            <GlobalTeamSection />
        </div>
    );
}
