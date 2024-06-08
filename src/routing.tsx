import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BookingPage } from "./pages/BookingPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
};
export default Routing;
