import React, { Suspense } from 'react';
import { HashRouter , Route, Routes } from "react-router-dom";
import { Header } from "./web/Header/Header";
import { Footer } from "./web/PagionFoot/Footer";

const Work = React.lazy(() => import('./web/Home/Home'));
const About = React.lazy(() => import('./web/About/About'));
const Portfolio = React.lazy(() => import('./web/Portfolio/Portfolio'));
const Skills = React.lazy(() => import('./web/Skills/Skills'));

function App() {
  return (
    <HashRouter >
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </Suspense>
      <Footer />
    </HashRouter >
  );
}

export default App;