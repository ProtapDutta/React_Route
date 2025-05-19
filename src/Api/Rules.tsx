import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Details from "./Details";
import View from "./View";

const Ruless = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/details" replace />} />
          <Route path="/details" element={<Details />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Ruless;