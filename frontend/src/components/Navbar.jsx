import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white">V</div>
        <span className="text-xl font-bold text-white tracking-tight">Drive<span className="text-blue-400">Select</span></span>
      </div>

      <div className="flex gap-6 text-slate-300 font-medium">
        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
        <Link to="/vehicles" className="hover:text-blue-400 transition-colors">Vehicles</Link>
      </div>

      <div className="flex gap-4">
        <Link to="/login" className="text-slate-300 hover:text-white pt-2">Login</Link>
        <Link to="/signup" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20">
          Join Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;