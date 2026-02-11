// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Timeline from "./pages/Timeline";
import PasswordGate from "./components/PasswordGate";
import TypingGame from "./pages/TypingGame"; // Import TypingGame

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        {/* TIMELINE WRAPPED IN PASSWORD */}
        <Route
          path="/timeline"
          element={
            <PasswordGate>
              <Timeline />
            </PasswordGate>
          }
        />

        {/* Typing Game Route */}
        <Route path="/typing-game" element={<TypingGame />} />
      </Routes>
    </BrowserRouter>
  );
}
