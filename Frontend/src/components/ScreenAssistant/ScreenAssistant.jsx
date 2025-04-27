// frontend/src/components/ScreenAssistant/ScreenAssistant.jsx
import React from "react";
import useScreenCapturer from "../../hooks/useScreenCapturer";
import useAnalyzeScreenshots from "../../hooks/useAnalyzeScreenshots";

import ControlPanel from "../ControlPanel";
import ScreenCapturePreview from "./ScreenCapturePreview";
import AiResponse from "../AiResponse";

export default function ScreenAssistant() {
  const { startCapture, screenshots, captureStatus, videoRef } = useScreenCapturer();
  const { analyze, result, loading, error, analyzeStatus } = useAnalyzeScreenshots();

  const handleStart = async () => {
    await startCapture();
  };

  const handleAnalyze = () => {
    if (screenshots.length > 0) {
      analyze(screenshots);
    }
  };

  return (
    <div className="p-8 space-y-8">
      {/* Welcome Title */}
      <h1 className="text-5xl font-bold text-center text-gray-800 animate-pulse">
        🧠 Your Smart Screen Assistant
      </h1>

      {/* Instructions Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4 border border-gray-200">
        <h2 className="text-2xl font-semibold text-indigo-600">How to Use:</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Click <strong>"Start Capturing"</strong> and select your screen or window.</li>
          <li>Once captured, click <strong>"Analyze"</strong> to get AI's smart feedback.</li>
          <li>Interact with AI for further insights! 🔍</li>
        </ul>
      </div>

      {/* Control Panel */}
      <ControlPanel
        onStart={handleStart}
        onAnalyze={handleAnalyze}
        disabledAnalyze={screenshots.length === 0 || loading}
        loading={loading}
      />

      {/* AI Response Section */}
      <div className="bg-purple-50 p-6 rounded-xl shadow-md">
        <AiResponse result={result} />
      </div>

      {/* Hidden Video */}
      <video ref={videoRef} autoPlay playsInline style={{ display: "none" }} />

      {/* Screenshots Preview */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <ScreenCapturePreview screenshots={screenshots} />
      </div>
    </div>
  );
}
