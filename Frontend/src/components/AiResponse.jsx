// frontend/src/components/AiResponse.jsx

import React from "react";
import FollowUpChat from "./FollowUpChat";

export default function AiResponse({ result }) {
  if (!result) return null;

  return (
    <div className="p-6 bg-gradient-to-br from-white to-gray-100 border border-gray-300 rounded-2xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
        🤖 AI Analysis Summary
      </h2>

      <p className="text-gray-800 leading-relaxed whitespace-pre-wrap text-lg">
        {result.groq_response}
      </p>

      <div className="pt-4 border-t">
        <FollowUpChat initialContext={result.groq_response} />
      </div>
    </div>
  );
}
