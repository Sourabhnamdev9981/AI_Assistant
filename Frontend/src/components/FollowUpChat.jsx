import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function FollowUpChat({ initialContext }) {
  const [messages, setMessages] = useState([
    { role: "system", content: `Context: ${initialContext}` },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const backendBase = "https://ai-assistant-2y5y.onrender.com";
  const chatEndpoint = `${backendBase}/chat`;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(chatEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `${initialContext}\n\nFollow-up: ${input}`,
        }),
      });
      const data = await res.json();

      setMessages([
        ...newMessages,
        { role: "assistant", content: data.response },
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "⚠️ Error fetching response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-indigo-700 mb-4">💬 Ask Follow-up Questions</h3>

      <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
        {messages.slice(1).map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm shadow ${
                msg.role === "user" ? "bg-blue-500 text-white" : "bg-green-100 text-gray-800"
              }`}
            >
              {msg.role === "assistant" ? (
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 border border-gray-300 rounded-l-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-r-xl hover:from-indigo-600 hover:to-purple-600 transition"
        >
          {loading ? "Sending..." : "Send ➤"}
        </button>
      </div>
    </div>
  );
}
