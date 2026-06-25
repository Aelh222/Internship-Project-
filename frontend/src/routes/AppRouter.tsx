import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Browse from "../pages/Browse/Browse";
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/phones/:id" element={<PhoneDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;