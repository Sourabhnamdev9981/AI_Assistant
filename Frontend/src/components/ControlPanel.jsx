// frontend/src/components/ControlPanel.jsx

import React from "react";

export default function ControlPanel({ onStart, onAnalyze, disabledAnalyze, loading }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 mt-8 justify-center items-center">
      {/* Start Capturing Button */}
      <button
        onClick={onStart}
        className="w-60 py-3 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-md transform transition duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
      >
        {loading ? (
          <span className="animate-pulse">Capturing...</span>
        ) : (
          "🎥 Start Capturing"
        )}
      </button>

      {/* Analyze Button */}
      <button
        onClick={onAnalyze}
        disabled={disabledAnalyze}
        className={`w-60 py-3 px-6 ${
          disabledAnalyze
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"
        } text-white rounded-full font-bold text-lg shadow-md transform transition duration-300 hover:scale-110 hover:shadow-xl active:scale-95`}
      >
        {loading ? (
          <span className="animate-pulse">Analyzing...</span>
        ) : (
          "🧠 Analyze"
        )}
      </button>
    </div>
  );
}
