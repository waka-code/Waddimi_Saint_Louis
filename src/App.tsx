import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./web/Header/Header";
import { Footer } from "./web/PagionFoot/Footer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PortfolioOverview = React.lazy(() => import("./web/Home/Home"));
const ProfessionalJourney = React.lazy(() => import("./web/About/About"));
const CreativeWorksDisplay = React.lazy(
  () => import("./web/Portfolio/Portfolio")
);
const Skills = React.lazy(() => import("./web/Skills/Skills"));

function App() {
  return (
    <HashRouter>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Header />
        <Suspense fallback={<Skeleton count={10} height={80} />}>
          <Routes>
            <Route path="/" element={<PortfolioOverview />} />
            <Route path="/About" element={<ProfessionalJourney />} />
            <Route path="/Portfolio" element={<CreativeWorksDisplay />} />
            <Route path="/Skills" element={<Skills />} />
          </Routes>
        </Suspense>
        <Footer />
      </SkeletonTheme>
    </HashRouter>
  );
}

export default App;
