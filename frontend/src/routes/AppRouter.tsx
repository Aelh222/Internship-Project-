import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Browse from "../pages/Browse/Browse";
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails";
import Sell from "../pages/Sell/Sell";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/phones/:id" element={<PhoneDetails />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;