import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../shared/components";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";


export const HeroesRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />

        <Route path="hero/:heroId" element={<HeroPage />} />
        <Route path="search" element={<SearchPage />} />

        <Route path="/" element={<Navigate to="marvel" />} />
      </Routes>
      </div>
    </>
  );
};
