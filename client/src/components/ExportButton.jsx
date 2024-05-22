import React, { useEffect } from 'react';
import { useState } from 'react';

const ExportButton = ({ colorName, colors }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const snippet = generateSnippet();
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const generateSnippet = () => {

    const colorSnippet = `'${colorName}': {\n${Object.entries(colors)
      .map(([key, value]) => `'${key}': '${value}',`).join('\n')}\n},`;
    return colorSnippet;
  };

  return (
    <div className="p-4 border rounded-lg shadow-xl w-80 bg-white">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleCopy}
          className="px-2 py-1 text-sm text-white rounded"
          style={{
            background: colors?.[800]
          }}
        >
          {copied ? 'Copied!' : 'Copy code'}
        </button>
      </div>
      <div className=" p-2 rounded text-sm">
        <pre>{generateSnippet()}</pre>
      </div>
    </div>
  );
};

export default ExportButton;
