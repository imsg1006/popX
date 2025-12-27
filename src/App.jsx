import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileLayout from "../src/pages/layouts/MobileLayout";

import LandingPage from "../src/pages/LandingPage";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/SignUpPaage";
import AccountSettingsPage from "../src/pages/AccountSettings";

export default function App() {
  return (
    <BrowserRouter>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account" element={<AccountSettingsPage />} />
        </Routes>
      </MobileLayout>
    </BrowserRouter>
  );
}
