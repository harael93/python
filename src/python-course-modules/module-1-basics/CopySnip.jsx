import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // You can use any Prism theme you like

export default function CopySnip({ code, language = "python" }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#1e1e1e] text-white rounded-2xl p-4 mb-4 shadow-md">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-sm bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded-lg transition"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className={`language-${language} rounded-xl overflow-x-auto`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};



