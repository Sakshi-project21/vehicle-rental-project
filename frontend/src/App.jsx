import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col items-center justify-center pt-20 text-center">
            <h1 className="text-6xl font-black text-white mb-6">
              Rent Your <span className="text-blue-400">Dream</span> Ride
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Premium cars and bikes at your fingertips. Simple, fast, and secure.
            </p>
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;