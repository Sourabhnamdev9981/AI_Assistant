// frontend/src/components/ScreenAssistant/ScreenCapturePreview.jsx

import React, { useState } from "react";

export default function ScreenCapturePreview({ screenshots }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  if (!screenshots.length) return null;

  return (
    <div className="mt-10 space-y-8">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
        🖼️ Captured Screenshots
      </h2>

      {/* Grid Layout for Screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {screenshots.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => openModal(src)}
          >
            <img
              src={src}
              alt={`screenshot-${i}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-6 rounded-2xl shadow-2xl max-w-5xl w-11/12 h-5/6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition"
              onClick={closeModal}
            >
              ❌
            </button>
            <img
              src={selectedImage}
              alt="Popup Screenshot"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
