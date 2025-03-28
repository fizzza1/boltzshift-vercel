import "./index.css"; // ✅ Ensure this is imported
import "./App.css";
import BookingPage from "./pages/Components/BookingPage";
import TestimonialPage from "./pages/Components/TestimonialPage";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./Pages/Home/home";

function App() {
  return (
    <>
      <div>
        <Home />

      </div>
    </>
  );
}

export default App;
