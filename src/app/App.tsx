import { NavBar } from "./components/NavBar";
import { CoverPage } from "./components/CoverPage";
import { Page1Task1 } from "./components/Page1Task1";
import { BundleSelector } from "./components/BundleSelector";
import { SurpriseReveal } from "./components/SurpriseReveal";
import { Page2HeroImage } from "./components/Page2HeroImage";
import { Page3AIWorkflow } from "./components/Page3AIWorkflow";
import { Page4DeltaLog } from "./components/Page4DeltaLog";

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <NavBar />
      <div style={{ paddingTop: "64px" }}>
        <CoverPage />
        <Page1Task1 />
        <BundleSelector />
        <SurpriseReveal />
        <Page2HeroImage />
        <Page3AIWorkflow />
        <Page4DeltaLog />
      </div>
    </div>
  );
}
