// frontend/src/components/Layout.jsx
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 text-gray-900">
      <header className="bg-gradient-to-r from-blue-700 to-purple-600 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide text-center">🚀 AI Screen Assistant</h1>
      </header>
      <main className="p-6 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
