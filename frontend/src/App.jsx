function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900 text-white">
      <div className="p-10 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 text-center">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
          Vehicle Rental Project
        </h1>
        <p className="text-slate-400 text-lg">
          Frontend and Tailwind are officially connected!
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;